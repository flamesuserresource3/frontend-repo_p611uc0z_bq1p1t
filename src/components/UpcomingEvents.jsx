import React from 'react';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Global Art & Design Exhibition',
    date: 'Apr 22, 2025',
    time: '10:00 AM',
    location: 'Dubai World Trade Centre',
    tag: 'Exhibition',
    image:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Couture Fashion Week Gala',
    date: 'May 8, 2025',
    time: '7:00 PM',
    location: 'Paris, Grand Palais',
    tag: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Chef’s Table: Culinary Masters',
    date: 'May 27, 2025',
    time: '6:30 PM',
    location: 'New York, Hudson Yards',
    tag: 'Culinary',
    image:
      'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop',
  },
];

function EventCard({ event }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-blue-900/30 backdrop-blur shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-amber-300 text-blue-950 px-2.5 py-1 text-xs font-bold shadow-md">
          {event.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold leading-snug">
          {event.title}
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-200/85 text-sm">
          <div className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-amber-300" />
            <span>{event.date}</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-300" />
            <span>{event.time}</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-amber-300" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <a
            href="#"
            className="text-amber-300 font-semibold hover:text-amber-200 transition-colors"
          >
            View details
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-amber-300 to-yellow-400 text-blue-950 px-3 py-2 text-xs font-bold shadow hover:from-amber-200 hover:to-yellow-300"
          >
            Book now
          </a>
        </div>
      </div>
    </article>
  );
}

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-transparent to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Upcoming Highlights
            </h2>
            <p className="mt-2 text-slate-200/85">
              Hand-picked premium experiences for the season.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            View all events
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
