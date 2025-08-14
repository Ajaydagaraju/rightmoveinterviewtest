'use client';

import Image from "next/image";
import { CiSearch, CiFilter } from "react-icons/ci";
export default function HeaderGreeting({ name = 'Manjunath Naik' }) {
  return (
    <div className="rounded-b-3xl p-4 pt-6 text-white shadow-lg bg-gradient-to-r from-[#9f8cf9] via-[#d5b3f3] to-[#f9c3c6]">
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">Good morning,</p>
          <h1 className="text-xl font-semibold -mt-0.5">{name}</h1>
        </div>
        <Image src={'/dummygirlprofileimage.jpg'} alt="" width={40} height={40} className="rounded-full" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 glass rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600">
          <input
            placeholder="Search Psychologists..."
            className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
          />
          <span><CiSearch/> </span>
        </div>
        <button className="glass w-10 h-10 rounded-xl grid place-items-center text-gray-700">
          <CiFilter/>
        </button>
      </div>
    </div>
  );
}
