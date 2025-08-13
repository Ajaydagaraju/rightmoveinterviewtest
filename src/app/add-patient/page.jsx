'use client';
import DatePicker from '@/Components/DatePicker';
import FooterButtons from '@/Components/FooterButton';
import HeaderBar from '@/Components/HeaderBar';
import PatientCard from '@/Components/PatientCard';
import PractitionerCard from '@/Components/PractitionerCard';
import RadioGroup from '@/Components/RadioGroups';
import SelectField from '@/Components/SelectField';
import TextInput from '@/Components/TextInput';
import TimePicker from '@/Components/TimePicker';
import { useState } from 'react';

export default function ScheduleSessionPage() {
  const [sessionType, setSessionType] = useState('Counselling');
  const [sessionMode, setSessionMode] = useState('Online');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd]">
      <HeaderBar title="Schedule Session" />

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <PatientCard name="Shubham Naik" phone="+91 9876543210" />
        <PractitionerCard name="Saria Dilon" phone="+91 9876543210" />

        <SelectField
          label="Session Type"
          value={sessionType}
          options={['Counselling (1 hour)', 'Therapy (30 min)']}
          onChange={(e) => setSessionType(e.target.value)}
        />

        <RadioGroup
          label="Session Mode"
          options={['In-Person', 'Online']}
          selected={sessionMode}
          onChange={setSessionMode}
        />

        <div className="grid grid-cols-2 gap-3">
          <DatePicker value={sessionDate} onChange={setSessionDate} />
          <TimePicker value={sessionTime} onChange={setSessionTime} />
        </div>

        {sessionMode === 'Online' && (
          <TextInput placeholder="Add Online Session Link or WhatsApp Number" />
        )}

        <TextInput placeholder="Enter session details here" textarea />
      </div>

      <FooterButtons onCancel={() => alert('Cancelled')} onConfirm={() => alert('Confirmed')} />
    </div>
  );
}
