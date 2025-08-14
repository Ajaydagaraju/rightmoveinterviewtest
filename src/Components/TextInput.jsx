'use client';

export default function TextInput({
  label,
  placeholder = '',
  value,
  onChange,
  textarea = false,
  disabled = false,
  rows = 4,
  className = '',
}) {
  return (
    <div className={className}>
      <div className="relative">
        {textarea ? (
          <>
            {label && <label className="block text-lg text-gray-500 my-2">Session Details (Optional)</label>}
            <textarea
              className="w-full rounded-xl bg-white border border-[#f0cbd6] text-gray-500 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#d7b0e9] focus:border-transparent placeholder:text-gray-400"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              rows={rows}
              disabled={disabled}
            />
          </>
        ) : (
          <>
             <label className="block text-lg text-gray-500 my-2">Online Session Link</label>
            <input
              type="text"
              className="w-full rounded-xl bg-white border border-[#f0cbd6] text-gray-500 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#d7b0e9] focus:border-transparent placeholder:text-gray-400"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={disabled}
            />
          </>
        )}
      </div>
    </div>
  );
}
