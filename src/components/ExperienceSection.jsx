import { Award, Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { education, experiences } from '../data/portfolioData';
import Reveal from './Reveal';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#F2EFE9] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-['Playfair_Display',serif] text-base italic text-[#7DB028] sm:text-lg">
                Career Summary
              </p>
              <h2 className="mt-2 font-['Inter',sans-serif] text-3xl font-bold tracking-tight text-[#14241E] sm:text-4xl">
                Proven Impact Across Teams
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5C645E]">
              Delivering measurable improvements in client response times, content engagement, and daily operational efficiency.
            </p>
          </div>
        </Reveal>

        {/* Experience Cards */}
        <div className="mt-12 space-y-6">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company + exp.period} delayClass={idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : 'delay-0'}>
              <div className="group rounded-3xl border border-[#E3DDD2] bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-[#84B82E]/50 hover:shadow-lg hover:shadow-[#14241E]/5 sm:p-8">
                <div className="flex flex-col justify-between gap-3 border-b border-[#E8E3DA] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#14241E] text-[#84B82E]">
                        <Briefcase className="h-4 w-4" />
                      </span>
                      <h3 className="text-xl font-bold text-[#14241E]">{exp.role}</h3>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5C645E]">
                      <span className="font-semibold text-[#2A3B32]">{exp.company}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-[#84B82E]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full bg-[#EDE9E0] px-4 py-1.5 text-xs font-semibold text-[#14241E]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#3F4B44]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#84B82E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E2DDD3] bg-white px-3 py-1 text-xs font-medium text-[#46534C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Qualifications */}
        <Reveal className="mt-16">
          <div className="rounded-3xl bg-[#14241E] p-7 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-['Playfair_Display',serif] text-base italic text-[#95C93D]">
                  Continuous Growth
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  Education &amp; Qualifications
                </h3>
              </div>
              <Award className="hidden h-7 w-7 text-[#84B82E] sm:block" />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {education.map((edu) => (
                <div
                  key={edu.title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-200 hover:border-[#84B82E]/50 hover:bg-white/10"
                >
                  <div>
                    <span className="inline-block rounded-full bg-[#84B82E]/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#95C93D]">
                      {edu.type}
                    </span>
                    <h4 className="mt-3 text-base font-semibold leading-snug text-white">
                      {edu.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-white/70">{edu.institution}</p>
                  </div>
                  <p className="mt-4 text-xs font-medium text-[#95C93D]">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

