import { CiFilter, CiSearch } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";

export default function SearchField({ placeholder = 'Search...', }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 glass rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600">
        <input
          placeholder="Search Psychologists..."
          className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
        />
        <span><CiSearch /> </span>
      </div>
      <button className="glass w-10 h-10 rounded-xl grid place-items-center text-gray-700">
        <CiFilter />
      </button>
      <button className="glass w-10 h-10 rounded-xl grid place-items-center text-gray-700">
        <MdOutlineDashboard />
      </button>
    </div>
  );
}
