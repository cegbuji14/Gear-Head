const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

    await prisma.instrument.createMany({
        data: [
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
            { id: "drum_machine", name: "Drum Machine", family: "Percussion" },
            { id: "bass_guitar", name: "Bass Guitar", family: "Strings" },
            { id: "electric_guitar", name: "Electric Guitar", family: "Strings" },
            { id: "piano", name: "Piano", family: "Keys" },
            { id: "synthesizer", name: "Synthesizer", family: "Electronic" },
            { id: "vocals", name: "Vocal", family: "Wind" },
            { id: "sampler", name: "Sampler", family: "Electronic" },
            { id: "multi_track", name: "Multitrack Recorder", family: "Electronic" }
            //additional instruments
        ],
        skipDuplicates: true,
    });

    await prisma.instrumentType.createMany({
        data: [
            { id: "jazzmaster", name: "Fender Jazzmaster", instrumentId: "electric_guitar" },
            { id: "telecaster", name: "Fender Telecaster", instrumentId: "electric_guitar" },
            { id: "stratocaster", name: "Fender Stratocaster", instrumentId: "electric_guitar" },
            { id: "gibsonlp", name: "Gibson Les Paul", instrumentId: "electric_guitar" },
            { id: "gibsonsg", name: "Gibson SG", instrumentId: "electric_guitar" },
            { id: "gibson335", name: "Gibson ES-335", instrumentId: "electric_guitar" },
            { id: "jbass", name: "Fender Jazz", instrumentId: "bass_guitar" },
            { id: "pbass", name: "Fender P-Bass", instrumentId: "bass_guitar" },
            { id: "five_string", name: "Five String Bass", instrumentId: "bass_guitar" },
            { id: "linn_drum", name: "Linn LM-1", instrumentId: "drum_machine" },
            { id: "roland_drum", name: "Roland TR-808", instrumentId: "drum_machine" },
            { id: "obx_drum", name: "Oberheim DMX", instrumentId: "drum_machine" },
            { id: "rhodes", name: "Fender Rhodes", instrumentId: "piano"},
            { id: "wurlitzer", name: "Wurlitzer", instrumentId: "piano"},
            { id: "yamahacp70", name: "Yamaha CP-70", instrumentId: "piano"},
            { id: "mellotron", name: "Mellotron", instrumentId: "synthesizer"},
            { id: "minimoog", name: "Minimoog Model D", instrumentId: "synthesizer"},
            { id: "arp2600", name: "ARP2600", instrumentId: "synthesizer"},
            { id: "yamahadx7", name: "Yamaha DX-7", instrumentId: "synthesizer"},
            { id: "korgm1", name: "Korg M1", instrumentId: "synthesizer"},
            { id: "ensoniqesq", name: "Ensoniq ESQ", instrumentId: "synthesizer"},
            { id: "rolandjuno", name: "Roland Juno 106", instrumentId: "synthesizer"},
            { id: "emusp1200", name: "E-mu SP-1200", instrumentId: "sampler"},
            { id: "mpc60", name: "Akai MPC60", instrumentId: "sampler"},
            { id: "mpc3000", name: "Akai MPC3000", instrumentId: "sampler"},
            { id: "ensoniqasr10", name: "Ensoniq ASR-10", instrumentId: "sampler"},
            { id: "mpc2000xl", name: "Akai MPC2000XL", instrumentId: "sampler"},
            { id: "kontakt", name: "Native Instrument's Kontakt", instrumentId: "sampler"},
            { id: "studerj37", name: "Studer J37 (4 track)", instrumentId: "multi_track"},
            { id: "ampex440", name: "Ampex AG-440 (4 & 8 track)", instrumentId: "multi_track"},
            { id: "studera80", name: "Studer A80 (16 & 24 track)", instrumentId: "multi_track"},
            { id: "tascam_porta", name: "TASCAM Portastudio 144 (home 4 track)", instrumentId: "multi_track"},
            { id: "studera800", name: "Studer A800 (24 track industry standard)", instrumentId: "multi_track"},
            { id: "sony3324", name: "Sony PCM-3324 (24 track digital tape)", instrumentId: "multi_track"},
            { id: "studera827", name: "Studer A827 (advanced 24 track analog)", instrumentId: "multi_track"},
            { id: "pro_tools", name: "Pro Tools (DAW)", instrumentId: "multi_track"},
            { id: "bg_vocals", name: "Background Vocals", instrumentId: "vocals"},
            { id: "lead_vocals", name: "Lead Vocals", instrumentId: "vocals"}
            //additional types
        ],
        skipDuplicates: true,
    });

    await prisma.genre.createMany({
        data: [
            { id: "rock", name: "Rock" },
            { id: "jazz", name: "Jazz" },
            { id: "funk", name: "Funk" },
            { id: "hip_hop", name: "Hip Hop" },
            { id: "pop", name: "Pop" },
            { id: "rnb", name: "R&B" }
            //additional genres
        ],
        skipDuplicates: true,
  });

  console.log("✅ Seed complete!");
}
main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
  })
