export const sessionData = [
  {
    period: 'Morning',
    slots: [
      { time: '08:00 AM', available: false },
      { time: '09:00 AM', available: false },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true },
    ],
  },
  {
    period: 'Afternoon',
    slots: [
      { time: '12:00 PM', available: true },
      { time: '01:00 PM', available: false },
      { time: '02:00 PM', available: true },
      { time: '03:00 PM', available: true },
    ],
  },
  {
    period: 'Evening',
    slots: [
      { time: '04:00 PM', available: true },
      { time: '05:00 PM', available: true },
      { time: '06:00 PM', available: false },
      { time: '07:00 PM', available: true },
    ],
  },
  {
    period: 'Night',
    slots: [
      { time: '08:00 PM', available: true },
      { time: '09:00 PM', available: true },
      { time: '10:00 PM', available: true },
      { time: '11:00 PM', available: false },
    ],
  },
];