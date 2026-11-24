import { ArrowRight } from 'lucide-react';
import { profile, showcaseCards } from '../data/portfolioData';
import Reveal from './Reveal';

export default function AboutShowcase() {
  return (
    <section id="about" className="bg-[#FAF8F5] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-6xl">
        {/* Split Header matching template */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="font-['Playfair_Display',serif] text-base italic text-[#7DB028] sm:text-lg">
              {profile.aboutEyebrow}
            </p>
            <h2 className="mt-3 font-['Inter',sans-serif] text-3xl font-bold leading-[1.12] tracking-tight text-[#14241E] sm:text-4xl lg:text-[2.75rem]">
              {profile.aboutHeading}
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:pt-2" delayClass="delay-150">
            <p className="font-['Playfair_Display',serif] text-lg leading-relaxed text-[#2C3A33] sm:text-xl">
              {profile.aboutDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E1D8] pt-6">
              <p className="max-w-[14rem] text-xs font-medium leading-snug text-[#68706A]">
                {profile.aboutCtaLabel}
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#84B82E] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white shadow-md shadow-[#84B82E]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75A625]"
              >
                <span>Get in touch</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#14241E] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* 3-Column Rounded Showcase Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseCards.map((card, index) => (
            <Reveal
              key={card.title}
              delayClass={index === 1 ? 'delay-150' : index === 2 ? 'delay-300' : 'delay-0'}
            >
              <article className="group relative overflow-hidden rounded-3xl bg-[#EDE9E0] shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#14241E]/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#14241E]/90 via-[#14241E]/25 to-transparent"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#14241E] backdrop-blur-sm">
                    {card.metric}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#95C93D]">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/80">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

