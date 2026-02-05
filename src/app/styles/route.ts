import { NextResponse } from "next/server"
import { styles } from "@/data/styles"
import { eras } from "@/data/eras"
import { genres } from "@/data/genres"
import { instruments } from "@/data/instruments"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const era = searchParams.get("era")
  const genre = searchParams.get("genre")

  if (!era || !genre) {
    return NextResponse.json(
      { error: "era and genre are required" },
      { status: 400 }
    )
  }

  const style = styles.find(
    s => s.eraId === era && s.genreId === genre
  )

  if (!style) {
    return NextResponse.json(
      { error: "Style not found" },
      { status: 404 }
    )
  }

  const eraData = eras.find(e => e.id === era)
  const genreData = genres.find(g => g.id === genre)

  const enrichedInstruments = style.instruments.map(si => {
    const inst = instruments.find(i => i.id === si.instrumentId)
    return {
      name: inst?.name,
      family: inst?.family,
      prominence: si.prominence,
      productionNotes: si.productionNotes
    }
  })

  return NextResponse.json({
    era: eraData?.name,
    genre: genreData?.name,
    description: style.description,
    instruments: enrichedInstruments
  })
}
