import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold text-lg">Glitzfair</p>
            <p className="mt-2 text-slate-200/80 text-sm">
              Premium events, exhibitions, and experiences that blend luxury with culture.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-white font-semibold">Explore</p>
              <ul className="mt-2 space-y-1 text-slate-200/85">
                <li><a className="hover:text-white" href="#events">Events</a></li>
                <li><a className="hover:text-white" href="#vendors">Vendors</a></li>
                <li><a className="hover:text-white" href="#tickets">My Tickets</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold">Company</p>
              <ul className="mt-2 space-y-1 text-slate-200/85">
                <li><a className="hover:text-white" href="#about">About</a></li>
                <li><a className="hover:text-white" href="#contact">Contact</a></li>
                <li><a className="hover:text-white" href="#careers">Careers</a></li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">Follow us</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-200/70">
          © {new Date().getFullYear()} Glitzfair — Premium Events & Exhibitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
