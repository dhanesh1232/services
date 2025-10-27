"use client";

import { Icons } from "@/components/icons";
import React, { memo, useCallback, useState } from "react";

interface IconProps {
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}

const SearchIcon = (props: IconProps) =>
  Icons.search ? (
    <Icons.search {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

const MapPinIcon = (props: IconProps) =>
  Icons.mapPin ? (
    <Icons.mapPin {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

const LayoutIcon = (props: IconProps) =>
  Icons.layout ? (
    <Icons.layout {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  );

const Code = (props: IconProps) =>
  Icons.code ? (
    <Icons.code {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );

const RocketIcon = (props: IconProps) =>
  Icons.rocket ? (
    <Icons.rocket {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

const LifeBuoyIcon = (props: IconProps) =>
  Icons.lifeBuoy ? (
    <Icons.lifeBuoy {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

// Helper components with refined icons
const ChevronDown = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Shadcn-style Badge component
const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) => {
  const variants = {
    default:
      "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
    outline:
      "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// --- TYPES ---
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineItemData {
  id: string;
  title: string;
  phase: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
  description: string;
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: ExpandMode;
}

const timelineData: TimelineItemData[] = [
  {
    id: "phase-1",
    title: "Discovery",
    phase: "1 of 6",
    icon: SearchIcon,
    duration: "Day 1",
    description:
      "We kick things off with a deep dive into your goals, market, and competitors — powered by AI research tools that uncover insights in hours, not days.",
    responsibilities: [
      "Gather client goals and brand context",
      "AI-driven competitor and keyword research",
      "Audience persona mapping",
      "Technical feasibility and resource planning",
    ],
    skills: [
      "Market Research",
      "Business Strategy",
      "AI Insights",
      "Goal Mapping",
    ],
  },
  {
    id: "phase-2",
    title: "Planning",
    phase: "2 of 6",
    icon: MapPinIcon,
    duration: "Half Day",
    description:
      "We create a clear, structured roadmap — defining milestones, architecture, and deliverables using AI-assisted documentation and sprint tools.",
    responsibilities: [
      "Project roadmap and milestone setup",
      "Tech stack and framework selection",
      "Timeline and sprint planning",
      "Risk mitigation outline",
    ],
    skills: [
      "Agile Planning",
      "Architecture",
      "AI Workflow Tools",
      "System Mapping",
    ],
  },
  {
    id: "phase-3",
    title: "Design",
    phase: "3 of 6",
    icon: LayoutIcon,
    duration: "Half Day",
    description:
      "We design visually consistent, conversion-focused interfaces with AI-assisted wireframing and real-time human creative refinement.",
    responsibilities: [
      "AI-generated wireframes and mockups",
      "UI/UX iteration and refinement",
      "Responsive and accessible layout checks",
      "Stakeholder validation",
    ],
    skills: ["UI/UX Design", "Figma", "AI Design Tools", "User Testing"],
  },
  {
    id: "phase-4",
    title: "Development",
    phase: "4 of 6",
    icon: Code,
    duration: "2–3 Days",
    description:
      "We turn concepts into code using modular frameworks and AI copilots for speed and precision — delivering secure, scalable, production-ready builds.",
    responsibilities: [
      "Front-end and back-end implementation",
      "API and CMS integration",
      "CI/CD setup and automated testing",
      "Performance optimization and version control",
    ],
    skills: ["Next.js", "Node.js", "TypeScript", "AI Code Copilot", "CI/CD"],
  },
  {
    id: "phase-5",
    title: "Launch",
    phase: "5 of 6",
    icon: RocketIcon,
    duration: "Day 5 or 6",
    description:
      "We deploy your platform smoothly and securely — optimizing for SEO, speed, and scalability while running post-launch audits and monitoring.",
    responsibilities: [
      "Production deployment with rollback safeguards",
      "SEO and analytics setup",
      "Performance and stress testing",
      "Final UI polish and handover",
    ],
    skills: ["DevOps", "SEO", "Analytics", "Optimization"],
  },
  {
    id: "phase-6",
    title: "Support",
    phase: "6 of 6",
    icon: LifeBuoyIcon,
    duration: "Ongoing",
    description:
      "Our commitment doesn’t end at launch. We continuously monitor, maintain, and evolve your system to ensure lasting performance and growth.",
    responsibilities: [
      "Routine maintenance and version updates",
      "Uptime and security monitoring",
      "Feature rollouts and performance tracking",
      "Data-driven optimization recommendations",
    ],
    skills: ["Maintenance", "Monitoring", "Security", "AI Analytics"],
  },
];

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-2 space-y-3 animate-in slide-in-from-top-1 duration-200">
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
        {item.description}
      </p>

      {/* Responsibilities */}
      <div className="space-y-2">
        {item.responsibilities.map((responsibility, idx) => (
          <div
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 group"
          >
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-slate-600 dark:bg-slate-500 dark:group-hover:bg-slate-400 transition-colors duration-200" />
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
        {item.skills.map((skill, skillIdx) => (
          <Badge key={`${item.id}-skill-${skillIdx}`} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Connecting line with gradient - now always visible */}
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gradient-to-b from-black via-gray-500 to-white dark:from-white dark:via-gray-400 dark:to-black" />

      {/* Timeline node */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
        <div className="w-2 h-2 bg-slate-900 dark:bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Main content card */}
      <div className="ml-12 mb-8">
        <div
          className={`
          bg-white dark:bg-slate-950 
          rounded-lg border border-slate-200 dark:border-slate-800 
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}
        >
          {/* Header */}
          <button
            id={headerId}
            className="w-full text-left p-4 group/button cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded-t-lg"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md">
                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 ml-11">
                  <Badge variant="outline" className="text-xs">
                    {item.phase}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div
                className={`
                text-slate-400 dark:text-slate-600 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expandable content */}
          {expanded && (
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className="px-6 pb-6 border-t border-slate-100 dark:border-slate-900"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((item) => item.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

// --- APP ENTRY POINT ---
export default function TimelinePage2({ data }) {
  return (
    <div className="transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
            Professional Experience
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            A comprehensive overview of my career journey and professional
            achievements.
          </p>
        </header>

        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
    </div>
  );
}
