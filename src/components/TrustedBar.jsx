import { Building2, GraduationCap, Layers, Sparkles, BarChart3 } from 'lucide-react';
import { organizations } from '../data/portfolioData';
import Reveal from './Reveal';

const icons = [Building2, Layers, GraduationCap, Sparkles, BarChart3];

export default function TrustedBar() {
  return (
    <section className="rounded-b-[2.25rem] bg-[#F2EFE9] px-6 py-10 sm:px-10 lg:px-14">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <p className="max-w-[11rem] text-xs font-medium leading-snug text-[#5C645E]">
            Organizations &amp; Teams I&apos;ve Supported
          </p>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:w-auto lg:flex-wrap lg:items-center lg:gap-10">
            {organizations.map((org, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={org.name}
                  className="group flex items-center gap-2.5 text-[#7A817C] transition-colors duration-200 hover:text-[#14241E]"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#8B938D] transition-colors group-hover:text-[#84B82E]" />
                  <span className="text-sm font-semibold tracking-tight sm:text-base">
                    {org.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

