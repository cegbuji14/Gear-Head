import { EraGenreStyle } from "@/types/music"

export const styles: EraGenreStyle[] = [
  {
    id: "1970s_funk",
    eraId: "1970s",
    genreId: "funk",
    description:
      "Rhythm-focused funk emphasizing tight grooves, syncopation, and interlocking parts.",
    instruments: [
      {
        instrumentId: "drums",
        prominence: "primary",
        productionNotes:
          "Dry, close-miked drum kits with emphasis on tight kick and snare patterns."
      },
      {
        instrumentId: "bass_guitar",
        prominence: "primary",
        productionNotes:
          "Fingerstyle or 'thumpin and pluckin', often recorded direct with minimal processing."
      },
      {
        instrumentId: "clavinet",
        prominence: "primary",
        productionNotes:
          "Played percussively through wah or envelope filters, frequently doubled with guitar."
      },
      {
        instrumentId: "electric_guitar",
        prominence: "secondary",
        productionNotes:
          "Clean, rhythmic strumming with muted strokes and occasional wah effects."
      }
    ]
  }
]
