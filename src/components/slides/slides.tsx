import { ReactNode } from "react";
import { Check } from "lucide-react";
import { CLIENT, PRICING_ROW_USD, PRICING_TOTALS_USD } from "@/utils/constants";

interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[15px] tracking-[0.2em] uppercase opacity-60 mb-3">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[38px] md:text-[42px] font-light leading-[1.12] mb-4 max-w-[1200px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[17px] md:text-[19px] opacity-80 font-light leading-snug max-w-[1000px]">{children}</p>
);

const { seatCount: SEATS, licenseDiscountPercent: DISCOUNT_PCT, organizationName: ORG } = CLIENT;

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Cover",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Factorial proposal</SectionLabel>
        <h1 className="text-[44px] md:text-[52px] font-light leading-[1.08] mb-4 max-w-[1200px]">{ORG}</h1>
        <p className="text-[17px] md:text-[19px] opacity-80 font-light mb-3">
          Starter Planning (Enterprise) plus Recruitment — one integrated HR workspace for your distributed team: Core, attendance, time off, shifts, and hiring.
        </p>
        <p className="text-[14px] md:text-[15px] opacity-60 font-light">
          {SEATS} seats · ROW USD (monthly) · {DISCOUNT_PCT}% nonprofit discount (licenses, recruitment, implementation) · Recruitment: {PRICING_ROW_USD.recruitment.tier}
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
            <span className="text-[18px] font-light">F</span>
          </div>
          <div>
            <p className="text-[16px] opacity-70">Victor Gutierrez</p>
            <p className="text-[13px] opacity-50">Business Development · Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context",
    title: "Context",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Context</SectionLabel>
        <SlideTitle>Why Righteous Foundation is looking for a new HR system</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug mb-4">
              Your team works <strong className="opacity-100">across the country, mostly remote</strong>. The previous HR tool had a{" "}
              <strong className="opacity-100">weak mobile experience</strong>, and key workflows — especially{" "}
              <strong className="opacity-100">reports and attendance</strong> — were unreliable.
            </p>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug mb-4">
              You moved to <strong className="opacity-100">manual processes</strong> to keep control, but that creates extra work, gaps, and errors when you need trustworthy records for managers and Finance/Payroll.
            </p>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug">
              As a <strong className="opacity-100">registered nonprofit</strong>, this proposal applies{" "}
              <strong className="opacity-100">{DISCOUNT_PCT}%</strong> to <strong className="opacity-100">licenses</strong>,{" "}
              <strong className="opacity-100">recruitment</strong>, and <strong className="opacity-100">implementation</strong>.
            </p>
          </div>
          <div className="space-y-2">
            {[
              { icon: "📱", title: "Mobile-first", desc: "Clock in/out, request time off, sign documents, and complete tasks from the Factorial app — built for remote workers." },
              { icon: "🧾", title: "Complete records", desc: "Timesheets, attendance dashboards, and HR exports with the fields managers and Finance need — not half-empty reports." },
              { icon: "🌍", title: "One system", desc: "Employee data, shifts, absences, and documents in a single place instead of spreadsheets and manual fixes." },
              { icon: "🤝", title: "Nonprofit pricing", desc: `${DISCOUNT_PCT}% discount on licenses, recruitment, and implementation for registered nonprofits.` },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 border border-foreground/15 p-3">
                <span className="text-[22px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[14px] font-medium mb-0.5">{item.title}</h4>
                  <p className="text-[12px] opacity-60 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "priorities",
    title: "Priorities",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>What you asked for</SectionLabel>
        <SlideTitle>Start with core HR operations — then scale</SlideTitle>
        <SlideSubtitle>
          This proposal covers what you asked for on the call: employee records and documents, reliable remote attendance, time off, shift planning, hiring (~3–5 open roles), and clean data handoff to your payroll provider.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            { icon: "👤", title: "Core HR", desc: "Directory, contracts, org chart, permissions, cloud documents, and legally valid e-signatures — plus guided onboarding workflows." },
            { icon: "⏱️", title: "Time tracking", desc: "Mobile clock-in/out with geolocation, timesheet approval, real-time attendance view, and detailed exports for control and payroll prep." },
            { icon: "📅", title: "Shifts", desc: "Create and assign shifts (including bulk and templates), manage breaks, spot scheduling conflicts, and let employees review schedules on mobile." },
            { icon: "🏖️", title: "Time off", desc: "Employees request leave on web or app; managers approve with policies, balances, calendars, and optional document attachments." },
            { icon: "📣", title: "Recruitment", desc: "Career page, pipeline by hiring stage, Indeed/LinkedIn reach, email and WhatsApp with candidates, sized for about five active jobs." },
            { icon: "💸", title: "Payroll handoff", desc: "Factorial does not process local payroll here — it centralizes time, absence, and employee change data your payroll partner can use." },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-4">
              <span className="text-[26px] block mb-2">{f.icon}</span>
              <h3 className="text-[15px] font-medium mb-1">{f.title}</h3>
              <p className="text-[12px] opacity-65 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "recommended-package",
    title: "Package",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Recommended package</SectionLabel>
        <SlideTitle>{PRICING_ROW_USD.bundleName} · Enterprise</SlideTitle>
        <SlideSubtitle>
          One monthly package for {SEATS} employees: <strong className="opacity-100">Core</strong>, <strong className="opacity-100">Time Tracking</strong>,{" "}
          <strong className="opacity-100">Time Off</strong>, and <strong className="opacity-100">Shifts</strong> — list price{" "}
          <strong className="opacity-100">${PRICING_ROW_USD.listPricePerSeatPerMonth}/seat/month</strong> before your nonprofit discount.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">What you get in the bundle</h3>
            <div className="space-y-3 text-[13px] opacity-75 leading-snug">
              <div>
                <p className="font-medium opacity-90 mb-1">Core</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Employee directory, contracts, org chart, teams & permissions</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Cloud documents, bulk send, legally valid e-signatures</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Onboarding/offboarding workflows with tasks and file collection</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> HR reports, custom reports, and payroll-ready employee change exports</li>
                </ul>
              </div>
              <div>
                <p className="font-medium opacity-90 mb-1">Time tracking & shifts</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Clock-in/out on mobile and web, with geolocation and optional location alerts</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Timesheet approval, real-time attendance dashboard, Excel/PDF exports</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Overtime rules, bank of hours, and shift planning with conflict warnings</li>
                </ul>
              </div>
              <div>
                <p className="font-medium opacity-90 mb-1">Time off</p>
                <ul className="space-y-1">
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Requests and approvals on desktop and mobile, with policy-based balances</li>
                  <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Team calendars, multi-level approvals, and document attachments when required</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">Recruitment add-on</h3>
            <p className="text-[14px] opacity-75 leading-snug mb-3">
              <strong className="opacity-100">{PRICING_ROW_USD.recruitment.tier}</strong> — applicant tracking for your typical hiring volume (~3–5 open roles).
            </p>
            <ul className="space-y-1.5 text-[13px] opacity-75 leading-snug mb-3">
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Branded career page and customizable hiring stages</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Indeed and LinkedIn integration; one candidate pipeline</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Email and WhatsApp with applicants; notes and feedback per profile</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={14} /> Move hired candidates into Core onboarding (data, documents, tasks)</li>
            </ul>
            <p className="text-[12px] opacity-55 leading-snug border-t border-white/15 pt-3">
              List <strong className="opacity-80">${PRICING_TOTALS_USD.recruitmentListPerMonth}/mo</strong> → nonprofit:{" "}
              <strong className="opacity-80">${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</strong>
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "mobile-remote",
    title: "Mobile",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Experience</SectionLabel>
        <SlideTitle>Built for employees on their phones</SlideTitle>
        <SlideSubtitle>
          Remote employees use the Factorial app for daily HR: clock in/out with geolocation, request and track time off, sign documents, and complete onboarding tasks from one inbox.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { title: "One login, role-based access", desc: "HR sees the full picture; managers approve what they own; employees see only their data — no extra license types." },
            { title: "Tasks in one inbox", desc: "Signatures, time-off reviews, document uploads, and onboarding steps appear as actionable tasks on mobile." },
            { title: "Location-aware attendance", desc: "Assign work locations per employee; optional geofencing alerts help validate remote clock-ins when you need control." },
          ].map((x) => (
            <div key={x.title} className="border border-foreground/15 p-4">
              <h3 className="text-[15px] font-medium mb-1.5">{x.title}</h3>
              <p className="text-[12px] opacity-60 leading-snug">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "attendance-reporting",
    title: "Attendance",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Operations</SectionLabel>
        <SlideTitle>Attendance you can prove — reports you can export</SlideTitle>
        <SlideSubtitle>
          Replace unreliable sign-ins and incomplete reports with validated timesheets, live attendance visibility, and exports your Finance team can use.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { icon: "📅", title: "Shifts linked to attendance", desc: "Plan and assign shifts (templates, bulk edits, breaks), see conflicts early, and align absences with the schedule." },
            { icon: "📥", title: "Timesheets & exports", desc: "Approve timesheets, autofill where configured, and export detailed attendance to Excel or PDF." },
            { icon: "📊", title: "Live attendance view", desc: "See who clocked in, who is missing, work location, and breaks — in real time for managers." },
            { icon: "⏱️", title: "Overtime & bank of hours", desc: "Configure overtime and special-hour rules; balance extra time with policies you define." },
          ].map((f) => (
            <div key={f.title} className="flex gap-3 border border-white/20 p-4">
              <span className="text-[24px] shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-[15px] font-medium mb-1">{f.title}</h4>
                <p className="text-[12px] opacity-60 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "documents-onboarding",
    title: "Documents",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Compliance & onboarding</SectionLabel>
        <SlideTitle>Documents, e-signatures, and structured onboarding</SlideTitle>
        <SlideSubtitle>
          Centralize HR files in the cloud, collect legally valid e-signatures, and run structured onboarding so new hires submit IDs and complete tasks without email chaos.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="space-y-2">
            {[
              "Employee directory, contracts, and org chart in one workspace",
              "Send, sign, and track documents in bulk (desktop and mobile)",
              "Guided onboarding/offboarding workflows with assigned tasks",
              "Super-task to collect employee IDs and required files into the right folders",
              "Custom roles and permissions — control who sees and approves what",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 border border-white/15 p-3">
                <Check size={16} className="shrink-0 mt-0.5 opacity-70" />
                <p className="text-[14px] opacity-80 leading-snug">{t}</p>
              </div>
            ))}
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">From “offer accepted” to “ready to work”</h3>
            <p className="text-[13px] opacity-65 leading-snug">
              After you hire in Recruitment, onboarding picks up automatically: offer and personal data collection, document signatures, and file uploads — so the new employee is ready to clock in and request time off on day one.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "recruitment",
    title: "Recruitment",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Talent acquisition</SectionLabel>
        <SlideTitle>Recruitment built for your hiring rhythm</SlideTitle>
        <SlideSubtitle>
          Publish roles, manage candidates in one ATS, and reach people on Indeed, LinkedIn, email, or WhatsApp — sized for about five active jobs at a time.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { title: "Career page & job posts", desc: "Branded careers URL, customizable application forms, and job catalog aligned with your teams." },
            { title: "Indeed & LinkedIn", desc: "Bring applicants into one pipeline with tags, notes, and hiring stages your managers can follow." },
            { title: "Candidate communication", desc: "Email from Factorial, WhatsApp outreach, and hiring metrics (time-to-hire, sources, funnel)." },
          ].map((x) => (
            <div key={x.title} className="border border-foreground/15 p-4">
              <h3 className="text-[15px] font-medium mb-1">{x.title}</h3>
              <p className="text-[12px] opacity-60 leading-snug">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "payroll",
    title: "Payroll",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Finance handoff</SectionLabel>
        <SlideTitle>Factorial prepares payroll inputs — your payroll partner runs payroll</SlideTitle>
        <SlideSubtitle>
          If you want fully processed payslips inside the same system, Factorial is not positioned as the payroll engine in this scope. If you’re open to a best-in-class HR hub + payroll partner, Factorial fits cleanly.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">What Factorial covers</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• Contract and employee updates that affect payroll</li>
              <li>• Time tracking, absences, overtime, and bank-of-hours outputs</li>
              <li>• Guided payroll cycle collaboration and exports to compatible payroll tools</li>
              <li>• Custom reports and employee change exports for your provider’s format</li>
            </ul>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">What your payroll partner keeps</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• Payslip generation and statutory compliance execution</li>
              <li>• Final bank file / local regulatory filings (as applicable)</li>
              <li>• Authoritative accounting entries (depending on your finance stack)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Investment",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Investment</SectionLabel>
        <SlideTitle>Monthly estimate (ROW USD · monthly billing)</SlideTitle>

        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <h3 className="text-[17px] font-medium opacity-80 mb-3">Monthly subscription</h3>
            <div className="border border-foreground/20 p-5 space-y-2 text-[13px]">
              <div className="flex justify-between gap-2">
                <span className="opacity-65">{PRICING_ROW_USD.bundleName} ({SEATS} × ${PRICING_ROW_USD.listPricePerSeatPerMonth})</span>
                <span className="font-medium shrink-0">${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
                <span className="opacity-80">Nonprofit discount ({DISCOUNT_PCT}%)</span>
                <span className="font-medium shrink-0">−${(PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal).toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between gap-2 border-t border-foreground/15 pt-2">
                <span className="opacity-65">Licenses after discount</span>
                <span className="font-medium">${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="opacity-65">Recruitment ({PRICING_ROW_USD.recruitment.tier}) — list</span>
                <span className="font-medium">${PRICING_TOTALS_USD.recruitmentListPerMonth.toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
                <span className="opacity-80">Nonprofit discount ({DISCOUNT_PCT}%)</span>
                <span className="font-medium shrink-0">−${(PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal).toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between gap-2 border-t border-foreground/15 pt-2">
                <span className="opacity-65">Recruitment after discount</span>
                <span className="font-medium">${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</span>
              </div>
              <p className="text-[11px] opacity-50 pt-1 leading-snug">{DISCOUNT_PCT}% nonprofit pricing on licenses and recruitment in this proposal.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-medium opacity-80 mb-3">Totals & implementation</h3>
            <div className="space-y-3">
              <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-4 text-center">
                <p className="text-[12px] opacity-55 mb-1">Estimated monthly subscription</p>
                <p className="text-[44px] font-light leading-none">${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}</p>
                <p className="text-[11px] opacity-45 mt-1">USD · before taxes/fees if applicable</p>
              </div>

              <div className="border border-foreground/20 p-4 text-[12px] space-y-1.5">
                <p className="font-medium opacity-90">Implementation (one-time)</p>
                <p className="flex justify-between gap-2">
                  <span className="opacity-70">List (reference)</span>
                  <span>${PRICING_TOTALS_USD.implementationListOneTime.toFixed(0)}</span>
                </p>
                <p className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
                  <span>Nonprofit discount ({DISCOUNT_PCT}%)</span>
                  <span>−${(PRICING_TOTALS_USD.implementationListOneTime - PRICING_TOTALS_USD.implementationOneTime).toFixed(0)}</span>
                </p>
                <p className="flex justify-between gap-2 border-t border-foreground/15 pt-2 font-medium">
                  <span>Your price</span>
                  <span>${PRICING_TOTALS_USD.implementationOneTime.toFixed(0)} USD</span>
                </p>
                <p className="text-[10px] opacity-45 leading-snug">Onboarding: 1 hour / week with your Specialist; full implementation within ~1.5 months. Final scope in the order form.</p>
              </div>

              <p className="text-[11px] opacity-55 px-1 leading-snug">Card or bank transfer in USD/EUR as agreed.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "demo",
    title: "Demo",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Try it</SectionLabel>
        <SlideTitle>Explore Factorial in a demo workspace</SlideTitle>

        <div className="border-2 border-white/25 bg-white/[0.08] p-4 mb-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-[15px] font-medium opacity-90 mb-1">Demo environment</p>
            <p className="text-[12px] opacity-55 leading-snug">
              Login: <span className="font-mono opacity-80 text-[11px]">hellen@demob25acc00.com</span> · Password:{" "}
              <span className="font-mono opacity-80 text-[11px]">Papapapa333!</span>
            </p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black px-5 py-2.5 text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            Open demo →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-[16px] font-normal mb-3 opacity-80">Deep links</h3>
            <div className="space-y-2">
              {[
                { label: "Shifts (monthly view)", desc: "See how scheduling maps to attendance.", url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1", isDemo: true },
                { label: "Time off approvals (Help Center)", desc: "How approvals and policies behave at scale.", url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939", isDemo: false },
                { label: "AI reports entry point", desc: "Explore the reporting experience in demo.", url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question", isDemo: true },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 border border-white/15 p-3 hover:border-white/35 hover:bg-white/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={16} className="opacity-60 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[11px] opacity-55 mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                  <span className="text-[10px] opacity-40 group-hover:opacity-70 shrink-0 mt-0.5">{f.isDemo ? "Demo" : "Help"}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-normal mb-3 opacity-80">Why this matches your priorities</h3>
            <div className="space-y-2">
              {[
                { title: "Remote attendance", desc: "Mobile clock-in with geolocation, timesheet approval, and attendance exports." },
                { title: "Core HR in one place", desc: "Directory, documents, e-signatures, and onboarding linked to time and hiring." },
                { title: "Hiring that fits your volume", desc: "Career page, Indeed/LinkedIn, and WhatsApp-friendly candidate follow-up." },
              ].map((g) => (
                <div key={g.title} className="border border-white/15 p-4">
                  <h4 className="text-[14px] font-normal mb-1">{g.title}</h4>
                  <p className="text-[12px] opacity-60 leading-snug">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "video",
    title: "Video",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-14 text-center">
        <SectionLabel>Overview</SectionLabel>
        <SlideTitle>See the employee experience</SlideTitle>
        <div className="w-full max-w-[900px] mt-4 mx-auto aspect-video max-h-[340px]">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
            title="Factorial product overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },

  {
    id: "onboarding",
    title: "Onboarding",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Implementation</SectionLabel>
        <SlideTitle>Onboarding: how we get you live</SlideTitle>
        <SlideSubtitle>
          Structured, weekly sessions so your team adopts Factorial with confidence — without rushing day-to-day work.
        </SlideSubtitle>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="border border-foreground/20 p-5 bg-foreground/[0.03]">
            <p className="text-[11px] uppercase tracking-widest opacity-50 mb-2">During implementation</p>
            <h3 className="text-[17px] font-medium mb-3">Dedicated Onboarding Specialist</h3>
            <p className="text-[13px] opacity-70 leading-snug mb-4">
              From kickoff to go-live, a <strong className="opacity-100">Factorial Onboarding Specialist</strong> configures your Starter Planning modules:
              Core (directory, documents, workflows), Time Tracking, Time Off, Shifts, Recruitment basics, and payroll-ready exports.
            </p>
            <ul className="space-y-2 text-[12px] opacity-75">
              <li className="flex gap-2"><Check size={14} className="shrink-0 mt-0.5 opacity-70" /> One <strong>live session per week</strong></li>
              <li className="flex gap-2"><Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Each session: <strong>1 hour</strong>, focused and actionable</li>
              <li className="flex gap-2"><Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Plan: <strong>~1.5 months</strong> (≈6 weeks) to implementation at most</li>
            </ul>
          </div>

          <div className="border border-foreground/20 p-5">
            <p className="text-[11px] uppercase tracking-widest opacity-50 mb-2">After go-live</p>
            <h3 className="text-[17px] font-medium mb-3">Your exclusive Account Manager</h3>
            <p className="text-[13px] opacity-70 leading-snug mb-4">
              When onboarding ends, you are not left on your own. Factorial assigns an <strong className="opacity-100">Account Manager dedicated to your organization</strong> — your day-to-day commercial and success contact for adoption, renewals, and growing the platform.
            </p>
            <ul className="space-y-2 text-[12px] opacity-75">
              <li className="flex gap-2"><Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Same partner mindset: Specialist first, then <strong className="opacity-100">one named Account Manager</strong></li>
              <li className="flex gap-2"><Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Ongoing alignment on usage, training, and next modules</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-foreground/15 pt-4 flex flex-wrap gap-4 items-center justify-between text-[12px] opacity-65">
          <span>
            <strong className="opacity-90">Cadence:</strong> 1× week · 1 hour · ~6 sessions over ~1.5 months to full rollout
          </span>
          <span className="opacity-50">Proposal prepared for {ORG} — 2026</span>
        </div>
      </div>
    ),
  },
];
