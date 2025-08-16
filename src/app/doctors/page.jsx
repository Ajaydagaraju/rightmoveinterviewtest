'use client';
import DoctorCard from '@/Components/DoctorCard';
import SearchField from '@/Components/SearchField';
import SlotBookingModal from '@/Components/SlotBookingModal';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

export default function DoctorsPage() {
  const route = useRouter();
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleBooking = useCallback(() => setShowBooking((prev) => !prev), []);

  const handleBookNow = () => {
    route.push('/add-patient');
  };

  const handleToggleCard = useCallback((index) => {
    setOpenCardIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd] pb-8">
      <header className="p-4 flex items-center gap-2 h-24 sticky top-0 z-10 text-gray-800 bg-white/90 backdrop-blur-md">
        <IoChevronBackOutline aria-label="Back" />
        <h1 className="text-lg font-medium">Available Doctors</h1>
      </header>

      <div className="mt-3 px-4">
        <SearchField placeholder="Search psychologists..." />
      </div>

      <div className="mt-4 space-y-3 px-4">
        {[
          { name: 'Dr. Tejas Sharma', phone: '+91 98765 43210', specialty: 'Gynaecology', gender: 'Male' },
          { name: 'Dr. Priya Kapoor', phone: '+91 98765 43210', specialty: 'IVF Specialist', gender: 'Female' },
          { name: 'Dr. Pranav Saxena', phone: '+91 98765 43210', specialty: 'Gynaecology', gender: 'Male' },
          { name: 'Dr. Toshit Bagde', phone: '+91 98765 543210', specialty: 'Psychologist', gender: 'Male' },
        ].map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            phone={doctor.phone}
            specialty={doctor.specialty}
            gender={doctor.gender}
            fee="₹1,500/-"
            isOpen={openCardIndex === index}
            onToggle={() => handleToggleCard(index)}
            onBookNow={handleBookNow}
          />
        ))}
      </div>

      {/* {showBooking && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40">
          <div className="w-full bg-gradient-to-b from-[#f4ecf9] to-[#fde8eb] rounded-t-3xl shadow-xl transition-transform duration-300">
            <SlotBookingModal onClose={toggleBooking} fullWidth />
          </div>
        </div>
      )} */}
    </div>
  );
}