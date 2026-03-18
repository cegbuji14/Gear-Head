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

    
    ]
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
  })