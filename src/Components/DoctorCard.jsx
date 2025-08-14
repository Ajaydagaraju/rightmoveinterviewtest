'use client';
import { IoChevronUpOutline } from "react-icons/io5";
import { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import Button from "./Button";

export default function DoctorCard({
  name = 'Dr. Tejas Sharma',
  phone = '+91 98765 43210',
  specialty = 'Gynaecology',
  gender = 'Male',
  fee = '₹1,500/-',
  onBookNow = { onBookNow }
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card p-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Image src={'/dummygirlprofileimage.jpg'} alt="" width={40} height={40} className="rounded-full" />

          <div className="item-left text-left">
            <p className="font-semibold text-md text-gray-800">{name}</p>
            <p className="text-[11px] text-gray-500">{phone}</p>
          </div>
        </div>
         <IoChevronDown
                  className={`transition-transform text-gray-500 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <hr className="my-4 text-gray-500" />
          <div className="my-4 text-gray-500 grid grid-cols-2 gap-3 text-sm justify-between items-end-safe">
            <div className="">
              <p className="text-gray-700 text-lg">Expertise</p>
              <p className="font-medium ">{specialty}</p>
            </div>
            <div className="text-end">
              <p className="text-gray-700 text-lg">Gender</p>
              <p className="font-medium">{gender}</p>
            </div>
            <div className="">
              <p className="text-gray-700 text-lg">Session mode</p>
              <p className="font-medium">In-Person & Online</p>
            </div>
            <div className="text-end">
              <p className="text-gray-700 text-lg">Session Fee</p>
              <p className="font-medium">{fee}</p>
            </div>
          </div>

          <hr className="my-4 text-gray-500" />
          <Button text="Book Now" classes="w-full text-lg py-3" onClick={onBookNow} />
        </>
      )}
    </div>
  );
}
