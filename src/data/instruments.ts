import { Instrument } from "@/types/music"


export const instruments: Instrument[] = [
  { id: "drums", name: "Drums", family: "Percussion" },
  { id: "acoustic_guitar", name: "Acoustic Guitar", family: "Strings" },
  { id: "clavinet", name: "Clavinet", family: "Keys" },
  { id: "saxophone", name: "Saxophone", family: "Brass" },
  { id: "horn_section", name: "Horn Section", family: "Brass" },
  { id: "hammond_organ", name: "Hammond Organ", family: "Electronic" },
  { id: "trumpet", name: "Trumpet", family: "Brass" },
  { id: "clarinet", name: "Clarinet", family: "Woodwind" },
  { id: "upright_bass", name: "Upright Bass", family: "Strings" },
  { id: "turntable", name: "Turntable", family: "Electronic" },

  { id: "drum_machine", 
    name: "Drum Machine",
    types: [
      {id: "linn_drum", name: "Linn LM-1"},
      {id: "roland_drum", name: "Roland TR-808"},
      {id: "obx_drum", name: "Oberheim DMX"},
    ], 
    family: "Percussion" 
  },

  { id: "bass_guitar", 
    name: "Bass Guitar",
    types: [
      {id: "pbass", name: "Fender P-Bass"},
      {id: "jbass", name: "Fender Jazz"},
      {id: "5string", name: "5 String"},
    ], 
    family: "Strings" 
  },

  { id: "electric_guitar", 
    name: "Electric Guitar",
    roles: ["Rhythm", "Lead"],
    types: [
      {id: "stratocaster", name: "Fender Stratocaster"},
      {id: "telecaster", name: "Fender Telecaster"},
      {id: "jazzmaster", name: "Fender Jazzmaster"},
      {id: "gibsonsg", name: "Gibson SG"},
      {id: "gibsonlp", name: "Gibson Les Paul"},
      {id: "gibson335", name: "Gibson ES-335"},
    ],
    family: "Strings" 
  },

  { id: "piano", 
    name: "Piano", 
    types: [
      {id: "rhodes", name: "Fender Rhodes"},
      {id: "wurlitzer", name: "Wurlitzer"},
      {id: "yamahacp70", name: "Yamaha CP-70"},
    ],
    family: "Keys" 
  },

  { id: "synthesizer", 
    name: "Synthesizer", 
    types: [
      {id: "mellotron", name: "Mellotron"},
      {id: "minimoog", name: "Minimoog Model D"},
      {id: "arp2600", name: "ARP2600"},
      {id: "yamahadx7", name: "Yamaha DX-7"},
      {id: "minimoog", name: "Minimoog Model D"},
      {id: "korgm1", name: "Korg M1"},
      {id: "ensoniqesq", name: "Ensoniq ESQ"},
      {id: "rolandjuno", name: "Roland Juno 106"},
    ],    
    family: "Electronic" 
  },

  { id: "vocals", 
    name: "Vocal", 
    roles: ["Background", "Lead"],
    family: "Wind"
  },

  { id: "sampler", 
    name: "Sampler",
    types: [
      {id: "emusp1200", name: "E-mu SP-1200"},
      {id: "mpc60", name: "Akai MPC60"},
      {id: "mpc3000", name: "Akai MPC3000"},
      {id: "ensoniqasr10", name: "Ensoniq ASR-10"},
      {id: "mpc2000xl", name: "Akai MPC2000XL"},
      {id: "kontakt", name: "Native Instrument's Kontakt"},
    ],
    family: "Electronic" },
]

export const instrumentMap = instruments.reduce((map, instrument) => {
  map[instrument.id] = instrument; // full instrument object, not just name
  return map;
}, {} as Record<string, Instrument>);

export const instrumentById = instruments.reduce((map, instrument) => {
  map[instrument.id] = instrument;
  return map;
}, {} as Record<string, Instrument>);


