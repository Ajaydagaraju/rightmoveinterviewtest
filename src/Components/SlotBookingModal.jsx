'use client';
import { useState } from 'react';
import { IoChevronDown, IoChevronUpOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import Button from './Button';

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
      <div className="bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl w-full max-w-full overflow-hidden shadow-lg">
        <div className="flex items-center text-gray-800 justify-between py-5 px-4 border-b mb-5 border-gray-200 bg-white">
          <div></div>
          <h2 className="text-lg">Select Session Time</h2>
          <button onClick={onClose} className="text-lg"> <MdClose /> </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4">
          {sessionData.map((session, i) => (
            <div key={i} className='bg-white p-4 rounded' >
              <button
                className="flex items-center justify-between w-full text-gray-700 text-md"
                onClick={() => togglePeriod(i)}
              >
                {session.period}
                <IoChevronDown
                  className={`transition-transform ${expanded[i] ? "rotate-180" : ""}`} />
              </button>

              {expanded[i] && (
                <div className="grid grid-cols-4 gap-2 my-4">
                  {session.slots.map((slot, idx) => {
                    const isSelected = selectedSlot === slot.time;
                    return (
                      <button
                        key={idx}
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`px-4 py-3 text-xs rounded-lg border transition
                          ${slot.available
                            ? isSelected
                              ? ' border-red-400 text-red-500 font-semibold'
                              : 'border-red-300 text-red-400 hover:bg-red-50'
                            : ' text-red-200 border-red-200 cursor-not-allowed'
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

        <div className="flex gap-3 w-full p-4 justify-center border-t text-center border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl px-6 py-4 w-1/2  text-red-400 border border-red-200"
          >
            Cancel
          </button>
          <Button onClick={confirmBooking}
            text='Confirm'
            disabled={!selectedSlot}

            classes={`flex-1 w-1/2 rounded-xl font-medium ${selectedSlot
                ? 'bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`} />
        </div>
      </div>
    </div>
  );
}
