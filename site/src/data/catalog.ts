import { models as brevilleModels, codesByModel, codeSlug, playbooks, deepDives } from './breville';

export type Severity = 'low' | 'medium' | 'high';
export type Diy = 'easy' | 'moderate' | 'hard' | 'not recommended';

export interface Brand { slug: string; name: string; blurb: string; }
export interface ModelInfo {
  brandSlug: string; slug: string; name: string; sku: string; blurb: string;
  logAccess?: string; notes?: string; codeFormat: string; shortName?: string;
}
export interface Entry {
  brandSlug: string; modelSlug: string; code: string; slug: string; shown: string;
  meaning: string; component: string; severity: Severity; diy: Diy;
  phase: string; quick: string; steps: string[]; stop: string;
  partCost: string; serviceCost: string; worth: string; extra?: string[];
  faultTitle: string;
}

export const brands: Brand[] = [
  { slug: 'breville', name: 'Breville / Sage', blurb: 'Barista Touch, Barista Touch Impress, Oracle, Oracle Touch, Oracle Jet and Dual Boiler. ER-codes from the service tables Breville does not publish.' },
  { slug: 'jura', name: 'Jura', blurb: 'Numbered Error 1 to 8 on E, ENA, S, J, Z and GIGA machines, plus the messages that will not clear.' },
  { slug: 'philips-saeco', name: 'Philips / Saeco', blurb: 'Error 01 to 22 on LatteGo 2200/3200/4300/5400, Xelsis, Incanto and older Saeco machines.' },
  { slug: 'delonghi', name: "De'Longhi", blurb: 'General Alarm, Insert Infuser, Water Circuit Empty and the other Magnifica, Dinamica and PrimaDonna messages, with the hidden numeric codes.' },
  { slug: 'ge', name: 'GE Appliances', blurb: 'GE dishwasher C-codes, H2O and 888, and GE dryer E-codes. GE has no official code page, so this fills the gap.' },
  { slug: 'samsung', name: 'Samsung', blurb: 'Range and wall-oven codes: SE, E-08, E-0A, E-27, tE and the rest.' },
];

const SVC_COFFEE = 'Out-of-warranty manufacturer service for a super-automatic is typically $250 to $500 including return shipping; independent espresso repairers are usually cheaper for a single part.';
const SVC_HOME = 'A home visit from an appliance technician runs $120 to $250 for diagnosis plus the part. Boards are the expensive part; sensors and switches are cheap.';

export const models: ModelInfo[] = [
  ...brevilleModels.map((m) => ({
    brandSlug: 'breville', slug: m.slug, name: m.name, sku: m.sku,
    blurb: `${codesByModel[m.sku].length} codes. The ${m.name} has ${m.boilers}; most codes are one of its temperature sensors, a water-level or flow fault, or the grinder.`,
    logAccess: m.logAccess, notes: m.notes,
    codeFormat: `${m.codePrefix}${codesByModel[m.sku][0].code.replace(/^(ER|E|Error )/, '')}`,
  })),
  {
    brandSlug: 'jura', slug: 'automatic-machines', name: 'automatic machines (E6, E8, ENA, S8, J8, Z10, GIGA)', shortName: '', sku: 'all models', codeFormat: 'Error 2',
    blurb: 'Jura uses the same numbered errors across its range. Errors 1 to 5 are the thermoblock heaters and their sensors, 6 is the ceramic valve, 8 is the brew group. Messages such as "Fill water tank" are separate and covered below.',
    notes: 'Numbering shifts slightly between the S/X/J/Z family and the F/E80 family; the page for each code says where it differs.',
  },
  {
    brandSlug: 'philips-saeco', slug: 'espresso-machines', name: 'espresso machines (LatteGo, Xelsis, Incanto, Saeco)', shortName: '', sku: 'all models', codeFormat: 'Error 05',
    blurb: 'Philips publishes six user-fixable codes and says the rest need service. This page covers all of them, including the "service" codes, with what the technician will actually look at.',
  },
  {
    brandSlug: 'delonghi', slug: 'magnifica-dinamica', name: 'Magnifica, Dinamica and PrimaDonna', shortName: 'Magnifica / Dinamica', sku: 'ECAM / ESAM', codeFormat: 'General Alarm',
    blurb: "De'Longhi shows words, not codes, on most machines. Newer models also log a numeric code (1101, 1454, 2257 and so on) which service uses; both are listed.",
    notes: 'Fix steps are the same across ECAM (Magnifica S, Dinamica, PrimaDonna) and ESAM (older Magnifica) machines unless a page says otherwise.',
  },
  {
    brandSlug: 'ge', slug: 'dishwasher', name: 'dishwasher', sku: 'GDT / GDF / GDP / Profile / Cafe', codeFormat: 'C3',
    blurb: 'GE dishwashers show C-codes for drain, fill and heat faults, H2O for no water, and 888 or CFE for the board. GE has no official list.',
    logAccess: 'On most GE dishwashers, hold Start for 5 seconds with the door open to enter the service menu; on models with a hidden display, press Select Cycle and Start together for 5 seconds. The last error shows on the display. Turn power off at the breaker for 60 seconds to reset the board.',
  },
  {
    brandSlug: 'ge', slug: 'dryer', name: 'dryer', sku: 'GTD / GFD / Profile', codeFormat: 'E8',
    blurb: 'GE dryers show E-codes for thermistors, the door switch, the motor tachometer and the control panel. The same code can mean different things on different vintages; each page says which.',
    logAccess: 'On newer GE dryers (GTD/GFD 2016 on), with the dryer off, press and hold the Signal and Temp buttons for 5 seconds to enter service mode; the last stored error shows. On SmartHQ models the app lists stored codes. Unplugging for 5 minutes resets the board.',
  },
  {
    brandSlug: 'samsung', slug: 'range-wall-oven', name: 'range and wall oven', sku: 'NE / NX / NV / NZ', codeFormat: 'E-08',
    blurb: 'Samsung ranges show a two-part code (E-08, E-0A, E-27) for the oven and short codes (SE, tE, LE) for the control panel. Most are a sensor, the door lock, or a stuck key.',
    logAccess: 'Samsung ovens do not have a user-accessible error log. The code stays on the display until you fix the cause or cut power at the breaker for 3 minutes; if it returns after a reset, treat it as real.',
  },
];

type Short = Omit<Entry, 'brandSlug' | 'modelSlug' | 'slug' | 'serviceCost' | 'phase' | 'faultTitle'> & { phase?: string; faultTitle?: string };

function make(brandSlug: string, modelSlug: string, serviceCost: string, list: Short[]): Entry[] {
  return list.map((e) => ({
    brandSlug, modelSlug, serviceCost,
    slug: e.shown.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    phase: e.phase ?? 'any',
    faultTitle: e.faultTitle ?? e.component,
    ...e,
  }));
}

// ---------- Breville (adapter over the playbook system) ----------
const brevilleEntries: Entry[] = brevilleModels.flatMap((m) =>
  codesByModel[m.sku].map((c) => {
    const pb = playbooks[c.category];
    const dd = deepDives[`${m.sku}:${c.code}`];
    return {
      brandSlug: 'breville', modelSlug: m.slug, code: c.code, slug: codeSlug(c.code),
      shown: `${m.codePrefix}${c.code.replace(/^(ER|E|Error )/, '')}`,
      meaning: c.meaning, component: c.component, severity: pb.severity, diy: pb.diy,
      phase: c.phase === 'startup' ? 'during the power-on self-test' : c.phase === 'operation' ? 'while brewing or steaming' : 'any time',
      quick: pb.quickAnswer(c, m) + (dd ? ' ' + dd.intro : ''),
      steps: pb.steps(c, m), stop: pb.stop, partCost: pb.partCost, serviceCost: pb.serviceCost, worth: pb.worth,
      extra: dd?.extra, faultTitle: pb.title,
    };
  })
);

// ---------- Jura ----------
const JURA_NTC = 'Genuine Jura NTC sensor about $25 to $40; thermal-fuse cord set $15 to $30; a thermoblock $90 to $180.';
const juraEntries = make('jura', 'automatic-machines', SVC_COFFEE, [
  {
    code: 'Error 1', shown: 'Error 1', meaning: 'Coffee thermoblock temperature sensor fault (S/X/J/Z family); damaged sensor on F/E80', component: 'coffee thermoblock NTC sensor', severity: 'medium', diy: 'hard', faultTitle: 'thermoblock sensor fault',
    quick: 'The control board cannot get a sane reading from the temperature sensor on the coffee thermoblock. A cold machine straight from a cold car or garage can trigger it; otherwise the sensor, its cable, or the thermal-fuse cords that feed the thermoblock have failed.',
    steps: [
      'Unplug for five minutes, let the machine sit at room temperature for an hour if it has been cold, and restart.',
      'If it clears, it was temperature. If it returns instantly on a warm machine, the sensor circuit is open.',
      'Opening a Jura needs the oval-head (Torx-Plus security) driver. With the cover off, check the sensor plug on the thermoblock and the thermal-fuse cords for a broken link.',
      'Replace the NTC sensor (cheap) and the fuse cords together; if the thermoblock itself is scaled solid, replace it.',
    ],
    stop: 'Jura cases are held with security screws and the thermoblocks carry mains voltage. If you are not set up for that, this is a bench repair.', partCost: JURA_NTC, worth: 'Yes on S, Z, GIGA and newer E-series; on a 10-year-old Impressa weigh the quote against a refurbished unit.',
  },
  {
    code: 'Error 2', shown: 'Error 2', meaning: 'Coffee temperature sensor interrupted, or the machine is too cold to heat', component: 'coffee thermoblock NTC sensor / thermal fuse cords', severity: 'medium', diy: 'moderate', faultTitle: 'sensor open or machine too cold',
    quick: 'Error 2 is the most common Jura code and it has a benign cause and a real one. Benign: the machine is below about 10 C (delivered in winter, kept in a cold room) and the heater is locked out until it warms. Real: the coffee thermoblock sensor or the thermal-fuse cords have gone open circuit.',
    steps: [
      'Bring the machine to room temperature. Jura owners use a hair dryer on low into the water-tank cavity for five minutes, or fill the tank with warm (not hot) water, then restart.',
      'If Error 2 clears after warming, nothing is broken; keep the machine somewhere warmer.',
      'If it persists warm, the sensor circuit is open. Inside, check the NTC plug and the two thermal-fuse cords on the coffee thermoblock; a blown fuse cord reads open on a meter.',
      'Replace the NTC and fuse cords together; also check the power board relay if the fuse blew because the thermoblock was overdriven.',
    ],
    stop: 'A fuse cord that has blown once will blow again if the power board is latching the heater on. If the new one fails within days, the power board is the fault.', partCost: JURA_NTC, worth: 'Yes. Warming costs nothing; the parts are under $50.',
  },
  {
    code: 'Error 3', shown: 'Error 3', meaning: 'Steam thermoblock temperature too low or its NTC sensor failed', component: 'steam thermoblock NTC sensor', severity: 'medium', diy: 'hard', faultTitle: 'steam thermoblock sensor fault',
    quick: 'The steam side of the machine is not reporting temperature. Same causes as Error 1 but on the steam thermoblock: sensor, cable, or a machine that is too cold.',
    steps: ['Warm the machine to room temperature and restart.', 'Descale if it is due; heavy scale slows heating enough to trip the check on some firmware.', 'Inside, inspect the steam thermoblock sensor cable for a break where it flexes and reseat its plug.', 'Replace the NTC if the fault persists.'],
    stop: 'Security screws and mains voltage inside; hand it over if that is not you.', partCost: JURA_NTC, worth: 'Yes.',
  },
  {
    code: 'Error 4', shown: 'Error 4', meaning: 'Steam thermoblock overheating or a defective sensor', component: 'steam thermoblock NTC sensor / power board', severity: 'high', diy: 'hard', faultTitle: 'steam thermoblock overheat',
    quick: 'The steam thermoblock got hotter than the board expected. Either the sensor is under-reading (scale insulation, corroded contacts) or the power board did not cut the heater. Jura lists Errors 2 and 4 as the two most common repairs.',
    steps: ['Unplug and let the machine cool for an hour.', 'Run a full descale. Scale on the thermoblock changes how quickly the sensor sees heat.', 'Inspect the sensor cable and contacts for corrosion; replace the NTC.', 'If it overheats again with a new sensor, the power board is not switching the heater off and must be replaced.'],
    stop: 'A heater that will not switch off is a fire risk. Do not leave the machine powered unattended while this code is active.', partCost: JURA_NTC + ' Power board $120 to $250.', worth: 'Sensor: yes. Power board on an old machine: get the quote first.',
  },
  {
    code: 'Error 5', shown: 'Error 5', meaning: 'Heating failure: the machine cannot reach temperature', component: 'thermal fuse cords / thermoblock', severity: 'high', diy: 'hard', faultTitle: 'heater not reaching temperature',
    quick: 'The heater was switched on and the temperature did not climb. On a Jura that is almost always the thermal-fuse cords that protect the thermoblock, which blow after an overheat or with age; a dead thermoblock element is the other cause.',
    steps: ['Warm the machine to room temperature (a very cold machine also triggers this) and restart.', 'Inside, meter the two thermal-fuse cords on the affected thermoblock. Open circuit means replace them.', 'Meter the thermoblock element. Open circuit means a new thermoblock.', 'Find out why the fuses blew: scale, a stuck relay on the power board, or a dry-fire when the tank ran empty.'],
    stop: 'Mains voltage on the thermoblock terminals.', partCost: 'Fuse cord set $15 to $30; thermoblock $90 to $180.', worth: 'Yes for fuse cords. Thermoblock plus board on an old machine: compare with a refurbished unit.',
  },
  {
    code: 'Error 6', shown: 'Error 6', meaning: 'Electronic ceramic valve not operating correctly', component: 'ceramic valve and its drive motor', severity: 'medium', diy: 'hard', faultTitle: 'ceramic valve fault',
    quick: 'Machines with the electronic ceramic valve (Z5 to Z10, X series, J5 to J9, GIGA, newer S and E) route water between coffee, hot water and steam with a motor-driven ceramic disc. Error 6 means the disc did not reach the position the board asked for: scale has stiffened it, a leak has got into the drive, or the motor or its position sensor has failed.',
    steps: ['Run a full descale first; scale is the number-one cause and the fix is free.', 'Restart. If the valve now cycles (you will hear it click through positions on startup) you are done.', 'If it persists, open the machine and check for water around the valve body; a leaking valve seal wets the motor and encoder.', 'Clean or replace the valve; the motor and valve are usually replaced as an assembly.'],
    stop: 'Valve assemblies are fiddly and the machine must be fully drained first; this is a common professional repair.', partCost: 'Ceramic valve assembly $60 to $120; seal kit $10 to $20.', worth: 'Yes, the machines that have this valve are worth keeping.',
  },
  {
    code: 'Error 8', shown: 'Error 8', meaning: 'Brew group failed to complete its cycle (encoder saw fewer motor revolutions than expected)', component: 'brew group, drive motor and encoder', severity: 'medium', diy: 'moderate', faultTitle: 'brew group cycle failure',
    quick: 'The brew group motor was told to move the brew unit through its cycle and the position encoder did not see it complete. The brew unit is sticky with old coffee oils, something is jammed in it, the grounds container is overfull, or the drive (gears, motor, encoder, or the power supply under load) has a fault. Some Jura guides call Error 8 a cleaning reminder; on most machines it is the brew unit physically not completing, which is why a cleaning cycle often fixes it.',
    steps: ['Switch off, empty the grounds container and drip tray, and restart. The brew unit does a full cycle on startup; listen for it stalling.', 'Run the cleaning programme with a Jura tablet (Maintenance > Cleaning). Let it finish uninterrupted, about 15 minutes.', 'If it recurs, remove the brew unit (models where it is accessible) or open the machine and check for a coffee puck jammed in the outlet, a snapped drainage valve, or a dry, stiff mechanism. Clean and lubricate with food-safe silicone grease.', 'Check the motor mounting for cracks and the encoder wiring. A motor that turns slowly under load points at the transformer or power board.'],
    stop: 'If the brew unit is visibly damaged (broken plastic), replace it rather than forcing it.', partCost: 'Cleaning tablets $15 to $25 a box; brew group $80 to $150; motor $40 to $70.', worth: 'Yes. Most Error 8s cost a cleaning tablet.',
  },
  {
    code: 'Fill water tank', shown: 'Fill water tank (tank is full)', meaning: 'Water tank message will not clear although the tank is full', component: 'tank float / level sensor', severity: 'low', diy: 'easy', faultTitle: 'false "fill water tank" message',
    quick: 'The machine reads the water level through a magnet float in the tank and a sensor in the machine. Scale on the float, a float stuck at the bottom, or a tank not seated on its valve gives a false empty reading.',
    steps: ['Remove the tank, check the float in its channel moves freely, and descale the tank in a bowl of descaler.', 'Reseat the tank firmly; the valve at the base must open.', 'Fit a fresh filter correctly, or remove it, and try again.', 'If the message persists with a clean float and full tank, the reed sensor in the machine has failed.'],
    stop: 'Nothing dangerous here.', partCost: 'Float $10 to $20; reed sensor $15 to $30.', worth: 'Yes.',
  },
  {
    code: 'Empty drip tray', shown: 'Empty drip tray (tray is empty)', meaning: 'Tray message will not clear, or "Tray missing" with the tray fitted', component: 'drip tray contact strips', severity: 'low', diy: 'easy', faultTitle: 'false drip-tray message',
    quick: 'The tray is detected and its fullness measured through two metal contact strips on the back of the tray. Coffee residue, milk or scale bridging them reads as full; corrosion or a bent strip reads as missing.',
    steps: ['Remove the tray, wash it, and wipe the two metal strips dry with a damp cloth, then dry.', 'Wipe the mating contacts in the machine.', 'Refit the tray firmly until it clicks.', 'If it still reads full, the strips are corroded through; a new tray is the fix.'],
    stop: 'Nothing dangerous here.', partCost: 'Drip tray $30 to $60.', worth: 'Yes.',
  },
]);

// ---------- Philips / Saeco ----------
const phEntries = make('philips-saeco', 'espresso-machines', SVC_COFFEE, [
  {
    code: '01', shown: 'Error 01', meaning: 'Coffee grinder cannot work properly: the coffee funnel is blocked with ground coffee', component: 'coffee funnel and grinder outlet', severity: 'low', diy: 'easy', faultTitle: 'grinder outlet blocked',
    quick: 'Ground coffee has compacted in the funnel between the grinder and the brew group, usually from oily beans or a very fine grind. The grinder motor stalls against it.',
    steps: ['Switch off and wait 20 seconds until the machine is silent.', 'Remove the brew group. Push the compacted coffee out of the funnel with a spoon handle, then vacuum the loose grounds from the funnel and the brew-group cavity.', 'Refit the brew group and switch on.', 'Set the grind one step coarser if it recurs, and avoid very oily dark roasts.'],
    stop: 'If the grinder hums but does not turn with a clear funnel, the grinder is jammed or its motor has failed.', partCost: 'Nothing for a blockage; grinder assembly $60 to $120.', worth: 'Yes.',
  },
  {
    code: '03', shown: 'Error 03', meaning: 'Brew group is too dirty to work properly', component: 'brew group', severity: 'low', diy: 'easy', faultTitle: 'brew group dirty',
    quick: 'The brew group has enough coffee residue on it that it cannot complete its movement. Philips says rinse it; the durable fix is rinse plus lubricate.',
    steps: ['Switch off, open the service door and remove the brew group.', 'Rinse it thoroughly under lukewarm water (no soap), work the mechanism by hand, and let it air dry.', 'Put a little Philips or food-safe silicone grease on the guide rails and the piston seal.', 'Refit until it clicks; run a brew-group cleaning tablet cycle monthly.'],
    stop: 'Nothing dangerous here.', partCost: 'Grease $8 to $12; brew group $40 to $80.', worth: 'Yes.',
  },
  {
    code: '04', shown: 'Error 04', meaning: 'Brew group is not correctly placed', component: 'brew group position', severity: 'low', diy: 'easy', faultTitle: 'brew group not locked',
    quick: 'The brew group is in the machine but not in its rest position, so the drive cannot engage it. It usually follows a cleaning where the group was refitted with its arm in the wrong place.',
    steps: ['Remove the brew group. Check the lever on the side is in the rest position and the two reference marks line up (yellow arrow to arrow on most models).', 'If it is not, press the top of the group until it clicks down; do not force the lever.', 'Refit along the guides until it clicks, close the door.', 'Switch on; the machine will index the group itself.'],
    stop: 'Never force the group in; a cracked group is a new group.', partCost: 'Nothing; brew group $40 to $80 if damaged.', worth: 'Yes.',
  },
  {
    code: '05', shown: 'Error 05', meaning: 'Air is trapped in the water circuit', component: 'water circuit / AquaClean filter', severity: 'low', diy: 'easy', faultTitle: 'air in the water circuit',
    quick: 'The pump is running but drawing air rather than water, so no pressure builds. A freshly fitted AquaClean filter that was not primed is the usual cause; an empty tank, a tank not pushed onto its valve, or scale in the inlet are the others.',
    steps: ['Empty and refill the tank; if you have just fitted an AquaClean filter, shake it for five seconds, hold it upside down in a jug of water until no bubbles rise, then refit.', 'Push the tank fully home.', 'Switch on, wait for heat-up, then dispense two or three cups of hot water to purge the circuit.', 'If the pump still only wheezes, descale; a scaled inlet will not let the pump prime.'],
    stop: 'If the pump runs continuously and never primes after descaling, the pump or a valve has failed.', partCost: 'Nothing for priming; pump $30 to $50.', worth: 'Yes.',
  },
  {
    code: '11', shown: 'Error 11 or 19', meaning: 'Machine needs to adjust to room temperature (too cold after transport)', component: 'temperature sensor lockout', severity: 'low', diy: 'easy', faultTitle: 'machine too cold',
    quick: 'The internal sensors read below the minimum operating temperature, which happens after delivery in winter or storage in a garage. The machine locks the heater until it warms up.',
    steps: ['Switch off and leave the machine at room temperature for at least 30 minutes.', 'Check the plug is fully in and switch on.', 'If the code comes back on a warm machine, a temperature sensor has failed; that is a service repair.'],
    stop: 'Nothing dangerous here.', partCost: 'Nothing; sensor $20 to $40 if it is really faulty.', worth: 'Yes.',
  },
  {
    code: '14', shown: 'Error 14', meaning: 'Machine has overheated', component: 'boiler / thermoblock temperature sensor', severity: 'medium', diy: 'easy', faultTitle: 'overheated',
    quick: 'The boiler reads hotter than it should. Once after heavy steaming it is harmless; repeatedly on a cold start it means the temperature sensor (NTC) is drifting or its wiring is bad, and the machine is heating on wrong information.',
    steps: ['Switch off and leave it for 30 minutes to cool.', 'Switch on and run a cup of hot water.', 'If Error 14 returns on a cool machine, descale (scale changes how the sensor sees the boiler).', 'If it still returns, the NTC sensor needs replacing; the part is cheap but it sits on the boiler inside the machine.'],
    stop: 'A machine that overheats repeatedly should not be left on unattended.', partCost: 'NTC sensor $20 to $40.', worth: 'Yes.',
  },
  {
    code: '02', shown: 'Error 02, 10, 15 or 22', meaning: 'Internal fault; Philips lists these as needing service', component: 'internal electronics, pump or valve', severity: 'high', diy: 'hard', faultTitle: 'internal fault',
    quick: 'Philips does not publish what these mean and the manual says contact support. In practice they are the machine failing its self-test on an internal component: a stuck or dead brew-group drive, a pump that is not building pressure, a valve not switching, or a board fault. There is one thing worth trying before you book service.',
    steps: ['Unplug for ten minutes, remove and reseat the brew group, refill the tank and restart. A one-off glitch clears.', 'Note whether the code appears at startup (self-test, usually the brew group drive or a valve) or when brewing (usually pump or pressure).', 'If under warranty, contact Philips; they replace rather than repair most of these.', 'Out of warranty, an independent repairer can test the pump, valve and drive individually.'],
    stop: 'Do not open the machine while under warranty; the seal voids it.', partCost: 'Pump $30 to $50; brew-group motor $30 to $60; board $80 to $150.', worth: 'On a LatteGo 3200/5400 or Xelsis, yes; on a ten-year-old Saeco, price a replacement.',
  },
]);

// ---------- De'Longhi ----------
const dlEntries = make('delonghi', 'magnifica-dinamica', SVC_COFFEE, [
  {
    code: 'General Alarm', shown: 'General Alarm (code 1101 / 1512)', meaning: 'Catch-all alarm: the board detected a fault it cannot isolate, most often the infuser (brew unit) or its sensor', component: 'infuser assembly and position sensor', severity: 'medium', diy: 'easy', faultTitle: 'general alarm',
    quick: "General Alarm is De'Longhi's \"something is wrong\" message. On Magnifica, Dinamica and PrimaDonna machines it is the infuser nine times out of ten: it is stuck, dirty, out of position, or coffee dust is on the optical sensor that reads its position. Scale that makes the pump labour is the next cause.",
    steps: ['Switch off at the switch on the back, wait 30 seconds, switch on. A one-off clears.', 'Open the service door, press the two red buttons and pull out the infuser. Rinse it under running water (no soap), work the piston by hand, and let it dry.', 'Look into the cavity: the small sensor window should be clean; wipe coffee dust off it with a dry cloth.', 'Refit the infuser until it clicks, with its lever fully down. Close the door and restart.', 'If the alarm persists, run a descale cycle; a scaled circuit can trigger it.'],
    stop: 'If the infuser will not move by hand or has a cracked seal, replace it (kit 7313251451 or 7313251441 by model).', partCost: 'Infuser assembly $35 to $60; descaler $10.', worth: 'Yes, almost always a free fix.',
  },
  {
    code: 'Insert infuser', shown: 'Insert Infuser Assembly', meaning: 'Infuser not detected in its seat', component: 'infuser assembly', severity: 'low', diy: 'easy', faultTitle: 'infuser not seated',
    quick: 'The infuser has been refitted after cleaning but is not fully home, or something (a stray puck, a chip of plastic) is stopping it seating. The machine will not run without it.',
    steps: ['Remove the infuser and check the cavity for debris; use tweezers for anything stuck in the rails.', 'Make sure the infuser lever is pressed down and the piston is in its rest position (press the top until it clicks).', 'Slide it in on the guides and push until it clicks, then close the door.', 'If the message persists, unplug for a minute and try again; then inspect the infuser for a broken tab.'],
    stop: 'Nothing dangerous here.', partCost: 'Infuser assembly $35 to $60 if damaged.', worth: 'Yes.',
  },
  {
    code: 'Insert grounds container', shown: 'Insert Grounds Container / Empty Grounds Container', meaning: 'Grounds container not detected, or the empty message will not clear', component: 'grounds container switch and contacts', severity: 'low', diy: 'easy', faultTitle: 'grounds container not detected',
    quick: 'The container is detected by a switch or contacts behind it. Wet grounds, coffee sludge or scale on those contacts, or a container not pushed fully home, gives a false reading. The empty-grounds counter only resets when the machine sees the container removed for a few seconds.',
    steps: ['Switch off. Remove the drip tray and grounds container together.', 'Clean the container and the area behind it, and wipe the metal contacts or switch with a dry cloth.', 'Leave the container out for at least ten seconds (to reset the counter), then refit firmly.', 'If the message stays, the switch has failed; it is cheap but inside the machine.'],
    stop: 'Nothing dangerous here.', partCost: 'Microswitch $5 to $15.', worth: 'Yes.',
  },
  {
    code: 'Water circuit empty', shown: 'Water Circuit Empty / Fill Circuit', meaning: 'The machine cannot detect water in the circuit; air is trapped or the pump is not priming', component: 'pump, tank valve and water circuit', severity: 'low', diy: 'easy', faultTitle: 'air in water circuit',
    quick: 'Air has got into the pump, usually after the tank ran dry, after descaling, or after a new filter. The pump cannot push air, so pressure never builds and the machine asks you to fill the circuit.',
    steps: ['Fill the tank at least halfway, remove the water filter for now, and push the tank fully home.', 'Fit the hot-water spout and press the hot water button; let it run until water flows steadily (may take two or three attempts).', 'Refit the filter after priming it in water.', 'If the pump buzzes but no water arrives after several attempts, descale; a scaled inlet or heater will not let it prime.'],
    stop: 'If the pump is silent, it has no power or has failed.', partCost: 'Nothing for priming; pump $30 to $50.', worth: 'Yes.',
  },
  {
    code: 'Ground too fine', shown: 'Ground Too Fine, Adjust Mill', meaning: 'Brew pressure too high: the grind is too fine, or the circuit is blocked', component: 'grinder setting / infuser outlet / water circuit', severity: 'low', diy: 'easy', faultTitle: 'brew pressure too high',
    quick: 'The pump hit its pressure limit before the shot finished. On a machine that was working, the grind has not changed; scale in the heater or infuser, or a blocked infuser outlet, is the real cause. It often pairs with "Insert Water Spout" because the machine tries to relieve pressure through the spout.',
    steps: ['Turn the grind dial one or two steps coarser, only while the grinder is running, and try again.', 'Remove and rinse the infuser; check its outlet is clear.', 'Run a descale cycle; this is the fix for most "ground too fine" messages on machines older than a year.', 'Fit the hot-water spout and run water through to confirm the circuit is clear.'],
    stop: 'If hot water will not flow either, the heater or a tube inside is blocked and needs opening up.', partCost: 'Descaler $10.', worth: 'Yes.',
  },
  {
    code: 'Insert water spout', shown: 'Insert Water Spout', meaning: 'Machine does not detect the hot-water / milk spout when it needs to run a rinse or relieve pressure', component: 'spout connection and its sensor', severity: 'low', diy: 'easy', faultTitle: 'spout not detected',
    quick: 'The machine wants the spout on (to rinse, descale, or relieve pressure) and its sensor cannot see it. The spout is not pushed fully on, its O-rings are worn so it sits loose, or the sensor magnet/contact is dirty.',
    steps: ['Push the spout on fully; it should click or seat with resistance.', 'Check the O-rings on the spout stub; replace if flattened.', 'Clean the spout and the socket; scale here is common.', 'If the message appears with "Ground too fine", descale the machine.'],
    stop: 'Nothing dangerous here.', partCost: 'O-ring kit $5 to $10; spout $20 to $40.', worth: 'Yes.',
  },
  {
    code: 'Grinder stuck', shown: 'Grinder stuck (code 1454)', meaning: 'Grinder motor stalled', component: 'grinder burrs and motor', severity: 'low', diy: 'easy', faultTitle: 'grinder jammed',
    quick: 'A stone, a very oily bean layer, or grounds packed under the burr have stopped the grinder. Newer models log it as 1454.',
    steps: ['Switch off, empty the hopper, and vacuum the grinder throat.', 'Turn the grind dial to the coarsest setting (with the grinder off is fine for this) and back.', 'Switch on and run a grind with a few beans. Do not force the dial.', 'If the motor hums without turning, the burr is jammed under the top burr; a service removes and clears it.'],
    stop: 'Do not run the grinder repeatedly against a jam; the motor overheats.', partCost: 'Nothing; grinder assembly $60 to $100.', worth: 'Yes.',
  },
  {
    code: 'Leak alarm', shown: 'Leak alarm (code 3963)', meaning: 'Water detected in the base of the machine', component: 'seals, tubes and boiler fittings', severity: 'medium', diy: 'moderate', faultTitle: 'internal leak',
    quick: 'A sensor in the base has seen water. The usual leak points are the tank valve O-ring, the infuser seals, the heater O-rings and the drainage valve.',
    steps: ['Unplug. Empty the drip tray and dry the base; look where the water was.', 'Check the tank valve O-ring and the tank seating.', 'Remove the infuser and inspect its seals and the outlet.', 'If water is inside the housing, open it and trace the wet path: usually a heater O-ring or a split tube.'],
    stop: 'Water and the power board share the base; do not run it until dry and fixed.', partCost: 'O-ring kits $5 to $15; drainage valve $10 to $20.', worth: 'Yes.',
  },
  {
    code: 'Descale', shown: 'Descale light stays on after descaling', meaning: 'Descale cycle not registered as complete', component: 'descale counter / flow sensor', severity: 'low', diy: 'easy', faultTitle: 'descale will not clear',
    quick: 'The machine only clears the descale reminder when it sees a full descale cycle including the rinse phase, run from the descale menu with the spout fitted. Stopping early, running it manually, or a water-filter setting that is wrong leaves the light on.',
    steps: ['Run the descale from the menu (not just by pouring descaler in), with the spout fitted and a large bowl, and let both phases finish.', 'Check the water-filter setting matches whether a filter is fitted.', 'If it still stays on, the flow sensor is scaled and not counting; run a second descale.'],
    stop: 'Nothing dangerous here.', partCost: 'Descaler $10.', worth: 'Yes.',
  },
]);

// ---------- GE dishwasher ----------
const geDwEntries = make('ge', 'dishwasher', SVC_HOME, [
  { code: 'C1', shown: 'C1', meaning: 'Drain pump timeout: the pump ran more than 2 minutes without draining (older models: stuck key)', component: 'drain pump, filter and drain hose', severity: 'medium', diy: 'easy', faultTitle: 'drain timeout',
    quick: 'The dishwasher tried to pump out and the water did not go. Clogged filter, a blocked or kinked drain hose, a new garbage disposal with the knockout plug still in, or a drain pump that has failed.',
    steps: ['Remove the lower rack and clean the filter and sump; pull out food debris and glass.', 'Check the drain hose under the sink for a kink and, if a disposal was fitted recently, that its knockout plug was removed.', 'Cut power for 60 seconds at the breaker to reset and run a drain-only cycle.', 'If it still will not drain, the drain pump impeller is jammed or the pump has failed; it is accessible from inside the tub on most models.'],
    stop: 'If water is leaking under the machine, stop and find the leak first.', partCost: 'Drain pump $40 to $80.', worth: 'Yes.' },
  { code: 'C2', shown: 'C2', meaning: 'Drain motor error: drain pump not running, or a totally blocked drain line', component: 'drain pump motor / drain line', severity: 'medium', diy: 'moderate', faultTitle: 'drain pump not running',
    quick: 'The board switched the drain pump on and saw no current or no drop in water. Either the pump is dead or jammed, or the line is completely blocked.',
    steps: ['Reset at the breaker and listen for the drain pump at the start of a cycle.', 'Clean the filter and clear the drain hose; check the air gap if fitted.', 'If the pump is silent, check its plug and wiring; replace the pump.'],
    stop: 'Disconnect power before reaching into the sump.', partCost: 'Drain pump $40 to $80.', worth: 'Yes.' },
  { code: 'C3', shown: 'C3', meaning: 'Dishwasher not draining properly / cannot switch to drain mode', component: 'drain system', severity: 'medium', diy: 'easy', faultTitle: 'not draining',
    quick: 'A general drain fault. Same suspects as C1: filter, hose, disposal plug, pump.',
    steps: ['Clean filter and sump.', 'Check the drain hose and disposal connection.', 'Reset at the breaker and run a drain.', 'Replace the drain pump if it hums or is silent.'],
    stop: 'Disconnect power before working in the sump.', partCost: 'Drain pump $40 to $80.', worth: 'Yes.' },
  { code: 'C4', shown: 'C4', meaning: 'Overfill / filled twice after power failure', component: 'water inlet valve and float switch', severity: 'medium', diy: 'moderate', faultTitle: 'overfill',
    quick: 'Too much water got in. The inlet valve is not closing fully, or the float switch that stops the fill is stuck. It can also be logged once after a power cut.',
    steps: ['Reset at the breaker. If it was a one-off after an outage, it will not return.', 'Check the float in the tub floor moves freely and is not stuck with debris.', 'If the tub fills with power off, the inlet valve is leaking through: replace it.'],
    stop: 'Turn off the water supply under the sink if the machine keeps filling.', partCost: 'Inlet valve $25 to $50; float switch $10 to $20.', worth: 'Yes.' },
  { code: 'C5', shown: 'C5', meaning: 'Low water fill', component: 'water inlet valve and supply', severity: 'medium', diy: 'moderate', faultTitle: 'low fill',
    quick: 'Not enough water arrived in the fill time. Supply valve not fully open, a clogged inlet screen, or a weak inlet valve.',
    steps: ['Open the supply valve under the sink fully.', 'Turn off the supply, disconnect the hose at the dishwasher and clean the inlet screen.', 'Replace the inlet valve if the screen is clean and fill is still slow.'],
    stop: 'Nothing dangerous here.', partCost: 'Inlet valve $25 to $50.', worth: 'Yes.' },
  { code: 'C6', shown: 'C6', meaning: 'Water temperature too low after the extended heating period', component: 'heating element, thermostat and hot-water supply', severity: 'medium', diy: 'moderate', faultTitle: 'water not heating',
    quick: 'The water never reached about 120 F. If your incoming hot water is cold when the cycle starts the heater may not catch up; otherwise the heating element or its thermostat has failed.',
    steps: ['Run the kitchen tap until it is hot before starting the dishwasher; set the water heater to 120 F.', 'If the dishes are cold and wet at the end of a cycle, the element is not heating.', 'Meter the heating element for continuity; replace it (or the high-limit thermostat) if open.'],
    stop: 'Disconnect power before touching the element wiring.', partCost: 'Heating element $30 to $60; thermostat $10 to $20.', worth: 'Yes.' },
  { code: 'C7', shown: 'C7', meaning: 'Water temperature sensor (thermistor) circuit failure; on some models, turbidity sensor', component: 'thermistor / turbidity sensor', severity: 'medium', diy: 'moderate', faultTitle: 'temperature sensor fault',
    quick: 'The board cannot read the water temperature sensor. Loose plug or a failed thermistor. On some models the same code is the turbidity (soil) sensor.',
    steps: ['Reset at the breaker.', 'Check the thermistor plug at the sump and on the board.', 'Replace the thermistor; it is a small, cheap part in the sump.'],
    stop: 'Disconnect power first.', partCost: 'Thermistor $15 to $30.', worth: 'Yes.' },
  { code: 'C8', shown: 'C8', meaning: 'Detergent cup blocked / dispenser did not open (on some models: water still too cold)', component: 'detergent dispenser', severity: 'low', diy: 'easy', faultTitle: 'dispenser blocked',
    quick: 'The dispenser door could not open, usually because a dish or pan is in front of it, or dried detergent has jammed the latch.',
    steps: ['Load so nothing blocks the dispenser door.', 'Clean the dispenser and latch with hot water.', 'Replace the dispenser assembly if the latch is broken.'],
    stop: 'Nothing dangerous here.', partCost: 'Dispenser $30 to $60.', worth: 'Yes.' },
  { code: 'H2O', shown: 'H2O', meaning: 'No water, or not enough water, entering the dishwasher', component: 'water supply and inlet valve', severity: 'medium', diy: 'easy', faultTitle: 'no water fill',
    quick: 'The dishwasher started a fill and no water came. The supply valve under the sink is closed, the supply hose is kinked, the inlet screen is clogged, or the inlet valve has failed.',
    steps: ['Open the supply valve under the sink fully.', 'Check the supply hose for kinks.', 'Turn off the supply, disconnect the hose at the inlet valve and clean the screen.', 'If the valve does not click when the cycle starts, replace it.'],
    stop: 'Nothing dangerous here.', partCost: 'Inlet valve $25 to $50.', worth: 'Yes.' },
  { code: 'FTD', shown: 'FTD', meaning: 'Failed to drain', component: 'drain pump and hose', severity: 'medium', diy: 'easy', faultTitle: 'failed to drain',
    quick: 'Same as C1 to C3 on newer models: the pump ran and the water stayed.',
    steps: ['Clean the filter and sump.', 'Clear the drain hose and check the disposal knockout.', 'Reset at the breaker and run a drain.', 'Replace the drain pump if it is silent or hums.'],
    stop: 'Disconnect power before working in the sump.', partCost: 'Drain pump $40 to $80.', worth: 'Yes.' },
  { code: '888', shown: '888', meaning: 'Control board fault', component: 'main control board', severity: 'high', diy: 'moderate', faultTitle: 'control board fault',
    quick: 'The board failed its own check. A voltage spike (storm, generator) corrupts a memory register and the code keeps returning after resets because the damage is done. Occasionally it is a wet board from a leak.',
    steps: ['Cut power at the breaker for 60 seconds and restart.', 'If 888 or CFE returns, check the door panel and base for signs of water on the board.', 'Replace the main control board. It is a plug-in module behind the kick panel or in the door.'],
    stop: 'Disconnect power before removing the board.', partCost: 'Control board $90 to $200.', worth: 'On a dishwasher under 6 or 7 years old, yes. On an older one, compare with a new machine.' },
  { code: 'CFE', shown: 'CFE', meaning: 'Communication fault between the user interface and the main board', component: 'control boards and harness', severity: 'high', diy: 'moderate', faultTitle: 'communication fault',
    quick: 'The door-mounted interface and the main board have stopped talking. A loose harness in the door hinge area, a wet connector, or a failed board.',
    steps: ['Reset at the breaker.', 'Check the harness that runs through the door for chafing and reseat both ends.', 'Replace the failed board; the user interface is usually the cheaper one.'],
    stop: 'Disconnect power first.', partCost: 'UI board $60 to $120; main board $90 to $200.', worth: 'Depends on age.' },
  { code: 'PF', shown: 'PF', meaning: 'Power failure during a cycle', component: 'mains supply', severity: 'low', diy: 'easy', faultTitle: 'power failure',
    quick: 'Power was interrupted mid-cycle. Nothing is broken.',
    steps: ['Press Start to resume or cancel.', 'If it happens with no outage, check the breaker and the plug under the sink.'],
    stop: 'Nothing dangerous here.', partCost: 'Nothing.', worth: 'Yes.' },
  { code: 'IH', shown: 'IH / 1H', meaning: 'Inlet heater fault or temperature too high', component: 'heater and thermostat', severity: 'medium', diy: 'hard', faultTitle: 'heater fault',
    quick: 'The heater circuit is faulty or the water overheated. Let it cool, then it is a heater, thermostat or relay repair.',
    steps: ['Cut power and allow 20 minutes to cool.', 'Reset and run a cycle; if it returns, meter the element and check the high-limit thermostat.', 'A board relay stuck on is the other cause; replace the board.'],
    stop: 'A heater stuck on is a hazard; do not run the machine unattended with this code.', partCost: 'Element $30 to $60; board $90 to $200.', worth: 'Depends on which part.' },
  { code: 'E1', shown: 'E1 (leak)', meaning: 'Leak detected: the flood switch in the base has activated', component: 'base flood switch, hoses and seals', severity: 'high', diy: 'moderate', faultTitle: 'leak detected',
    quick: 'Water reached the base pan. Too much or the wrong detergent (suds), a door gasket leak, a split hose or a pump seal.',
    steps: ['Turn off the water supply and cut power.', 'Pull the kick panel and dry the base; look for where the water came from.', 'Use only dishwasher detergent, check the door gasket, and tighten hose clamps.', 'Replace a leaking pump seal or hose.'],
    stop: 'Do not run it until the base is dry and the leak found.', partCost: 'Gasket $20 to $40; hose $15 to $30.', worth: 'Yes.' },
]);

// ---------- GE dryer ----------
const geDryEntries = make('ge', 'dryer', SVC_HOME, [
  { code: 'E1', shown: 'E1', meaning: 'Door switch / latch fault', component: 'door switch', severity: 'low', diy: 'easy', faultTitle: 'door switch fault',
    quick: 'The board does not see the door as closed. A worn latch, a switch that has failed, or a loose wire on it.',
    steps: ['Close the door firmly and press Start.', 'Check the latch strike is not bent or broken.', 'Unplug, remove the front panel and check the door switch plug; replace the switch if it does not click.'],
    stop: 'Unplug before opening the panel.', partCost: 'Door switch $10 to $25.', worth: 'Yes.' },
  { code: 'E3', shown: 'E3 to E6', meaning: 'Thermistor (temperature sensor) error, inlet or outlet', component: 'inlet / outlet thermistor', severity: 'medium', diy: 'moderate', faultTitle: 'thermistor error',
    quick: 'One of the two temperature sensors (inlet on the heater housing, outlet on the blower housing) is reading open or short. Loose wiring is common; the thermistor itself is cheap. On some models E6 is instead an airflow restriction.',
    steps: ['Unplug for 30 seconds and restart.', 'Clean the lint filter and check the vent is not blocked (an overheated dryer can trip these).', 'Unplug, open the panel, and check the thermistor plugs and harness for loose or corroded contacts.', 'Meter the thermistor (about 10k ohms at room temperature); replace if open.'],
    stop: 'Unplug before opening the cabinet.', partCost: 'Thermistor $10 to $25.', worth: 'Yes.' },
  { code: 'E4', shown: 'E4', meaning: 'Thermal fuse blown or high-limit cut-out tripped: no heat', component: 'thermal fuse / high-limit thermostat', severity: 'medium', diy: 'moderate', faultTitle: 'no heat: thermal fuse',
    quick: 'The dryer runs but does not heat because a safety fuse has opened. Fuses blow because airflow was restricted (lint, a blocked vent) and the heater overheated; fix the airflow or the new fuse blows too.',
    steps: ['Clean the lint filter and the whole exhaust run to the outside.', 'Unplug, open the cabinet and meter the thermal fuse and high-limit thermostat on the heater housing; replace whichever is open.', 'Run a cycle with the vent disconnected briefly to confirm heat, then reconnect.'],
    stop: 'Never bypass a thermal fuse.', partCost: 'Thermal fuse $5 to $15; high-limit thermostat $10 to $25.', worth: 'Yes.' },
  { code: 'E7', shown: 'E7', meaning: 'Electrical connection failure (cord, outlet or breaker)', component: 'power supply', severity: 'medium', diy: 'easy', faultTitle: 'power supply fault',
    quick: 'The dryer is not seeing both legs of its 240 V supply. A tripped half of a double breaker, a loose terminal block connection, or a damaged cord.',
    steps: ['Check the double breaker: reset it fully off then on.', 'Unplug and inspect the cord and the terminal block at the back for a loose or burnt connection.', 'Test the outlet for 240 V between the two hot legs.'],
    stop: 'The terminal block carries 240 V; unplug before touching it.', partCost: 'Cord $15 to $30; terminal block $10 to $20.', worth: 'Yes.' },
  { code: 'E8', shown: 'E8', meaning: 'Motor tachometer (speed sensor) error: no speed signal from the drive motor (older models: drum light or drain fault)', component: 'motor tachometer and harness', severity: 'medium', diy: 'moderate', faultTitle: 'motor speed sensor error',
    quick: 'On current GE dryers E8 means the board switched the motor on and never got the speed signal back. Loose tach wiring on the motor, a jammed drum (belt off, something behind the drum), or a failed tach or motor. On some older or combo models E8 is a different fault, so check your model.',
    steps: ['Unplug for 5 minutes and restart.', 'Turn the drum by hand: if it is stiff or jammed, the belt or an obstruction is stalling the motor.', 'Unplug, open the cabinet, and reseat the tach connector on the motor; check the harness for chafing.', 'If the motor runs but the code persists, replace the motor (the tach is part of it).'],
    stop: 'Unplug before opening the cabinet.', partCost: 'Belt $15 to $25; drive motor $80 to $150.', worth: 'Belt or connector: yes. Motor on an old dryer: judgment call.' },
  { code: 'E11', shown: 'E11', meaning: 'Drum motor problem: motor not turning properly or a motor switch needs replacing', component: 'drive motor', severity: 'medium', diy: 'hard', faultTitle: 'drive motor fault',
    quick: 'The motor is not doing what the board asks. A worn belt, a seized drum roller, or the motor start switch or motor itself.',
    steps: ['Unplug and turn the drum by hand; a stiff drum is rollers or bearing, not the motor.', 'Open the cabinet and check the belt and idler.', 'Replace the motor if it hums and does not start with the belt off.'],
    stop: 'Unplug before opening the cabinet.', partCost: 'Belt $15 to $25; rollers $20 to $40; motor $80 to $150.', worth: 'Depends on which part.' },
  { code: 'E14', shown: 'E14', meaning: 'Stuck key on the control panel', component: 'control panel', severity: 'low', diy: 'easy', faultTitle: 'stuck key',
    quick: 'A button is being read as held down. Dirt or moisture around a key, or a failed membrane.',
    steps: ['Press every button once to free a stuck one; wipe the panel with a barely damp cloth.', 'Unplug for 30 seconds and restart.', 'Replace the control panel if it persists.'],
    stop: 'Nothing dangerous here.', partCost: 'Control panel $60 to $150.', worth: 'Yes.' },
]);

// ---------- Samsung range / wall oven ----------
const smEntries = make('samsung', 'range-wall-oven', SVC_HOME, [
  { code: 'SE', shown: 'SE', meaning: 'Defective or stuck key on the control panel (short in the touchpad membrane)', component: 'control panel membrane / keypad', severity: 'low', diy: 'moderate', faultTitle: 'stuck key',
    quick: 'The board sees a key held down or shorted. Moisture or grease under the membrane, a stuck button, or a failed membrane. On older ranges it can also be the ribbon cable to the control board.',
    steps: ['Cut power at the breaker for 3 minutes and restore.', 'Press each key once, and wipe the panel; let it dry if it has been cleaned recently.', 'Remove the back of the control panel (power off) and reseat the membrane ribbon on the board.', 'Replace the membrane / touch panel if it persists.'],
    stop: 'Cut power at the breaker before opening the control panel.', partCost: 'Membrane $40 to $90; touch panel $100 to $200.', worth: 'Yes.' },
  { code: 'C-d0', shown: 'C-d0', meaning: 'Stuck key detected', component: 'control panel membrane', severity: 'low', diy: 'easy', faultTitle: 'stuck key',
    quick: 'Same as SE on many models: a key is being read as pressed.',
    steps: ['Press the key that shows as stuck, and all others once.', 'Cut power for 3 minutes.', 'Replace the membrane if it persists.'],
    stop: 'Nothing dangerous here.', partCost: 'Membrane $40 to $90.', worth: 'Yes.' },
  { code: 'E-08', shown: 'E-08', meaning: 'Oven not heating: bake/broil element or temperature sensor fault (on some models: door lock fault)', component: 'bake element, broil element, oven sensor', severity: 'medium', diy: 'moderate', faultTitle: 'oven not heating',
    quick: 'The board set a temperature and the oven did not climb. The bake element has burnt out (look for a blister or break on it), the temperature sensor is off, or a relay on the board did not close. Some Samsung support pages list E-08 as the door-lock motor; check your model manual.',
    steps: ['Cut power for 3 minutes and restore.', 'Look at the bake element with the oven on: it should glow evenly. A visible break or blister means replace it.', 'Meter the oven sensor: about 1080 ohms at room temperature.', 'If element and sensor are fine, the relay board is not switching the element.'],
    stop: 'Cut power before touching element terminals.', partCost: 'Bake element $30 to $60; sensor $20 to $40; relay board $100 to $200.', worth: 'Element or sensor: yes.' },
  { code: 'E-0A', shown: 'E-0A', meaning: 'Oven overheating', component: 'oven temperature sensor / control board relay', severity: 'high', diy: 'moderate', faultTitle: 'oven overheating',
    quick: 'The oven got hotter than set. Either the sensor is under-reading or a relay on the board has stuck closed and the element will not switch off.',
    steps: ['Cut power at the breaker immediately.', 'After cooling, meter the sensor (about 1080 ohms at room temperature; replace if far off).', 'Inspect the control board for burnt relays; replace the board if the oven overheats with a good sensor.'],
    stop: 'A stuck relay means the element will not turn off. Do not use the oven until fixed.', partCost: 'Sensor $20 to $40; relay board $100 to $200.', worth: 'Sensor: yes. Board on an old range: compare quotes.' },
  { code: 'E-0E', shown: 'E-0E / FL', meaning: 'Door lock error', component: 'door lock motor and switch', severity: 'medium', diy: 'moderate', faultTitle: 'door lock fault',
    quick: 'The motorised lock used for self-clean did not reach the position the board expected. Usually after a self-clean cycle: the lock switch is stuck or the motor has failed.',
    steps: ['Cut power for 3 minutes; the lock may cycle on restart.', 'Let the oven cool fully; it will not unlock hot.', 'Remove the back panel (power off) and check the lock motor and its switch; replace the assembly if it does not move.'],
    stop: 'Do not force the door.', partCost: 'Door lock assembly $40 to $90.', worth: 'Yes.' },
  { code: 'E-27', shown: 'E-27', meaning: 'Oven temperature sensor open circuit (resistance too high)', component: 'oven temperature sensor', severity: 'medium', diy: 'easy', faultTitle: 'sensor open circuit',
    quick: 'The sensor reads over about 2950 ohms, which the board treats as open. Loose plug or a failed sensor probe.',
    steps: ['Cut power for 3 minutes.', 'Unscrew the sensor probe inside the oven cavity (two screws at the back wall), unplug it and meter it: about 1080 ohms cold.', 'Replace the sensor if open or far off; reseat the plug if it reads fine.'],
    stop: 'Cut power before unplugging the sensor.', partCost: 'Sensor $20 to $40.', worth: 'Yes.' },
  { code: 'E-28', shown: 'E-28', meaning: 'Oven temperature sensor short circuit (resistance too low)', component: 'oven temperature sensor', severity: 'medium', diy: 'easy', faultTitle: 'sensor short circuit',
    quick: 'The sensor reads under about 930 ohms. A shorted probe or a pinched harness.',
    steps: ['Cut power for 3 minutes.', 'Remove and meter the sensor; replace if it reads low.', 'Check the harness behind the oven for a pinch or burn.'],
    stop: 'Cut power first.', partCost: 'Sensor $20 to $40.', worth: 'Yes.' },
  { code: 'LE', shown: 'LE', meaning: 'Low voltage fault (board supply under about 9 V DC)', component: 'control board transformer / connectors', severity: 'medium', diy: 'hard', faultTitle: 'low voltage',
    quick: 'The board is not getting its low-voltage supply. A loose connector or a failing transformer on the board.',
    steps: ['Cut power for 3 minutes.', 'Check the outlet and breaker for a weak leg.', 'Open the back (power off) and reseat all board connectors.', 'Replace the board if it persists.'],
    stop: 'Mains voltage on the board; cut power first.', partCost: 'Control board $100 to $200.', worth: 'Depends on age.' },
  { code: 'E-54', shown: 'E-54', meaning: 'Communication fault between oven and cooktop control boards', component: 'oven / cooktop boards and harness', severity: 'high', diy: 'hard', faultTitle: 'board communication fault',
    quick: 'The two boards in a range have stopped talking. A loose harness, or one board failed.',
    steps: ['Cut power for 3 minutes.', 'Reseat the harness between the boards (power off).', 'Replace the oven board first, then the cooktop board, if it persists.'],
    stop: 'Cut power first.', partCost: 'Board $100 to $250.', worth: 'Depends on age.' },
  { code: 'E-55', shown: 'E-55', meaning: 'Display / touch panel communication error', component: 'touch panel and oven board', severity: 'high', diy: 'hard', faultTitle: 'display communication error',
    quick: 'The oven board cannot talk to the touch display. Loose ribbon, a wet panel, or a failed panel or board.',
    steps: ['Cut power for 3 minutes.', 'Reseat the display ribbon on both ends (power off).', 'Replace the touch panel; then the board.'],
    stop: 'Cut power first.', partCost: 'Touch panel $100 to $200.', worth: 'Depends on age.' },
  { code: 'cE56', shown: 'cE-56', meaning: 'Internal control board fault', component: 'control board', severity: 'high', diy: 'hard', faultTitle: 'control board fault',
    quick: 'The board failed its own check.',
    steps: ['Cut power for 3 minutes.', 'Reseat all board connectors (power off).', 'Replace the board if it returns.'],
    stop: 'Cut power first.', partCost: 'Board $100 to $250.', worth: 'Depends on age.' },
  { code: 'tE', shown: 'tE', meaning: 'Touch communication error', component: 'touch panel', severity: 'medium', diy: 'hard', faultTitle: 'touch panel error',
    quick: 'The touch panel is not responding to the board. Moisture after cleaning is the everyday cause; otherwise the panel.',
    steps: ['Cut power for 3 minutes and let the panel dry if it was cleaned.', 'Reseat the panel ribbon (power off).', 'Replace the panel.'],
    stop: 'Cut power first.', partCost: 'Touch panel $100 to $200.', worth: 'Depends on age.' },
  { code: 'to', shown: 'to / ts', meaning: 'Cooktop temperature sensor error', component: 'cooktop sensor / cooktop board', severity: 'medium', diy: 'hard', faultTitle: 'cooktop sensor error',
    quick: 'The sensor under a cooktop element is not reading. Loose connection or failed sensor.',
    steps: ['Cut power for 3 minutes.', 'Reseat the sensor wiring on the cooktop board (power off).', 'Replace the sensor, then the cooktop board.'],
    stop: 'Cut power first.', partCost: 'Sensor $20 to $50; cooktop board $100 to $250.', worth: 'Depends.' },
  { code: 'ot', shown: 'ot', meaning: 'Cooktop overheating', component: 'cooktop board', severity: 'high', diy: 'hard', faultTitle: 'cooktop overheating',
    quick: 'A cooktop zone exceeded its limit. A pan boiled dry, or a sensor or board fault.',
    steps: ['Cut power and let it cool.', 'Restore power; if it returns with nothing on the cooktop, replace the cooktop board.'],
    stop: 'Do not use the cooktop until it clears.', partCost: 'Cooktop board $100 to $250.', worth: 'Depends.' },
  { code: 'bo', shown: 'bo / bs', meaning: 'Inverter (induction) control board sensor fault', component: 'induction inverter board', severity: 'high', diy: 'not recommended', faultTitle: 'inverter board fault',
    quick: 'On induction ranges, the inverter board that drives the coils has detected a sensor problem.',
    steps: ['Cut power for 3 minutes.', 'Reseat the inverter wiring (power off).', 'Replace the inverter board; this is a technician repair.'],
    stop: 'Induction inverters hold high voltage after power off.', partCost: 'Inverter board $150 to $350.', worth: 'Get a quote.' },
]);

export const entries: Entry[] = [...brevilleEntries, ...juraEntries, ...phEntries, ...dlEntries, ...geDwEntries, ...geDryEntries, ...smEntries];

export const brandBySlug = (s: string) => brands.find((b) => b.slug === s)!;
export const modelsOf = (brandSlug: string) => models.filter((m) => m.brandSlug === brandSlug);
export const modelBy = (brandSlug: string, slug: string) => models.find((m) => m.brandSlug === brandSlug && m.slug === slug)!;
export const entriesOf = (brandSlug: string, modelSlug: string) => entries.filter((e) => e.brandSlug === brandSlug && e.modelSlug === modelSlug);
export const href = (e: Pick<Entry, 'brandSlug' | 'modelSlug' | 'slug'>) => `/${e.brandSlug}/${e.modelSlug}/${e.slug}`;

export const featured: { brandSlug: string; modelSlug: string; slug: string }[] = [
  ...Object.keys(deepDives).map((k) => {
    const [sku, code] = k.split(':');
    const m = brevilleModels.find((x) => x.sku === sku)!;
    return { brandSlug: 'breville', modelSlug: m.slug, slug: codeSlug(code) };
  }),
  { brandSlug: 'jura', modelSlug: 'automatic-machines', slug: 'error-2' },
  { brandSlug: 'jura', modelSlug: 'automatic-machines', slug: 'error-8' },
  { brandSlug: 'philips-saeco', modelSlug: 'espresso-machines', slug: 'error-05' },
  { brandSlug: 'delonghi', modelSlug: 'magnifica-dinamica', slug: 'general-alarm-code-1101-1512' },
  { brandSlug: 'ge', modelSlug: 'dishwasher', slug: '888' },
  { brandSlug: 'ge', modelSlug: 'dryer', slug: 'e8' },
  { brandSlug: 'samsung', modelSlug: 'range-wall-oven', slug: 'se' },
];
