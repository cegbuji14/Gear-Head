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
    roles?: string []//option to give instrument a role like rhythm/lead
    types?: InstrumentType[]//optional array of specific types of instrument like Les Paul or Jaguars
  }
  export interface InstrumentType {
    id: string;
    name: string;
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
  