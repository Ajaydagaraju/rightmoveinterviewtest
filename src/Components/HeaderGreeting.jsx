'use client';

export default function HeaderGreeting({ name = 'Manjunath Naik' }) {
  return (
    <div className="rounded-3xl p-4 pt-6 text-white shadow-lg bg-gradient-to-br from-[#9f8cf9] via-[#d5b3f3] to-[#f9c3c6]">
      <div className="flex items-center justify-between">
        <div className="text-[10px] opacity-90">9:41</div>
        <div className="w-24 h-4 bg-black/15 rounded-full" />
        <div className="flex gap-1 text-[10px] opacity-90">
          <span>📶</span><span>📡</span><span>🔋</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">Good morning,</p>
          <h1 className="text-xl font-semibold -mt-0.5">{name}</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/70 ring-2 ring-white/50 overflow-hidden" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 glass rounded-xl px-3 py-2 flex items-center gap-2 text-gray-600">
          <span>🔍</span>
          <input
            placeholder="Search Psychologists..."
            className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm"
          />
        </div>
        <button className="glass w-10 h-10 rounded-xl grid place-items-center text-gray-700">
          ⚙️
        </button>
      </div>
    </div>
  );
}
