'use client';

export default function DatePicker({
  label = 'Session Date',
  value = '',
  onChange,
  min,
  disabled = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type="date"
          className="w-full rounded-xl bg-white border border-[#f0cbd6] pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#d7b0e9] focus:border-transparent placeholder:text-gray-400"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          min={min}
          disabled={disabled}
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#888" />
            <path d="M8 3v4M16 3v4M3 9h18" stroke="#888" />
          </svg>
        </span>
      </div>
    </div>
  );
}
