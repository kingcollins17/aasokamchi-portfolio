import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
      <a
        href="#home"
        className="group inline-flex items-baseline gap-0.5 text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
      >
        <span>{profile.brand}</span>
        <span className="text-xs font-normal text-[#84B82E]">®</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#14241E] shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FAF8F5]"
        >
          <span>Get in touch</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#84B82E] text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </nav>

      <button
        type="button"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 md:hidden"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen && (
        <div className="absolute inset-x-4 top-20 z-40 rounded-3xl border border-white/15 bg-[#14241E]/95 p-6 shadow-2xl backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/85 transition hover:text-[#84B82E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-between rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#14241E]"
            >
              <span>Get in touch</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#84B82E] text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

