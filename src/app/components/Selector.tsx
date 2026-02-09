'use client';

import React, { useState } from 'react';
import { instrumentById } from '@/data/instruments';
import { Instrument } from '@/types/music';

const eras = ['1960s', '1970s', '1980s', '1990s', '2000s'] as const;
const genres = ['rock', 'funk', 'rnb', 'hip_hop', 'pop', 'jazz'] as const;

type Era = typeof eras[number];
type Genre = typeof genres[number];

type ApiResponse = {
  instruments: string[];
  productionNotes: string;
};

export function Selector() {
  const [era, setEra] = useState<Era>('1960s');
  const [genre, setGenre] = useState<Genre>('rock');
  const [result, setResult] = useState<ApiResponse | null>(null);
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
      const data: ApiResponse = await res.json();
      setResult(data);
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  // Component to show each instrument with roles and types
  function InstrumentItem({ instrumentId }: { instrumentId: string }) {
    const instrument: Instrument | undefined = instrumentById[instrumentId];
    const [isOpen, setIsOpen] = useState(false);

    if (!instrument) {
      return <li style={{ color: 'red' }}>{instrumentId} (instrument not found)</li>;
    }

    return (
      <li style={{ marginBottom: 10 }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: instrument.types && instrument.types.length > 0 ? 'pointer' : 'default', fontWeight: 'bold' }}
          tabIndex={instrument.types && instrument.types.length > 0 ? 0 : -1}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && instrument.types && instrument.types.length > 0) {
              setIsOpen(!isOpen);
            }
          }}
          aria-expanded={isOpen}
          aria-controls={`${instrument.id}-types-list`}
        >
          {instrument.name}{' '}
          {instrument.roles && instrument.roles.length > 0 && (
            <span style={{ fontWeight: 'normal', fontSize: 12, color: 'white', marginLeft: 8 }}>
              Roles: {instrument.roles.join(', ')}
            </span>
          )}
          {instrument.types && instrument.types.length > 0 && (
            <span style={{ marginLeft: 6, userSelect: 'none' }}>{isOpen ? '▲' : '▼'}</span>
          )}
        </div>

        {isOpen && instrument.types && instrument.types.length > 0 && (
          <ul
            id={`${instrument.id}-types-list`}
            style={{ marginLeft: 20, marginTop: 6, fontSize: 12, color: 'white' }}
          >
            {instrument.types.map((type) => (
              <li key={type.id}>{type.name}</li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, color: 'white' }}>
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

      <button
        onClick={fetchInstruments}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: '8px 16px',
          border: '2px solid #222',
          backgroundColor: loading ? '#ddd' : 'transparent',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
        }}
      >
        {loading ? 'Loading...' : 'Get Instruments'}
      </button>

      {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 24 }}>
          <h3>Instruments</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {result.instruments.map((instrumentId) => (
              <InstrumentItem key={instrumentId} instrumentId={instrumentId} />
            ))}
          </ul>

          <h4>Production Notes</h4>
          <p>{result.productionNotes}</p>
        </div>
      )}
    </div>
  );
}
