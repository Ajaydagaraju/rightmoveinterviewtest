'use client';
import DoctorCard from '@/Components/DoctorCard';
import SearchField from '@/Components/SearchField';
import SlotBookingModal from '@/Components/SlotBookingModal';
import { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoChevronBackCircleOutline, IoChevronBackOutline } from 'react-icons/io5';

export default function DoctorsPage() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd] pb-8">
      <div className="card p-4 flex text-lg content-center gap-2 items-center h-[100px] sticky top-0 z-10 text-gray-800 bg-white/90 backdrop-blur-md">
        <IoChevronBackOutline/>
        <p>Available Doctors</p>
      </div>

      <div className="mt-3 px-4">
        <SearchField placeholder="Search psychologists..." />
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
