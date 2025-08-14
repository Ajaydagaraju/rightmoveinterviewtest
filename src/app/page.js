'use client';
import HeaderGreeting from '@/Components/HeaderGreeting';
import PastSessionItem from '@/Components/PastSessionItem';
import UpcommingSessionCard from '@/Components/UpcommingSessionCard';

export default function Home() {
  const pastSessions = [
    { time: '12:00 AM', doctor: 'Dr. Ramesh Naik', date: 'Tuesday, March 25, 2023' },
    { time: '10:30 AM', doctor: 'Dr. Suresh Sawant', date: 'Tuesday, March 15, 2023' },
    { time: '09:30 AM', doctor: 'Dr. Neeta Singh', date: 'Tuesday, Feb 25, 2023' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7d7ff] via-[#f3d7e5] to-[#f9e0dd] pb-28">
      <HeaderGreeting />
      <section className="mt-4 px-4">
        <h2 className="text-sm text-gray-700 mb-2">Upcoming Session</h2>
        <UpcommingSessionCard />
      </section>

      <section className="mt-5 px-4">
        <h2 className="text-sm text-gray-700 mb-2">Past Sessions</h2>
        <div className="space-y-3">
          {pastSessions.map((session, index) => (
            <PastSessionItem
              key={index}
              time={session.time}
              doctor={session.doctor}
              date={session.date}
            />
          ))}
        </div>
      </section>

      <footer className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-[#f9e0dd] to-transparent">
        <div className="mx-auto px-4">
          <button
            className="w-full my-3 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] shadow-lg"
            aria-label="Schedule a new session"
          >
            Schedule Now
          </button>
        </div>
      </footer>
    </div>
  );
}