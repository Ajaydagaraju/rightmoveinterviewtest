import HeaderGreeting from "@/Components/HeaderGreeting";
import PastSessionItem from "@/Components/PastSessionItem";
import UpcomingSessionCard from "@/Components/UpcommingSessionCard";
import Image from "next/image";

export default function Home() {
  return (
  

    <div className="p-4 pb-28 bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd] min-h-screen rounded-b-[32px]">
      <HeaderGreeting />

      <section className="mt-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">Upcoming Session</h2>
        <UpcomingSessionCard />
      </section>

      <section className="mt-5">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">Past Sessions</h2>
        <div className="space-y-3">
          <PastSessionItem time="12:00 AM" doctor="Dr. Ramesh Naik" date="Tuesday, March 25, 2023" />
          <PastSessionItem time="10:30 AM" doctor="Dr. Suresh Sawant" date="Tuesday, March 15, 2023" />
          <PastSessionItem time="09:30 AM" doctor="Dr. Neeta Singh"  date="Tuesday, Feb 25, 2023" />
        </div>
      </section>

      <div className="fixed left-0 right-0 bottom-0 safe-bottom bg-gradient-to-t from-[#f9e0dd] to-transparent">
        <div className="mx-auto max-w-sm px-4">
          <button className="w-full my-3 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] shadow-lg">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
 




  );
}
