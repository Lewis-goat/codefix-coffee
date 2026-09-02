import raw from './codes_raw.json';

export type Category =
  | 'ntc_open' | 'ntc_short' | 'overheat' | 'not_heating' | 'flow' | 'level'
  | 'comm' | 'grinder' | 'tamper' | 'electrical' | 'steam_block' | 'pressure' | 'leak';

export interface Model {
  slug: string; sku: string; name: string; family: string;
  codePrefix: string; // how the code is written on screen
  logAccess: string;  // how to read stored errors
  boilers: string;
  notes?: string;
}

export interface CodeEntry {
  code: string; meaning: string; category: Category; component: string;
  phase: 'startup' | 'operation' | 'any';
}

export const models: Model[] = [
  {
    slug: 'barista-touch-bes880', sku: 'BES880', name: 'Barista Touch', family: 'Barista',
    codePrefix: 'ER', boilers: 'single ThermoJet heater',
    logAccess: 'Switch the machine off at the wall. Hold the front Power button, switch the wall power back on and release when the logo appears. Enter the service password 00000, then open Error Counter to see stored faults or Live Debug for live temperatures.',
  },
  {
    slug: 'barista-touch-impress-bes881', sku: 'BES881', name: 'Barista Touch Impress', family: 'Barista',
    codePrefix: 'ER', boilers: 'single ThermoJet heater',
    logAccess: 'Unplug the machine. Press and hold the Power button while plugging it back in. When the password screen appears, enter 02015 to open Service Mode, then open the error log.',
    notes: 'The Impress shares its control board family and code table with the Barista Touch BES880, so fixes are the same.',
  },
  {
    slug: 'oracle-touch-bes990', sku: 'BES990', name: 'Oracle Touch', family: 'Oracle',
    codePrefix: 'ER', boilers: 'dual stainless boilers plus heated group head',
    logAccess: 'Switch the machine off at the wall. Hold the front Power button, switch the wall power back on and release when the logo appears. Enter the service password 00000, then open Error Counter (stored faults) or Live Debug (live temperatures and water levels).',
  },
  {
    slug: 'oracle-bes980', sku: 'BES980', name: 'Oracle', family: 'Oracle',
    codePrefix: 'Error ', boilers: 'dual stainless boilers plus heated group head',
    logAccess: 'Leave the machine plugged in but switched off. Press and hold 1 CUP, 2 CUP and POWER together for at least one second. After the long beep the LCD shows the firmware version (starts with "Fr"). Press the SELECT dial once to open Error Storage, then rotate it to step through errors 1 to 32 and the stored count for each. Scroll past error 32 to "ErSt" and hold SELECT for 3 seconds to clear the log.',
    notes: 'The Oracle BES980 uses the same 32-code table as the Oracle Touch BES990. On screen it shows "Error 15" rather than "ER15".',
  },
  {
    slug: 'oracle-jet-bes985', sku: 'BES985', name: 'Oracle Jet', family: 'Oracle',
    codePrefix: 'E', boilers: 'single ThermoJet heater plus heated group head',
    logAccess: 'Open Settings on the touch screen, then About the Machine, then Software version. On that screen tap each bottom corner of the screen several times. Go back to About the Machine and a new Service center mode entry appears. Open it to view the error log.',
    notes: 'The Oracle Jet has a different, shorter code table (E1 to E19) from the older Oracles.',
  },
  {
    slug: 'dual-boiler-bes920', sku: 'BES920', name: 'Dual Boiler', family: 'Dual Boiler',
    codePrefix: '', boilers: 'dual stainless boilers plus heated group head',
    logAccess: 'Switch the machine off at the wall. Hold EXIT and MANUAL while switching the power back on to enter the self-check menu. Press MENU to reach item 3 (error log) and item 4 (boiler level status such as LLL / HHH). In the error log, MENU steps through codes 00 to 12 with a count for each. At "ErSt", hold MANUAL until it beeps to clear the codes (the cup counter is not reset).',
    notes: 'The Dual Boiler shows two-digit codes 00 to 12 in its hidden self-check menu rather than on the normal display.',
  },
];

function classify(meaning: string): { category: Category; component: string } {
  const m = meaning.toLowerCase();
  const comp = (
    m.includes('milk jug') ? 'milk jug temperature sensor (NTC)' :
    m.includes('steam wand') && m.includes('sensor') ? 'steam wand temperature sensor (NTC)' :
    m.includes('steam boiler') && m.includes('sensor') ? 'steam boiler temperature sensor (NTC)' :
    m.includes('coffee boiler') && m.includes('sensor') ? 'coffee boiler temperature sensor (NTC)' :
    m.includes('group head') && m.includes('sensor') ? 'group head temperature sensor (NTC)' :
    m.includes('ferro heater') && m.includes('sensor') ? 'ThermoJet (ferro) heater temperature sensor (NTC)' :
    m.includes('inline temperature sensor') ? 'inline (brew water) temperature sensor (NTC)' :
    m.includes('flow meter') ? 'flow meter' :
    m.includes('pressure sensor') ? 'steam pressure sensor' :
    m.includes('auger') ? 'auger (dosing) motor' :
    m.includes('tamping') ? 'tamping motor / tamp fan' :
    m.includes('grinder') ? 'grinder motor' :
    m.includes('communication') ? 'control board ribbon cable / boards' :
    m.includes('leak') && m.includes('steam boiler') ? 'steam boiler, o-rings and level probes' :
    m.includes('leakage current') || m.includes('e-fast') || m.includes('electrical fast') || m.includes('zero-cross') ? 'mains electrical / triac board' :
    m.includes('probe') ? 'boiler water-level probe' :
    m.includes('steam wand blocked') ? 'steam wand tip and milk path' :
    m.includes('steam boiler') ? 'steam boiler and its pump' :
    m.includes('coffee boiler') ? 'coffee boiler and pump' :
    m.includes('group head') ? 'group head heater' :
    'internal control electronics'
  );
  let category: Category = 'comm';
  if (m.includes('short circuit')) category = 'ntc_short';
  else if (m.includes('open circuit') || m.includes('not detected at startup') || m.includes('lost during operation') || (m.includes('sensor') && m.includes('not detected'))) category = 'ntc_open';
  else if (m.includes('overheat') || m.includes('over temp') || m.includes('overheating')) category = m.includes('grinder') ? 'grinder' : 'overheat';
  else if (m.includes('not rising') || m.includes('not heating') || m.includes('unable to reach temperature')) category = 'not_heating';
  else if (m.includes('flow meter')) category = 'flow';
  else if (m.includes('leak or refill')) category = 'leak';
  else if (m.includes('level') || m.includes('probe') || m.includes('pump')) category = 'level';
  else if (m.includes('communication')) category = 'comm';
  else if (m.includes('grinder')) category = 'grinder';
  else if (m.includes('tamping') || m.includes('auger')) category = 'tamper';
  else if (m.includes('leakage current') || m.includes('e-fast') || m.includes('electrical fast') || m.includes('zero-cross') || m.includes('power fault')) category = 'electrical';
  else if (m.includes('steam wand blocked')) category = 'steam_block';
  else if (m.includes('pressure')) category = 'pressure';
  return { category, component: comp };
}

export const codesByModel: Record<string, CodeEntry[]> = Object.fromEntries(
  Object.entries(raw as Record<string, { code: string; meaning: string }[]>).map(([sku, list]) => [
    sku,
    list.map(({ code, meaning }) => {
      const { category, component } = classify(meaning);
      const ml = meaning.toLowerCase();
      const phase: CodeEntry['phase'] = ml.includes('startup') || ml.includes('at boot') ? 'startup' : ml.includes('operation') || ml.includes('brewing') ? 'operation' : 'any';
      return { code, meaning, category, component, phase };
    }),
  ])
);

export function codeSlug(code: string) {
  return code.toLowerCase().replace(/\s+/g, '-');
}

export interface Playbook {
  title: string;
  severity: 'low' | 'medium' | 'high';
  diy: 'easy' | 'moderate' | 'hard' | 'not recommended';
  partCost: string;
  serviceCost: string;
  quickAnswer: (c: CodeEntry, m: Model) => string;
  steps: (c: CodeEntry, m: Model) => string[];
  stop: string;
  worth: string;
}

const NTC_PART = 'Genuine NTC sensor assemblies run about $25 to $95 depending on which sensor it is (steam wand and milk-jug sensors are the dear ones). O-ring kits are $10 to $20.';
const SERVICE = 'Out-of-warranty Breville service quotes for internal faults are commonly $300 to $500, sometimes more, plus shipping. Independent espresso repair shops are usually cheaper for a sensor swap.';

export const playbooks: Record<Category, Playbook> = {
  ntc_open: {
    title: 'Temperature sensor open circuit (not detected)',
    severity: 'medium', diy: 'moderate', partCost: NTC_PART, serviceCost: SERVICE,
    quickAnswer: (c) => `The control board cannot read the ${c.component}. On this code the sensor reads as an open circuit: the wire has come off, the plug is loose or corroded, or the sensor itself has failed. ${c.phase === 'startup' ? 'Because it fails the self-test at power-on, the machine refuses to start until the sensor reads again.' : 'Because it dropped out mid-cycle, a loose or heat-damaged connection is the most likely cause.'}`,
    steps: (c, m) => [
      'Switch the machine off at the wall, wait 60 seconds and switch it back on. A one-off reading glitch clears; a real open circuit comes straight back.',
      c.component.includes('milk jug')
        ? 'Look at the milk temperature sensor on the drip tray area. The sensor knob must sit vertically in its rubber mount and the metal contact pads must line up with the jug. Reseat it, clean the pads and try again. This alone fixes a large share of ER05 to ER08 reports.'
        : c.component.includes('steam wand')
        ? 'The NTC is inside the steam wand. Clean the wand tip thoroughly and check the wand is not kinked or twisted at its base. If the code persists, the wand assembly (with its sensor) is replaced as one part; it is a screwdriver job.'
        : 'Remove the water tank, hopper and drip tray, then the base or rear panel (Phillips screws). Find the sensor plug for the ' + c.component + ' on the control board, unplug it, look for green corrosion or heat marks, and push it firmly back on.',
      'Check for water where it should not be. Moisture on the board or in a connector reads as an open or short. Dry everything and look for the leak that caused it (usually a boiler o-ring or hose clip).',
      `If the code returns, replace the ${c.component}. On the ${m.name} it is a plug-in part; note which way the wires route before pulling the old one.`,
      `Clear the stored error afterwards (see how to read the error log below) so you can tell whether it recurs.`,
    ],
    stop: 'Stop and book service if you find a swollen or burnt component on the board, or if the sensor plugs are fine and a new sensor does not clear the code: that points at the control board.',
    worth: 'Usually yes. A sensor plus o-rings is under $100 and 30 to 60 minutes. Only a dead control board makes the repair questionable on an older machine.',
  },
  ntc_short: {
    title: 'Temperature sensor short circuit',
    severity: 'medium', diy: 'moderate', partCost: NTC_PART, serviceCost: SERVICE,
    quickAnswer: (c) => `The ${c.component} is reading as a short circuit: the board sees near-zero resistance, which a healthy sensor never produces. The two real-world causes are water bridging the sensor contacts (a leak or steam at the probe seal) and a failed sensor. ${c.phase === 'operation' ? 'Because it happened during operation, heat or steam getting at the connector is the prime suspect.' : 'Because it failed at startup, it is usually a wet connector or a sensor that has already died.'}`,
    steps: (c, m) => [
      'Switch off at the wall and unplug. Leave the machine for an hour so any moisture in the connectors dries, then try again. A short that clears after drying tells you there is a leak to find.',
      c.component.includes('steam wand')
        ? 'Inspect the steam wand where it enters the machine: scale or milk residue creeping into the wand can bridge the sensor. Deep-clean the wand and the tip; if it recurs, replace the wand assembly.'
        : c.component.includes('milk jug')
        ? 'Dry the milk sensor pads on the drip tray area and the sensor cable underneath the tray. Milk running down into the sensor cavity is the classic cause; reseat the sensor knob and its spring and boot.'
        : `Open the machine (base or rear panel) and inspect the ${c.component} plug and the wiring near the boiler. Look for a wet patch, white scale trails or a perished o-ring around the probe.`,
      'Replace any leaking o-rings at the boiler fittings and NTC probes. Kits are cheap and the leak, not the sensor, is often the true fault.',
      `If the code persists after everything is dry, replace the ${c.component}.`,
      'Clear the error log and run the machine through a full heat-up and a shot to confirm.',
    ],
    stop: 'If you see scorch marks on the triac board or the machine trips your GFCI / RCD, stop: that is an electrical fault, not just a sensor.',
    worth: 'Yes in most cases. Sensor plus o-ring kit is well under $100. If a leak has soaked the control board, get a quote before spending anything.',
  },
  overheat: {
    title: 'Overheated above target temperature',
    severity: 'high', diy: 'hard', partCost: 'Thermal fuse $10 to $20; triac board $80 to $150; steam boiler probe and o-ring kit about $85.', serviceCost: SERVICE,
    quickAnswer: (c) => `The ${c.component.replace(' temperature sensor (NTC)', '')} got hotter than the controller asked for. That means either the heater kept running when it was told to stop (a triac on the power board latched on) or the sensor is under-reading because of a leak or steam at the probe seal. Breville machines cut power to protect themselves, and repeated overheating blows the thermal fuse.`,
    steps: (c) => [
      'Switch off at the wall immediately and let the machine cool for at least 60 minutes.',
      'Switch back on and watch the heat-up. If it reaches temperature normally and the code does not return, treat it as a one-off caused by low water or a blocked flow and descale.',
      c.component.includes('steam')
        ? 'On the steam boiler, check the probe insertion port on top of the boiler for steam venting or white scale trails. A leaking probe seal lets steam heat the sensor cable and produces false overheat readings; replace the probe o-rings.'
        : 'Check the boiler fittings and NTC probe for leaks and replace perished o-rings.',
      'If the machine overheats again or steam pours from the group head at idle, the triac board is latched on. This is a board replacement, not a cleaning job.',
      'If the machine now will not heat at all after an overheat, the thermal fuse has done its job and blown. It is a cheap part but sits on the boiler and needs the machine opened up.',
    ],
    stop: 'Do not keep running a machine that repeats an overheat code. Latched heaters can boil dry and damage the boiler and wiring.',
    worth: 'Depends on the cause. Probe o-rings: yes, always. Triac board plus thermal fuse on a machine over five years old: get the part price first and compare with a refurbished unit.',
  },
  not_heating: {
    title: 'Heater not reaching temperature',
    severity: 'high', diy: 'hard', partCost: 'Thermal fuse $10 to $20; heating element or ThermoJet heater $60 to $150; triac board $80 to $150.', serviceCost: SERVICE,
    quickAnswer: (c) => `The controller is switching the ${c.component.replace(' temperature sensor (NTC)', '')} heater on but the temperature is not climbing. Either the heater is not getting power (a blown thermal fuse or a dead triac) or the element itself has failed. A sensor that has drifted can also mimic this, but heater-side faults are far more common.`,
    steps: () => [
      'Check the obvious: water tank full and seated, no "fill tank" prompt, machine on a socket that is not shared with a kettle or heater on the same circuit.',
      'Power cycle and time the warm-up. No warmth at all after five minutes means no power to the element: thermal fuse or triac.',
      'Open the machine and check the thermal fuse on the affected boiler with a multimeter (should read near zero ohms). If it is open, replace it, but also find out why it blew (leak, scale, latched triac).',
      'Measure the heating element resistance. Open circuit means a new element or, on ThermoJet machines, a new heater block.',
      'If fuse and element are fine, the triac board is not switching. Replace the board.',
    ],
    stop: 'Mains voltage is present at the element and triac board. If you are not confident testing live circuits, this is a bench repair for a technician.',
    worth: 'A thermal fuse is a yes. An element or board on an older machine is a judgment call: compare the quote with a refurbished replacement.',
  },
  flow: {
    title: 'Flow meter signal problem',
    severity: 'medium', diy: 'moderate', partCost: 'Flow meter $20 to $40; pump $30 to $60; descaler $10.', serviceCost: SERVICE,
    quickAnswer: (c) => `The machine expects pulses from the flow meter while the pump runs and is not seeing them${c.phase === 'startup' ? ' during its startup prime' : ' during brewing'}. Either no water is moving (empty or unseated tank, airlock, blocked path, tired pump) or water is moving and the flow meter cannot count it (scale or debris on its little paddle wheel, or a failed sensor).`,
    steps: () => [
      'Fill and firmly reseat the water tank. Run the hot water outlet for 30 seconds and then the brew button with no portafilter to purge air.',
      'Descale if it has been more than three months. Scale on the flow meter paddle is the single most common cause.',
      'Remove the portafilter and run water through the empty group head. Good flow here but a code with coffee in means the grind or basket is the blockage, not the meter.',
      'Listen to the pump. A loud buzz with no water means a dry or failing pump or a blocked inlet; a silent pump means no power to it.',
      'Open the machine and inspect the flow meter (a small plastic body on the tank-side hose). Flush it, clear debris, and reseat its two-wire plug. Replace if the paddle is stuck.',
    ],
    stop: 'If the pump runs but water leaks inside the machine, stop and find the leak first.',
    worth: 'Yes. Descaling fixes most of these for the price of descaler; a flow meter or pump is cheap.',
  },
  level: {
    title: 'Boiler water level or pump fault',
    severity: 'medium', diy: 'moderate', partCost: 'Level probe and o-ring kit about $85; steam boiler fill pump $30 to $60.', serviceCost: SERVICE,
    quickAnswer: (c) => `The ${c.component} is not reporting what the controller expects: the boiler should be filling and the level probes should register water, and they do not. Scaled probes, an inlet line blocked with scale, a small fill pump that has stopped moving water, or a probe seal leak all produce this code.`,
    steps: (c, m) => [
      'Tank full and seated, then power cycle and let the machine attempt a fill.',
      'Descale, including the steam boiler cycle if your model has one. Scale on the level probe is insulating and reads as "no water".',
      m.sku === 'BES920' ? 'Enter the self-check menu (item 4) and read the boiler level status. LLL means low, HHH means high: a probe stuck on HHH with a boiler that sounds empty is a scaled or shorted probe.' : 'Use the service mode Live Debug screen to watch the boiler level reading while the pump runs.',
      'Open the machine and clean the probes with a scale remover, replace their o-rings, and check the inlet hose for blockage.',
      'If the fill pump buzzes and no water reaches the boiler, replace the small pump. Some owners top the boiler up with a syringe through the probe port to get the machine running while parts are on order.',
    ],
    stop: 'Water and mains electricity share the top of the boiler. Unplug before touching the probes.',
    worth: 'Yes. Probes, o-rings and a fill pump are all under $100 and this is the single most common Breville dual-boiler repair.',
  },
  comm: {
    title: 'Internal communication fault',
    severity: 'high', diy: 'moderate', partCost: 'Nothing if it is a cable; a control board is $100 to $250.', serviceCost: SERVICE,
    quickAnswer: () => 'The display or main board has lost contact with another board inside the machine. Nine times out of ten that is a ribbon cable that has worked loose, moisture on a connector, or a board that has been splashed by a leak. A genuinely dead board is the rarer, dearer case.',
    steps: () => [
      'Unplug for ten minutes, then power back on. Board resets clear a surprising number of these.',
      'Look for a leak. Pull the drip tray, tank and hopper and look for water trails under the machine or on the base plate.',
      'Open the machine and reseat every ribbon cable and plug between the display board, main board and power (triac) board. Push each connector home until it clicks.',
      'Dry any wet connector with a hair dryer on low, and fix the leak that wet it.',
      'If the fault persists with everything dry and seated, one of the boards has failed. Get a quote before ordering: board prices vary a lot by model.',
    ],
    stop: 'If the display is blank or flickering as well, do not keep power-cycling; that can take a struggling board from intermittent to dead.',
    worth: 'Cable or moisture: yes, free. Board: compare the quote with a refurbished machine.',
  },
  grinder: {
    title: 'Grinder motor fault',
    severity: 'low', diy: 'easy', partCost: 'Nothing for a jam; a grinder motor is $60 to $120.', serviceCost: SERVICE,
    quickAnswer: (c) => `The grinder ${c.meaning.toLowerCase().includes('overheat') ? 'motor got hot and shut itself down' : c.meaning.toLowerCase().includes('timed out') ? 'ran longer than it should without finishing the dose' : 'is drawing too much current or not turning'}. Almost always this is beans, stones or compacted grounds jamming the burrs, or a grind setting so fine that the motor labours. A worn motor is possible after many thousands of cups.`,
    steps: () => [
      'Stop and let the machine sit for 30 minutes if the code mentions overheating.',
      'Remove the hopper, empty it and check for a stone or a very oily, compacted bean layer at the burr throat.',
      'Lift out the top burr and clean both burrs and the chute with the brush. Never wash burrs; moisture clogs them.',
      'Check the tamp fan / impeller under the burr is fitted and not stuck (Oracle models). A missing fan makes the grinder run continuously.',
      'Set the grind two or three numbers coarser, refit everything, and run a short grind with a small dose of beans.',
      'If the motor hums but does not turn with clean burrs, it has failed. It is a replaceable module.',
    ],
    stop: 'A burning smell means stop and let it cool; do not repeatedly retry a jammed motor.',
    worth: 'Yes. Jams are free to fix; a motor is a fair price against a new machine.',
  },
  tamper: {
    title: 'Tamping / dosing motor fault',
    severity: 'low', diy: 'easy', partCost: 'Nothing for a jam; tamp motor assembly about $80 to $130.', serviceCost: SERVICE,
    quickAnswer: () => 'The auto tamper or dosing auger did not finish its travel in the time allowed. Dried coffee oils on the tamper head or in the auger, a portafilter not seated in the cradle, or a very fine grind that packs hard are the usual reasons.',
    steps: () => [
      'Remove the portafilter and wipe the tamper head and cradle with a dry cloth; oily buildup makes the tamper stick.',
      'Check the tamp fan and auger are fitted correctly to the drive shaft after any cleaning.',
      'Run the tamp calibration routine from the settings menu if your model has one.',
      'Coarsen the grind slightly and retry.',
      'If the tamper jams mid-stroke every time, the assembly has failed and is replaced as a unit.',
    ],
    stop: 'Keep fingers clear of the tamper cradle while it moves.',
    worth: 'Yes.',
  },
  electrical: {
    title: 'Electrical safety protection triggered',
    severity: 'high', diy: 'not recommended', partCost: 'Triac / power board $80 to $150; heating element $60 to $150.', serviceCost: SERVICE,
    quickAnswer: () => 'The machine detected an electrical fault: leakage current to ground, an unexpected mains waveform, or a heater drawing power when it should not. Water on a heating element or the power board is the everyday cause. This is the code that also trips the GFCI / RCD in your kitchen.',
    steps: () => [
      'Unplug. Do not keep resetting the breaker; each trip is the machine telling you current is going where it should not.',
      'Let the machine dry for 24 hours somewhere warm. A machine that has been descaled or has a slow leak often has water around the element terminals.',
      'Check the mains cable and plug for damage and try a different socket on a different circuit.',
      'If it runs after drying, find and fix the leak (o-rings, hoses, boiler fittings) or it will return.',
      'If it trips again dry, the element insulation or the power board has failed. That is a technician job.',
    ],
    stop: 'This is a mains-electricity fault. Unless you are competent with live testing, hand it to a repairer.',
    worth: 'Drying out: yes. Element or board on an old machine: get a quote first.',
  },
  steam_block: {
    title: 'Steam wand blocked',
    severity: 'low', diy: 'easy', partCost: 'Steam tip $10; steam wand assembly $60 to $95.', serviceCost: SERVICE,
    quickAnswer: () => 'The machine tried to texture milk and saw abnormal pressure: the steam tip holes are blocked with dried milk or scale, or the wand path is restricted.',
    steps: () => [
      'Unscrew the steam tip and soak it in hot water with a little descaler; clear each hole with the pin on the cleaning tool.',
      'Run the auto purge or a manual steam purge for 10 seconds with the tip off, then again with it on.',
      'Descale the machine if it has been more than three months.',
      'If steam is still weak with a clean tip, the wand or its valve is scaled internally: replace the wand assembly.',
    ],
    stop: 'Hot steam: purge into the drip tray, not towards your hand.',
    worth: 'Yes.',
  },
  pressure: {
    title: 'Pressure sensor signal missing',
    severity: 'medium', diy: 'hard', partCost: 'Pressure sensor $30 to $60.', serviceCost: SERVICE,
    quickAnswer: () => 'The steam system pressure sensor is not returning a reading. A loose plug, a wet connector or a failed sensor.',
    steps: () => [
      'Power cycle and retry steaming.',
      'Open the machine and reseat the pressure sensor plug; dry any moisture.',
      'Replace the sensor if the fault persists.',
    ],
    stop: 'Steam side runs above 1 bar; do not open fittings on a hot machine.',
    worth: 'Yes if it is the sensor.',
  },
  leak: {
    title: 'Steam boiler leak or refill failure',
    severity: 'high', diy: 'moderate', partCost: 'O-ring and probe kit about $85; fill pump $30 to $60.', serviceCost: SERVICE,
    quickAnswer: () => 'The steam boiler keeps calling for water. Either it is losing it (a leak at a probe seal, fitting or the anti-vacuum valve) or the fill pump cannot deliver it. Either way the machine stops to avoid running the boiler dry.',
    steps: () => [
      'Pull the drip tray and look under and behind the machine for water or scale trails.',
      'Descale, then replace the steam boiler probe o-rings; they harden with heat and are the most common leak point.',
      'Check the fill pump moves water when it runs (you can hear it and see the level rise in Live Debug).',
      'Check the anti-vacuum valve on top of the boiler is not stuck open and hissing.',
    ],
    stop: 'A leak onto the power board is what kills these machines. Do not run it until the leak is fixed.',
    worth: 'Yes. O-rings and a pump are cheap; the risk is the board if you ignore it.',
  },
};

// Hand-written deep dives for the highest-traffic codes. Keyed `${sku}:${code}`.
export const deepDives: Record<string, { intro: string; extra: string[] }> = {
  'BES880:ER05': {
    intro: 'ER05 is the single most reported Breville Barista Touch error, and it is nearly always the milk jug temperature sensor: the small round probe on the drip tray that reads the jug temperature while the wand textures milk. The machine checks that sensor at startup, and if the probe wire has broken, the sensor knob has been knocked out of its rubber mount, or milk has got into the sensor cavity, the self-test fails and the machine stops at "ER05 startup error".',
    extra: [
      'The five-minute check: pull the drip tray, look at the sensor knob. It must sit vertically in its rubber boot with the spring under it. Push it back in, wipe the three metal contact pads, refit and restart.',
      'The real fix when reseating fails: the milk sensor wire. It fatigues where it flexes under the tray. Breville sells the NTC base assembly (genuine part around $80 to $95); third-party repair kits with a pre-fitted sensor and wire are $30 to $50. It is a 15-minute job with a Phillips screwdriver: five screws in the base, four on the sensor board, swap the wire, and line the jug pads up with the contacts before reassembling.',
      'ER06, ER07 and ER08 are the same sensor reporting the fault at a different moment (open during operation, short at startup, short during operation). One kit fixes all four.',
      'Breville out-of-warranty quotes for ER05 have been reported in the $150 to $250 range. Given the part cost, this is a repair worth doing yourself.',
    ],
  },
  'BES880:ER15': {
    intro: 'ER15 on the Barista Touch is not a sensor code: it is the display board losing communication with the main board. Owners often see it after a leak, after moving the machine, or with a display that flickers first.',
    extra: [
      'Reseat the ribbon cable between the touch screen and the main board first; it is the most common cause and costs nothing.',
      'If the machine has been leaking from the tank seal or the ThermoJet, the main board may be wet. Dry it and fix the leak before anything else.',
    ],
  },
  'BES880:ER16': {
    intro: 'ER16 means the grinder motor overheated and shut down. On the Barista Touch this follows a long grind with very oily or very finely ground beans, or a stone in the burrs.',
    extra: ['Wait 30 minutes, clear the burrs, coarsen the grind two numbers. If the motor hums without turning once clear, it needs replacing.'],
  },
  'BES990:ER12': {
    intro: 'ER12 on the Oracle Touch is a group head temperature sensor short circuit during operation. Older forum posts blame the portafilter or the grinder, but the code table is clear: the sensor in the heated group head is reading as a short. Steam or water at the sensor connector is the usual cause, followed by the sensor itself.',
    extra: [
      'Because it is "during operation", it typically appears mid-shot or while steaming, when the group is hottest and any leak flashes to steam.',
      'Check the group head heater sensor plug on the main board and the o-rings around the group. A new sensor is a modest part; a persistent ER12 after a dry sensor swap points at the board.',
    ],
  },
  'BES990:ER15': {
    intro: 'ER15 is the steam wand temperature sensor reading as a short circuit at startup. The Oracle Touch has an NTC inside the wand that stops the auto-texturing at the right milk temperature, and it lives in the wettest place on the machine. Milk residue creeping up inside the wand or scale at the wand base bridges the sensor.',
    extra: [
      'Deep-clean the wand and tip, dry the machine overnight, and retry. If ER15 comes straight back cold, the wand assembly (which includes the sensor) is replaced as one part, about $60 to $95, with a screwdriver.',
      'ER16 is the same sensor failing during operation; ER13 and ER14 are the same sensor reading open circuit rather than shorted. Same part.',
    ],
  },
  'BES990:ER16': {
    intro: 'ER16 is the steam wand temperature sensor short-circuiting during operation, usually while texturing milk. It is the "operation" twin of ER15 and has the same fix.',
    extra: ['Clean the wand, dry the machine, then replace the wand assembly if it recurs.'],
  },
  'BES990:ER23': {
    intro: 'ER23 is a flow meter signal problem during brewing: the coffee pump is running but the flow meter is not counting water. Most often the pump has weakened or the flow meter paddle is scaled; sometimes the coffee is simply ground so fine that nothing moves.',
    extra: [
      'Run water through an empty group head. Good flow means grind and basket, not the machine. Weak or no flow means descale first, then flow meter, then pump.',
      'The coffee pump on the Oracle Touch is a standard vibratory pump, around $30 to $60, and is the part most often replaced for a persistent ER23.',
    ],
  },
  'BES990:ER26': {
    intro: 'ER26 is the steam boiler overheating above its target. The classic Oracle Touch cause is a leaking steam probe seal on top of the boiler: steam vents past the o-ring, heats the sensor cable, and the controller sees a runaway temperature. The dangerous cause is a triac on the power board latching the heater on.',
    extra: [
      'Look for scale trails or hissing at the probe insertion port with the top cover off. Replace the probe o-rings (kits about $85 with new probes) and clean the probes.',
      'If the boiler overheats again with good seals, the thermal fuse will open and the machine will stop heating steam. Fuse plus triac board is a technician-level job on a machine that is still worth it; otherwise price a refurbished unit.',
    ],
  },
  'BES990:ER09': {
    intro: 'ER09 is the group head temperature sensor not detected at startup: the machine cannot see the sensor in the heated group during its self-test, so it refuses to start.',
    extra: ['Reseat the group head sensor plug on the main board; if the machine has been leaking, dry the connector. Replace the sensor if it stays open.'],
  },
  'BES990:ER20': {
    intro: 'ER20 is a steam boiler level or pump issue: the boiler called for water and the level probes never saw it arrive. Scaled probes and a tired fill pump are the two causes.',
    extra: ['Descale, clean the probes and replace their o-rings; then check the fill pump actually moves water. Some owners syringe water into the boiler through the probe port to get going.'],
  },
  'BES920:08': {
    intro: 'Code 08 on the Dual Boiler is a coffee water flow failure: the pump ran and the flow meter saw nothing. Owners most often trace it to the small pump running continuously without moving water, or to scale on the flow meter.',
    extra: ['Descale first. If the pump buzzes and the boiler does not fill, replace the pump; several owners have fixed 08 together with 11 that way.'],
  },
  'BES920:11': {
    intro: 'Code 11 is the steam boiler over-temperature. On the Dual Boiler it usually follows a boiler that is not being refilled (see code 08 or 07), so the element heats a low boiler; a leaking probe seal is the other cause.',
    extra: ['Check the boiler level status in self-check item 4, clean and reseal the probes, and fix the fill pump if it is not delivering.'],
  },
  'BES985:E16': {
    intro: 'E16 on the Oracle Jet is a blocked steam wand or abnormal pressure during milk texturing. The Jet monitors steam pressure, so a milk-crusted tip or a scaled wand trips it before you notice weak steam.',
    extra: ['Soak the tip, pin the holes, run the auto purge, descale. Replace the tip if the holes are enlarged or the wand if it is still restricted.'],
  },
  'BES881:ER05': {
    intro: 'ER05 on the Barista Touch Impress is the milk jug temperature sensor failing its startup self-test, exactly as on the Barista Touch BES880. The sensor sits on the drip tray and its wire fatigues underneath.',
    extra: ['Reseat the sensor knob first; replace the sensor / wire kit if it returns. The BES880 milk sensor kit fits the Impress.'],
  },
};
