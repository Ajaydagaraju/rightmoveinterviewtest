'use client';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { CiFilter, CiSearch } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md';

function SearchField({ placeholder = 'Search...' }) {
  const route = useRouter();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-white/90 rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600 shadow-sm">
        <input
          placeholder={placeholder}
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
      <button
        className="bg-white/90 w-10 h-10 rounded-xl grid place-items-center text-gray-700 shadow-sm"
        aria-label="Toggle dashboard view"
        onClick={() => route.push("/")}
      >
        <MdOutlineDashboard />
      </button>
    </div>
  );
}

export default memo(SearchField);