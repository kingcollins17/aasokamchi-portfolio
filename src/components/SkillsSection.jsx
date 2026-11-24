import { useState } from 'react';
import { Wrench, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolioData';
import Reveal from './Reveal';

const tabs = [
  { id: 'all', label: 'All Skills' },
  { id: 'tools', label: 'Tools & Platforms' },
  { id: 'competencies', label: 'Core Competencies' },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const showTools = activeTab === 'all' || activeTab === 'tools';
  const showCompetencies = activeTab === 'all' || activeTab === 'competencies';

  return (
    <section id="skills" className="bg-[#FAF8F5] px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-['Playfair_Display',serif] text-base italic text-[#7DB028] sm:text-lg">
                Toolkit &amp; Strengths
              </p>
              <h2 className="mt-2 font-['Inter',sans-serif] text-3xl font-bold tracking-tight text-[#14241E] sm:text-4xl">
                Tools &amp; Core Competencies
              </h2>
            </div>

            <div className="inline-flex w-fit rounded-full border border-[#E2DDD3] bg-[#F2EFE9] p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    activeTab === tab.id
                      ? 'bg-[#14241E] text-white shadow-sm'
                      : 'text-[#5C645E] hover:text-[#14241E]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {showTools && (
            <Reveal className={activeTab === 'tools' ? 'lg:col-span-2' : ''}>
              <div className="h-full rounded-3xl border border-[#E5E0D6] bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2EFE9] text-[#14241E]">
                    <Wrench className="h-5 w-5 text-[#84B82E]" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#14241E]">Tools &amp; Platforms</h3>
                    <p className="text-xs text-[#68706A]">Daily workspace, CRM &amp; creative stack</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#E6E1D8] bg-[#FAF8F5] px-4 py-2 text-sm font-medium text-[#1F2E27] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#84B82E] hover:bg-[#84B82E]/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {showCompetencies && (
            <Reveal
              className={activeTab === 'competencies' ? 'lg:col-span-2' : ''}
              delayClass="delay-150"
            >
              <div className="h-full rounded-3xl border border-[#E5E0D6] bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2EFE9] text-[#14241E]">
                    <Sparkles className="h-5 w-5 text-[#84B82E]" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#14241E]">Core Competencies</h3>
                    <p className="text-xs text-[#68706A]">Administrative precision &amp; client care</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {skills.competencies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E6E1D8] bg-[#FAF8F5] px-4 py-2 text-sm font-medium text-[#1F2E27] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#84B82E] hover:bg-[#84B82E]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

