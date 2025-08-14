'use client';
import { memo } from 'react';

function PastSessionItem({ time, doctor, date }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-left min-w-[68px]">
          <p className="font-semibold text-gray-700">{time}</p>
        </div>
        <div className="border border-gray-300 h-10" />
        <div className="flex-1">
          <p className="font-medium text-sm text-gray-500">{doctor}</p>
          <p className="text-[11px] text-gray-400">Previous Session:</p>
          <p className="text-[11px] text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(PastSessionItem);