export default function SearchField({ placeholder = 'Search...', rightIcon = '⚗️' }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 glass rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600">
        <span>🔍</span>
        <input
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
        />
      </div>
      <button className="glass w-10 h-10 rounded-xl grid place-items-center text-gray-700">
        {rightIcon}
      </button>
    </div>
  );
}
