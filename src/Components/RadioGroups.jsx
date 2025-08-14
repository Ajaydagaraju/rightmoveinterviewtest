'use client';
import { memo } from 'react';

function RadioGroup({ label, options, selected, onChange }) {
  return (
    <div>
      <label className="block my-2 text-lg text-gray-500">{label}</label>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-lg text-gray-800">
            <input
              type="radio"
              name={label}
              value={opt}
              checked={selected === opt}
              onChange={() => onChange(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

export default memo(RadioGroup);