'use client';
import { memo } from 'react';

function DatePicker({
  label = 'Session Date',
  value = '',
  onChange,
  min,
  disabled = false,
}) {
  return (
    <div>
      <label className="block text-lg text-gray-500 my-2">{label}</label>
      <div className="relative">
        <input
          type="date"
          className="w-full rounded-xl text-gray-500 bg-white border border-[#f0cbd6] pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#d7b0e9] focus:border-transparent placeholder:text-gray-400"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          min={min}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default memo(DatePicker);
