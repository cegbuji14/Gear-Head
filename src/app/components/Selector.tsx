'use client';

import React, { useState } from 'react';

const eras = ['1960s', '1970s', '1980s', '1990s', '2000s'] as const;
const genres = ['rock', 'funk', 'rnb', 'hip_hop', 'pop', 'jazz'] as const;

type Era = typeof eras[number];
type Genre = typeof genres[number];

type InstrumentData = {
  instruments: string[];
  productionNotes: string;
};

export function Selector() {
  const [era, setEra] = useState<Era>('1960s');
  const [genre, setGenre] = useState<Genre>('rock');
  const [result, setResult] = useState<InstrumentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchInstruments() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/instruments?era=${era}&genre=${genre}`);
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || 'Error fetching data');
        setLoading(false);
        return;
      }
      const data: InstrumentData = await res.json();
      setResult(data);
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Select Era and Genre</h2>
      <label>
        Era:
        <select value={era} onChange={(e) => setEra(e.target.value as Era)} style={{ marginLeft: 8 }}>
          {eras.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </label>

      <br />
      <label style={{ marginTop: 12, display: 'block' }}>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value as Genre)} style={{ marginLeft: 8 }}>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>

      <br />
      <button onClick={fetchInstruments} disabled={loading} style={{ marginTop: 20 }}>
        {loading ? 'Loading...' : 'Get Instruments'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Instruments</h3>
          <ul>
            {result.instruments.map((inst) => (
              <li key={inst}>{inst}</li>
            ))}
          </ul>
          <h4>Production Notes</h4>
          <p>{result.productionNotes}</p>
        </div>
      )}
    </div>
  );
}
