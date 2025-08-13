export default function UpcomingSessionCard() {
  return (
    <div className="card p-3">
      <div className="flex items-start gap-3">
        <div className="text-left min-w-[68px]">
          <p className="text-lg font-semibold leading-5">11:00 AM</p>
          <p className="text-xs text-gray-500">Bandra</p>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gray-200" />
              <p className="font-semibold text-sm">Dr. Kiran Rathi</p>
            </div>
            <button className="text-gray-400">⌄</button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-xs text-gray-500">Session Duration</p>
              <p className="text-xs font-medium">01:00 HR</p>
              <p className="text-xs text-gray-500 mt-1">Session Mode: <span className="font-medium">Online</span></p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <p className="text-xs text-gray-500">Previous Session</p>
              <p className="text-xs font-medium">Tuesday, March 5, 2023</p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[#9e8cf8]">
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
