'use client';
import Image from 'next/image';
import { CiSearch, CiFilter } from 'react-icons/ci';
import { memo, useState } from 'react';

function HeaderGreeting({ name = 'Manjunath Naik' }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="rounded-b-3xl p-4 pt-6 text-white shadow-lg bg-gradient-to-r from-[#9f8cf9] via-[#d5b3f3] to-[#f9c3c6]">
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">Good morning,</p>
          <h1 className="text-xl font-semibold -mt-0.5">{name}</h1>
        </div>
        <Image
          src="/dummygirlprofileimage.jpg"
          alt={`${name} profile`}
          width={40}
          height={40}
          className="rounded-full"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 bg-white/90 rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600 shadow-sm">
          <input
            placeholder="Search Psychologists..."
            className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search psychologists"
          />
          <span aria-hidden="true">
            <CiSearch />
          </span>
        </div>
        <button
          className="bg-white/90 w-10 h-10 rounded-xl grid place-items-center text-gray-700 shadow-sm"
          aria-label="Filter results"
        >
          <CiFilter />
        </button>
      </div>
    </header>
  );
}

export default memo(HeaderGreeting);