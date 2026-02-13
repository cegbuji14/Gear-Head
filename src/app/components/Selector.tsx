'use client';

import React, { useState } from 'react';
import { instrumentById } from '@/data/instruments';
import { Instrument } from '@/types/music';
import { genres } from '@/data/genres';

const eras = ['1960s', '1970s', '1980s', '1990s', '2000s'] as const;
type Era = typeof eras[number];
type Genre = typeof genres[number]['id'];

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

  function InstrumentItem({ instrumentId }: { instrumentId: string }) {
    const instrument: Instrument | undefined = instrumentById[instrumentId];
    const [isOpen, setIsOpen] = useState(false);

    if (!instrument) {
      return <li className="text-error mb-2">{instrumentId} (instrument not found)</li>;
    }

    return (
      <li className="mb-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex justify-between items-center font-bold cursor-${instrument.types?.length ? 'pointer' : 'default'}`}
          tabIndex={instrument.types?.length ? 0 : -1}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && instrument.types?.length) {
              setIsOpen(!isOpen);
            }
          }}
          aria-expanded={isOpen}
          aria-controls={`${instrument.id}-types-list`}
        >
          <span>{instrument.name}</span>
          {instrument.roles && (
            <span className="text-secondary text-sm font-normal ml-2">
              Roles: {instrument.roles.join(', ')}
            </span>
          )}
          {instrument.types?.length && <span className="ml-2 select-none">{isOpen ? '▲' : '▼'}</span>}
        </div>

        {isOpen && instrument.types?.length && (
          <ul id={`${instrument.id}-types-list`} className="ml-5 mt-1 text-sm text-secondary list-disc">
            {instrument.types.map((type) => (
              <li key={type.id}>{type.name}</li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 text-fg">
      <h2 className="text-2xl font-semibold mb-4">Select Era and Genre</h2>

      <label className="block mb-2">
        Era:
        <select
          value={era}
          onChange={(e) => setEra(e.target.value as Era)}
          className="ml-2 p-2 rounded border border-secondary bg-bg text-fg"
        >
          {eras.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-4 mb-2">
        Genre:
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="ml-2 p-2 rounded border border-secondary bg-bg text-fg"
        >
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={fetchInstruments}
        disabled={loading}
        className="mt-4 py-2 px-4 font-bold rounded-lg border-2 border-accent bg-accent text-bg hover:bg-accent-hover disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Get Instruments'}
      </button>

      {error && <p className="text-error mt-3">{error}</p>}

      {result && (
        <div className="mt-6">
          <ul className="list-none p-0">
            {result.instruments.map((instrumentId) => (
              <InstrumentItem key={instrumentId} instrumentId={instrumentId} />
            ))}
          </ul>

          <h4 className="mt-4 font-semibold">Production Notes</h4>
          <p className="text-secondary">{result.productionNotes}</p>
        </div>
      )}
    </div>
  );
}
