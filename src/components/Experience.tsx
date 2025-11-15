import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { usePortfolio } from "../context/portfolioContext";
import TechStackCard from "./techstack-card/TechStackCard";

const Experience: React.FC = () => {
  const { data } = usePortfolio();
  const { experience } = data;
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Experience
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experience.map((exp, index) => {
            const isExpanded = expandedIds.has(exp.id);

            return (
              <div
                key={exp.id}
                className="border-b border-border last:border-b-0 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="py-6 transition-colors duration-200">
                  <div className="flex gap-4">
                    {/* Company Logo */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-bg-tertiary border border-border flex items-center justify-center">
                        {exp.companyLogo ? (
                          <img
                            src={exp.companyLogo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <Briefcase className="w-6 h-6 text-text-secondary" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                            {exp.title}
                          </h3>

                          <div className="flex items-center gap-2 flex-wrap">
                            <a
                              href={exp.companyWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-medium text-text-secondary hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                            >
                              {exp.company}
                              {exp.companyWebsite && (
                                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </a>
                            {exp.endDate === "Present" && (
                              <span className="px-2 py-0.5 text-xs font-medium rounded bg-bg-success text-success border border-success/20">
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right side - Date and Location */}
                        <div className="flex flex-col items-end gap-1 text-sm text-text-secondary shrink-0">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="whitespace-nowrap">
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="whitespace-nowrap">
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="mt-4 space-y-4 animate-slide-up">
                          {/* Description */}
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-text-secondary leading-relaxed"
                              >
                                <span className="text-primary-500 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-text-primary mb-2">
                                Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                <div className="pt-2">
                                  <TechStackCard
                                    technologies={exp.technologies}
                                    title=""
                                    badgeClassName="gap-2 px-3 py-2"
                                    iconWrapperClassName="w-4 h-4 "
                                    nameClassName="text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-primary-400 transition-colors group"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show less</span>
                            <ChevronUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        ) : (
                          <>
                            <span>Show more</span>
                            <ChevronDown className="w-4 h-4 group-hover:transform group-hover:translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
