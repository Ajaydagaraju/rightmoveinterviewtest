'use client';
import { useState } from 'react';

export default function DoctorCard({
  name = 'Dr. Tejas Sharma',
  phone = '+91 98765 43210',
  specialty = 'Gynaecology',
  gender = 'Male',
  fee = '₹1,500/-',
  onBookNow={onBookNow}
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="card p-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-[11px] text-gray-500">{phone}</p>
          </div>
        </div>
        <span className="text-gray-500">{open ? '⌃' : '⌄'}</span>
      </button>

      {open && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Expertise</p>
              <p className="font-medium">{specialty}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Gender</p>
              <p className="font-medium">{gender}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Session mode</p>
              <p className="font-medium">In-Person & Online</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Session Fee</p>
              <p className="font-medium">{fee}</p>
            </div>
          </div>

          <button className="mt-4 w-full rounded-xl py-3 text-white font-medium bg-gradient-to-r from-[#c59adf] to-[#e5a4a8]" onClick={onBookNow}>
            Book Now
          </button>
        </>
      )}
    </div>
  );
}
