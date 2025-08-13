'use client';
import DoctorCard from '@/Components/DoctorCard';
import SearchField from '@/Components/SearchField';
import SlotBookingModal from '@/Components/SlotBookingModal';
import { useState } from 'react';

export default function DoctorsPage() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd] rounded-b-[32px] pb-8">
      <div className="card p-3 flex items-center justify-between sticky top-0 z-10 bg-white/70 backdrop-blur-md rounded-b-xl">
        <button className="text-xl">←</button>
        <p className="text-sm font-semibold">Available Doctors</p>
        <div className="flex items-center gap-3 text-xl">
          <button>⤴️</button>
          <button>⋯</button>
        </div>
      </div>

      <div className="mt-3 px-4">
        <SearchField placeholder="Search psychologists..." rightIcon="🔧" />
      </div>

      <div className="mt-4 space-y-3 px-4">
        <DoctorCard onBookNow={() => setShowBooking(true)} />
        <DoctorCard
          name="Dr. Priya Kapoor"
          phone="+91 98765 43210"
          specialty="IVF Specialist"
          gender="Female"
          onBookNow={() => setShowBooking(true)}
        />
        <DoctorCard
          name="Dr. Pranav Saxena"
          phone="+91 98765 43210"
          specialty="Gynaecology"
          gender="Male"
          onBookNow={() => setShowBooking(true)}
        />
        <DoctorCard
          name="Dr. Toshit Bagde"
          phone="+91 98765 543210"
          specialty="Psychologist"
          gender="Male"
          onBookNow={() => setShowBooking(true)}
        />
      </div>
      {showBooking && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40">
          <div className="w-full bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl shadow-xl animate-slideUp">
            <SlotBookingModal onClose={() => setShowBooking(false)} fullWidth />
          </div>
        </div>
      )}
    </div>
  );
}
