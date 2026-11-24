import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#14241E] px-6 py-10 text-white sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#home" className="inline-flex items-baseline gap-0.5 text-lg font-semibold">
            <span>{profile.brand}</span>
            <span className="text-xs text-[#84B82E]">®</span>
          </a>
          <p className="mt-1 text-xs text-white/60">
            {profile.fullName} — {profile.role} ({profile.location})
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}

