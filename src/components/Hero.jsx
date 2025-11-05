import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,64,175,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(251,191,36,0.2),transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
              Premium Events & Exhibitions
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Experience the Art of Moments with Glitzfair
            </h1>
            <p className="mt-4 text-slate-200/90 text-base md:text-lg leading-relaxed">
              Discover curated exhibitions, masterclasses, fashion shows, and culinary competitions designed for refined tastes. Elegance meets innovation in every experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-400 text-blue-950 px-5 py-3 text-sm md:text-base font-semibold shadow-[0_8px_30px_rgb(251,191,36,0.45)] hover:from-amber-200 hover:to-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
              >
                Explore Events <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#vendors"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
              >
                Become a Vendor
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-200/80">
              <div>
                <span className="font-semibold text-white">Curated</span> Experiences
              </div>
              <div>
                <span className="font-semibold text-white">Luxury</span> Aesthetics
              </div>
              <div>
                <span className="font-semibold text-white">Trusted</span> Organizers
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/60 to-blue-800/40 shadow-2xl overflow-hidden">
              <div className="h-full w-full grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-amber-200 font-semibold tracking-wide">Glitzfair 2025</p>
                  <p className="mt-2 text-white text-2xl md:text-3xl font-bold">Where Elegance Meets Experience</p>
                  <p className="mt-2 text-slate-200/85">A premium platform for exhibitions, masterclasses, fashion, and gastronomy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
