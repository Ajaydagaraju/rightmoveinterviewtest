'use client';
import Button from '@/Components/Button';
import DatePicker from '@/Components/DatePicker';
import PatientCard from '@/Components/PatientCard';
import PractitionerCard from '@/Components/PractitionerCard';
import RadioGroup from '@/Components/RadioGroups';
import SelectField from '@/Components/SelectField';
import SlotBookingModal from '@/Components/SlotBookingModal';
import TextInput from '@/Components/TextInput';
import TimePicker from '@/Components/TimePicker';
import { useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

export default function ScheduleSessionPage() {
  const [sessionType, setSessionType] = useState('Counselling');
  const [sessionMode, setSessionMode] = useState('Online');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const toggleBooking = useCallback(() => setShowBooking((prev) => !prev), []);

  const handleSessionTypeChange = useCallback((e) => setSessionType(e.target.value), []);
  const handleSessionModeChange = useCallback(setSessionMode, []);
  const handleSessionDateChange = useCallback(setSessionDate, []);
  const handleSessionTimeChange = useCallback(setSessionTime, []);

  useEffect(() => {
    if (sessionDate) {
      setShowBooking(true)
    } else {

    }
  }, [sessionDate])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd]">
      <div className="card p-4 flex text-lg content-center gap-2 items-center h-[100px] sticky top-0 z-10 text-gray-800 bg-white/90 backdrop-blur-md">
        <IoChevronBackOutline />
        <p>Schedule Session</p>
      </div>
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        <PatientCard name="Shubham Naik" phone="+91 9876543210" />
        <PractitionerCard name="Saria Dilon" phone="+91 9876543210" />
        <SelectField
          label="Session Type"
          value={sessionType}
          options={['Counselling (1 hour)', 'Therapy (30 min)']}
          onChange={handleSessionTypeChange}
        />

        <RadioGroup
          label="Session Mode"
          options={['In-Person', 'Online']}
          selected={sessionMode}
          onChange={handleSessionModeChange}
        />

        <div className="grid grid-cols-2 gap-5">
          <DatePicker value={sessionDate} onChange={handleSessionDateChange} />
          <TimePicker value={sessionTime} onChange={handleSessionTimeChange} />
        </div>

        {sessionMode === 'Online' && (
          <TextInput placeholder="Add Online Session Link or WhatsApp Number" label="Session Details (Optional)" label1="Online Session Link" />
        )}

        <TextInput placeholder="Enter session details here" textarea label="Session Details (Optional)" />
      </div>

      <div className="flex gap-3 w-full p-4 justify-center border-t text-center border-gray-200">
        <button
          className="flex-1 rounded-xl px-6 py-4 w-1/2 text-red-400 border border-red-200"
        >
          Cancel
        </button>
        <Button
          text="Confirm"
          disabled={!selectedSlot}
          classes={`flex-1 w-1/2 rounded-xl font-medium ${selectedSlot
              ? 'bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
        />
      </div>
       {showBooking && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40">
          <div className="w-full bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl shadow-xl transition-transform duration-300">
            <SlotBookingModal onClose={toggleBooking} fullWidth />
          </div>
        </div>
      )}
    </div>
  );
}