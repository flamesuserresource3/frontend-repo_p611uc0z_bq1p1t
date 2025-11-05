import React from 'react';
import { Star, Calendar, Ticket, Menu } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-slate-100/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-950/40 bg-blue-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-400 to-amber-300 grid place-items-center shadow-lg ring-1 ring-white/20">
              <Star className="h-5 w-5 text-blue-950" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">
              Glitzfair
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#vendors">Vendors</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#tickets"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
            >
              <Ticket className="h-4 w-4" /> My Tickets
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-300 to-yellow-400 text-blue-950 px-4 py-2 text-sm font-semibold shadow-[0_8px_30px_rgb(251,191,36,0.45)] hover:from-amber-200 hover:to-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
            >
              <Calendar className="h-4 w-4" /> Discover
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
