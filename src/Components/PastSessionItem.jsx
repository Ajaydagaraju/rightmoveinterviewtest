export default function PastSessionItem({ time, doctor, date }) {
  return (
    <div className="card p-3">
      <div className="flex items-center gap-3">
        <div className="text-left min-w-[68px]">
          <p className="font-semibold">{time}</p>
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{doctor}</p>
          <p className="text-[11px] text-gray-500">Previous Session:</p>
          <p className="text-[11px] text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
