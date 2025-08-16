'use client';
import { memo, useCallback, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import Image from 'next/image';
import Button from './Button';

function DoctorCard({
  name = 'Dr. Tejas Sharma',
  phone = '+91 98765 43210',
  specialty = 'Gynaecology',
  gender = 'Male',
  fee = '₹1,500/-',
  onBookNow,
  isOpen,
  onToggle,
}) {
 const toggleOpen = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <div className="card p-4 bg-white rounded-lg shadow-sm">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/dummygirlprofileimage.jpg"
            alt={`${name} profile`}
            width={40}
            height={40}
            className="rounded-full"
            loading="lazy"
          />
          <div className="text-left">
            <p className="font-semibold text-md text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{phone}</p>
          </div>
        </div>
        <IoChevronDown
          className={`transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <hr className="my-4 border-gray-200" />
          <div className="my-4 text-gray-500 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-700 text-lg">Expertise</p>
              <p className="font-medium">{specialty}</p>
            </div>
            <div className="text-end">
              <p className="text-gray-700 text-lg">Gender</p>
              <p className="font-medium">{gender}</p>
            </div>
            <div>
              <p className="text-gray-700 text-lg">Session mode</p>
              <p className="font-medium">In-Person & Online</p>
            </div>
            <div className="text-end">
              <p className="text-gray-700 text-lg">Session Fee</p>
              <p className="font-medium">{fee}</p>
            </div>
          </div>
          <hr className="my-4 border-gray-200" />
          <Button
            text="Book Now"
            classes="w-full text-lg py-3 bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] text-white"
            onClick={onBookNow}
          />
        </>
      )}
    </div>
  );
}

export default memo(DoctorCard);