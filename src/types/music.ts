export type Era = {
    id: string
    name: string
    startYear: number
    endYear: number
  }
  
  export type Genre = {
    id: string
    name: string
  }
  
  export type Instrument = {
    id: string
    name: string
    family: string
  }
  
  export type StyleInstrument = {
    instrumentId: string
    prominence: "primary" | "secondary"
    productionNotes: string
  }
  
  export type EraGenreStyle = {
    id: string
    eraId: string
    genreId: string
    description: string
    instruments: StyleInstrument[]
  }
  