import { NextRequest, NextResponse } from 'next/server';

type InstrumentData = {
  instruments: string[];
  productionNotes: string;
};

const sampleData: Record<string, Record<string, InstrumentData>> = {
    
    '1960s': {
        rock: {
            instruments: ['electric_guitar', 'bass_guitar', 'drums', 'vocals', 'hammond_organ'],
            productionNotes: 'Live recordings, warm analog tones, simple drum kits, and vintage guitar amps.',
        },
        funk: {
            instruments: ['bass_guitar', 'electric_guitar', 'drums', 'horn_section', 'piano', 'clavinet'],
            productionNotes: 'Emphasis on groovy basslines, funky percussion often in the form of guitar, and tight horn arrangements.',
        },
        rnb: {
            instruments: ['bass_guitar', 'electric_guitar', 'drums', 'horn_section', 'piano', 'hammond_organ', 'vocals'],
            productionNotes: 'Polished, soulful vocals and driving rhythms with lush, often raw, analog instrumentation.',
        },
        pop: {
            instruments: ['electric_guitar', 'bass_guitar', 'drums', 'vocals', 'hammond_organ'],
            productionNotes: 'Warm analog tape, compressed, vocal-forward mixes, and creative, often dense, layering of orchestral, studio-driven, and rock-based instrumentation.',
        },
        jazz: {
            instruments: ['electric_guitar', 'upright_bass', 'drums', 'vocals', 'piano', 'saxophone', 'trumpet'],
            productionNotes: 'The 1960s was a revolutionary era of jazz defined by a push toward free improvisation, avant-garde experimentation, and intense emotional expression, with influential, complex styles ranging from hard-bop to the early emergence of fusion.',
        },
    // Add other genres as needed
  },

  '1970s': {
    rock: {
        instruments: ['electric_guitar', 'bass_guitar', 'drums', 'synthesizers', 'hammond_organ'],
        productionNotes: '70s rock refined earlier experimental tones into powerful, controlled sounds with greater studio precision and groove.',
    },
    funk: {
        instruments: ['bass_guitar', 'electric_guitar', 'drums', 'horn_section', 'piano', 'clavinet', 'synthesizers'],
        productionNotes: 'Rhythmic, bass-heavy grooves that prioritizes 16th-note syncopation, "on the one" downbeats, and dense instrumentation',
    },
    rnb: {
        instruments: ['bass_guitar', 'electric_guitar', 'drums', 'horn_section', 'piano', 'hammond_organ', 'vocals', 'synthesizers'],
        productionNotes: 'Rich fusion of soulful vocals, funk-driven rhythms, and sophisticated, live instrumentation, marking a transition from 60s Motown to more experimental sounds.',
    },
    pop: {
        instruments: ['electric_guitar', 'bass_guitar', 'drums', 'vocals', 'hammond_organ', 'synthesizers'],
        productionNotes: 'Warm, organic sound achieved through multitrack tape recording, featuring tight, dry studio performances with natural room ambiance, minimal compression, and pioneering analog synth textures.',
    },
    jazz: {
        instruments: ['electric_guitar', 'upright_bass', 'drums', 'piano', 'trumpet'],
        productionNotes: '70s jazz blended acoustic roots with electric fusion, complex rhythms, and exploratory improvisation.',
    },
    hip_hop: {
      instruments: ['drums', 'bass_guitar', 'vocals', 'turntable'],
      productionNotes: 'DJs, using two turntables to loop funk/disco drum breaks, created live, rhythmic sound collages.',
    },
// Add other genres as needed
},

'1980s': {
  rock: {
      instruments: ['electric_guitar', 'bass_guitar', 'drums', 'synthesizers'],
      productionNotes: 'Anthemic arena rock, neon glam metal, synthesized new wave, big hair, and electrifying, shredding guitar solos.',
  },
  funk: {
      instruments: ['bass_guitar', 'electric_guitar', 'drums', 'piano', 'clavinet', 'synthesizers'],
      productionNotes: 'Synth-heavy, electric grooves with polished production, blending boogie, dance-pop, and futuristic, high-energy, infectious bass-driven funk.',
  },
  rnb: {
      instruments: ['bass_guitar', 'electric_guitar', 'drums', 'saxophone', 'piano', 'vocals', 'synthesizers'],
      productionNotes: 'Smooth, electronic-driven soul blending funk and pop, featuring heavy synthesizers, drum machines, and polished vocals.',
  },
  pop: {
      instruments: ['bass_guitar', 'drums', 'vocals', 'saxophone', 'synthesizers'],
      productionNotes: 'Synth-heavy, gated reverb, drum machines, polished, melodic, and high-energy dance-pop with pioneering digital sampling and effects. ',
  },
  jazz: {
      instruments: ['electric_guitar', 'bass_guitar', 'drums', 'piano', 'trumpet', 'saxophone', 'synthesizers'],
      productionNotes: '70s jazz blended acoustic roots with electric fusion, complex rhythms, and exploratory improvisation.',
  },
  hip_hop: {
    instruments: ['drums', 'bass_guitar', 'vocals', 'turntable', 'synthesizers'],
    productionNotes: 'Raw, sampler-driven, 808-heavy, with gritty, minimalist, funk-infused beats, cutting-edge sampling techniques, and boom-bap rhythm. ',
  },
// Add other genres as needed
},

'1990s': {
  rock: {
      instruments: ['electric_guitar', 'bass_guitar', 'drums', 'synthesizers'],
      productionNotes: 'Gritty, distortion-heavy, analog-driven, blending punk energy with alternative, grunge, and indie, often featuring raw, emotional vocals.',
  },
  funk: {
      instruments: ['bass_guitar', 'electric_guitar', 'drums', 'piano', 'clavinet', 'synthesizers'],
      productionNotes: 'Slow-tempo, bass-heavy G-funk featuring synthesizers, live instrumentation, and minimal, smooth samples.',
  },
  rnb: {
      instruments: ['bass_guitar', 'drums', 'piano', 'vocals', 'synthesizers'],
      productionNotes: 'Smooth, layered harmonies blended with gritty hip-hop beats, deep emotional vocals, and lush, romantic synth textures.',
  },
  pop: {
      instruments: ['bass_guitar', 'drums', 'vocals', 'synthesizers'],
      productionNotes: 'Glossy, upbeat dance-pop featuring polished vocals, heavy sampling, synth hooks, and early digital-analog fusion. ',
  },
  jazz: {
      instruments: ['electric_guitar', 'upright_bass', 'bass_guitar', 'drums', 'piano', 'trumpet', 'saxophone', 'synthesizers'],
      productionNotes: 'Clean, dynamic, digital-influenced sound blending smooth fusion, acid jazz, and traditional styles with high-tech production.',
  },
  hip_hop: {
    instruments: ['drums', 'bass_guitar', 'vocals', 'turntable', 'synthesizers'],
    productionNotes: 'Raw, gritty, boom-bap beats driven by SP-1200 sampling, dusty loops, soulful chops, and MPC sequencing.',
  },
// Add other genres as needed
},

'2000s': {
  rock: {
      instruments: ['electric_guitar', 'bass_guitar', 'drums', 'synthesizers', 'vocals', 'piano'],
      productionNotes: 'Polished, compressed, high-gain, and digitally-mixed, blending angsty garage/nu-metal with polished radio-ready hooks and heavyPro Tools editing.',
  },
  rnb: {
      instruments: ['electric_guitar', 'drums', 'piano', 'vocals', 'synthesizers'],
      productionNotes: 'Early 2000s R&B production featured smooth, polished, synth-heavy, mid-tempo tracks, blending hip-hop beats with soulful, melismatic vocals.',
  },
  pop: {
      instruments: ['electric_guitar', 'bass_guitar', 'drums', 'vocals', 'synthesizers', 'piano'],
      productionNotes: 'Polished, Max Martin-driven, digital sheen with heavy compression, Auto-Tune, synth hooks, R&B/hip-hop beats, and immense,layered vocal stacks. ',
  },
  jazz: {
      instruments: ['electric_guitar', 'upright_bass', 'bass_guitar', 'drums', 'piano', 'trumpet', 'saxophone', 'synthesizers'],
      productionNotes: 'Eclectic, experimental fusion blending acoustic, electronic, pop-rock, and hip-hop influences with post-bop traditions.',
  },
  hip_hop: {
    instruments: ['drums', 'vocals', 'turntable', 'synthesizers'],
    productionNotes: 'Raw, gritty, boom-bap beats driven by SP-1200 sampling, dusty loops, soulful chops, and MPC sequencing.',
  },
// Add other genres as needed
}
// Add other eras as needed
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const era = searchParams.get('era');
  const genre = searchParams.get('genre');

  if (!era || !genre) {
    return NextResponse.json({ error: 'Missing era or genre' }, { status: 400 });
  }

  const eraData = sampleData[era];
  if (!eraData) {
    return NextResponse.json({ error: 'Era not found' }, { status: 404 });
  }

  const genreData = eraData[genre];
  if (!genreData) {
    return NextResponse.json({ error: 'Genre not found for this era' }, { status: 404 });
  }

  return NextResponse.json(genreData);
}
