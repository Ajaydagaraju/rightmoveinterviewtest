import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function SelectField({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      {label && <label className="block my-2 text-lg text-gray-500">{label}</label>}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-3 py-3 text-gray-800 text-lg rounded-xl bg-white cursor-pointer"
      >
        <span>{value || "Select an option"}</span>
        <IoChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-xl text-gray-800 text-lg shadow-lg border border-[#f0cbd6] max-h-48 overflow-y-auto">
          {options.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange({ target: { value: opt } });
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer text-sm hover:bg-[#f8ebf1] ${
                value === opt ? "bg-[#f0d9e6] font-medium" : ""
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
