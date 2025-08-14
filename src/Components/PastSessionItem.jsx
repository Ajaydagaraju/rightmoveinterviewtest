export default function PastSessionItem({ time, doctor, date }) {
  return (
    <div className="card p-3">
      <div className="flex items-center gap-3">
        <div className="text-left min-w-[68px]">
          <p className="font-semibold text-gray-700">{time}</p>
        </div>
        <div className="border border-gray-300 h-[40px]" />
        
        <div className="flex-1">
          <p className="font-medium text-sm text-gray-500">{doctor}</p>
          <p className="text-[11px] text-gray-400">Previous Session:</p>
          <p className="text-[11px] text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}
