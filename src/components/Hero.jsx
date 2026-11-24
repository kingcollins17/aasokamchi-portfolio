import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import { heroPillars, profile } from '../data/portfolioData';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="home" className="bg-[#F2EFE9] px-0 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-b-[2.25rem] bg-gradient-to-b from-[#1A2D25] via-[#13221C] to-[#0D1814] text-white shadow-2xl shadow-[#0D1814]/20 sm:rounded-[2.25rem]">
        {/* Ambient radial glow behind portrait */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#84B82E]/10 blur-3xl"
        />

        <Navbar />

        <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-6 sm:px-10 sm:pb-14 sm:pt-10 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Heading & Editorial Copy */}
            <div
              className={`relative z-20 transition-all duration-700 ease-out lg:col-span-7 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <p className="mb-3 font-['Playfair_Display',serif] text-base italic tracking-wide text-[#95C93D] sm:text-lg">
                {profile.greeting}
              </p>
              <h1 className="font-['Inter',sans-serif] text-[1.15rem] font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-[1.75rem] xl:text-[1.95rem]">
                Executive Assistant <span className="text-[#84B82E]">|</span> Project Manager
              </h1>

              <p className="mt-5 max-w-xl font-['Playfair_Display',serif] text-xl font-medium leading-snug text-white/95 sm:text-2xl">
                {profile.tagline}
              </p>
              <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                {profile.heroSubtext}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#84B82E]" />
                  Available • {profile.location}
                </span>
                <a
                  href={profile.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-[#84B82E]/60 hover:text-white"
                >
                  <span>Canva Portfolio</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#84B82E]" />
                </a>
              </div>
            </div>

            {/* Right Circular Portrait */}
            <div
              className={`relative z-10 flex justify-center transition-all duration-1000 ease-out delay-150 lg:col-span-5 lg:justify-end ${
                mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                {/* Subtle outer decorative ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full border border-[#84B82E]/25"
                />
                <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-[#84B82E]/60 bg-gradient-to-b from-[#233D32] via-[#182B23] to-[#111E19] shadow-2xl shadow-black/40 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <img
                    src="/aasokaBg.png"
                    alt={profile.fullName}
                    className="h-full w-full scale-105 object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Pillars */}
          <div
            className={`relative z-20 mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 transition-all duration-700 ease-out delay-500 sm:grid-cols-4 lg:mt-12 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {heroPillars.map((pillar) => (
              <div key={pillar.number} className="group">
                <span className="block text-xs font-semibold tracking-wider text-[#84B82E]">
                  {pillar.number}
                </span>
                <p className="mt-1 text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

