"use client"
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { toast } from "react-toastify";
import { useState } from "react";
export default function UpcomingSessionCard() {
  const [markComplete, setMarkComplete] = useState(false)
  const handleClick = () => {
    setMarkComplete(true)
  }
  return (
    <div className="card p-5">
      <div className=" flex items-center gap-4">
        <div className="text-left min-w-[68px]">
          <p className="text-lg text-gray-800 leading-5">11:00 AM</p>
          <p className="text-xs text-gray-500">Bandra</p>
        </div>
        <div className="border border-gray-300 h-[40px]" />
        <div className="flex items-center justify-between gap-2">
          <Image src={'/dummygirlprofileimage.jpg'} alt="" width={40} height={40} className="rounded-full" />
          <div className="items-center justify-between gap-2">
            <p className="font-semibold text-sm text-gray-800">Dr. Kiran Rathi</p>
            <IoCallOutline className="rounded-full p-1 bg-violet-500 text-white" size={20} />
          </div>
        </div>
      </div>
      <div className="rounded-lg p- text-gray-600 mt-5">
        <p className="text-xs ">Session Duration <span className="text-xs font-medium">01:00 HR</span></p>
        <p className="text-xs  mt-1">Session Mode: <span className="font-medium">Online</span></p>
      </div>
      <div className="mt-3 text-left grid grid-cols-2  gap-2">
        <Button
          text="Mark as Completed"
          classes={markComplete ? "pointer-events-none opacity-50 cursor-not-allowed text-xs" : ""}
          onClick={handleClick}
        />
        <div className=" rounded-lg p-2 text-gray-600">
          <p className="text-xs ">Previous Session</p>
          <p className="text-xs font-medium">Tuesday, March 5, 2023</p>
        </div>
      </div>
    </div>
  );
}
