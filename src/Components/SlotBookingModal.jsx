'use client';
import { useState } from 'react';

const sessionData = [
  {
    period: 'Morning',
    slots: [
      { time: '08:00 AM', available: false },
      { time: '09:00 AM', available: false },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true },
    ],
  },
  {
    period: 'Afternoon',
    slots: [
      { time: '12:00 PM', available: true },
      { time: '01:00 PM', available: false },
      { time: '02:00 PM', available: true },
      { time: '03:00 PM', available: true },
    ],
  },
  {
    period: 'Evening',
    slots: [
      { time: '04:00 PM', available: true },
      { time: '05:00 PM', available: true },
      { time: '06:00 PM', available: false },
      { time: '07:00 PM', available: true },
    ],
  },
  {
    period: 'Night',
    slots: [
      { time: '08:00 PM', available: true },
      { time: '09:00 PM', available: true },
      { time: '10:00 PM', available: true },
      { time: '11:00 PM', available: false },
    ],
  },
];

export default function SlotBookingModal({ onClose }) {
  const [expanded, setExpanded] = useState(sessionData.map(() => true));
  const [selectedSlot, setSelectedSlot] = useState(null);

  const togglePeriod = (index) => {
    setExpanded((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  const confirmBooking = () => {
    if (!selectedSlot) return;
    alert('Appointment booked');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-baseline-last justify-center bg-black/40 ">
      <div className="bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl w-full max-w-sm overflow-hidden shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold">Select Session Time</h2>
          <button onClick={onClose} className="text-lg">✕</button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4">
          {sessionData.map((session, i) => (
            <div key={i}>
              <button
                className="flex items-center justify-between w-full font-medium text-gray-700"
                onClick={() => togglePeriod(i)}
              >
                {session.period}
                <span>{expanded[i] ? '⌄' : '›'}</span>
              </button>

              {expanded[i] && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {session.slots.map((slot, idx) => {
                    const isSelected = selectedSlot === slot.time;
                    return (
                      <button
                        key={idx}
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`px-2 py-1 text-xs rounded-lg border transition
                          ${
                            slot.available
                              ? isSelected
                                ? 'bg-red-100 border-red-400 text-red-500 font-semibold'
                                : 'border-red-300 text-red-400 hover:bg-red-50'
                              : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          }
                        `}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl text-red-500 font-medium bg-red-100"
          >
            Cancel
          </button>
          <button
            onClick={confirmBooking}
            disabled={!selectedSlot}
            className={`flex-1 py-2 rounded-xl font-medium ${
              selectedSlot
                ? 'bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
