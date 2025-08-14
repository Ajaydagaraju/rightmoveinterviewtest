'use client';
import { memo, useCallback, useState } from 'react';
import { IoChevronDown, IoChevronUpOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import Button from './Button';
import { sessionData } from '@/utils/utils';

function SlotBookingModal({ onClose, fullWidth }) {
  const [expanded, setExpanded] = useState(sessionData.map(() => true));
  const [selectedSlot, setSelectedSlot] = useState(null);

  const togglePeriod = useCallback((index) => {
    setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }, []);

  const handleSlotSelect = useCallback((time) => {
    setSelectedSlot(time);
  }, []);

  const confirmBooking = useCallback(() => {
    if (!selectedSlot) return;
    alert('Appointment booked');
    onClose();
  }, [selectedSlot, onClose]);

  return (
    <div className={`fixed inset-0 z-50 flex items-end justify-center bg-black/40 ${fullWidth ? 'w-full' : ''}`}>
      <div className="bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl w-full max-w-full overflow-hidden shadow-lg">
        <div className="flex items-center justify-between py-5 px-4 border-b border-gray-200 bg-white text-gray-800">
          <div></div>
          <h2 className="text-lg font-medium ">Select Session Time</h2>
          <button onClick={onClose} aria-label="Close" className="text-lg">
            <MdClose />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4">
          {sessionData.map((session, i) => (
            <div key={session.period} className="bg-white p-4 rounded-lg">
              <button
                className="flex items-center justify-between w-full text-gray-700 text-md"
                onClick={() => togglePeriod(i)}
                aria-expanded={expanded[i]}
              >
                {session.period}
                <IoChevronDown
                  className={`transition-transform ${expanded[i] ? 'rotate-180' : ''}`}
                />
              </button>

              {expanded[i] && (
                <div className="grid grid-cols-4 gap-2 my-4">
                  {session.slots.map((slot) => {
                    const isSelected = selectedSlot === slot.time;
                    return (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => handleSlotSelect(slot.time)}
                        className={`px-4 py-3 text-xs rounded-lg border transition-colors ${
                          slot.available
                            ? isSelected
                              ? 'border-red-400 text-red-500 font-semibold'
                              : 'border-red-300 text-red-400 hover:bg-red-50'
                            : 'text-red-200 border-red-200 cursor-not-allowed'
                        }`}
                        aria-label={`Select ${slot.time} slot`}
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

        <div className="flex gap-3 w-full p-4 justify-center border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl px-6 py-4 text-red-400 border border-red-200"
            aria-label="Cancel booking"
          >
            Cancel
          </button>
          <Button
            onClick={confirmBooking}
            text="Confirm"
            disabled={!selectedSlot}
            classes={`flex-1 w-1/2 rounded-xl font-medium ${
              selectedSlot
                ? 'bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(SlotBookingModal);