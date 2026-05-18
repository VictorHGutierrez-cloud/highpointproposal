import { ReactNode } from "react";
import { Check, Mail } from "lucide-react";
import { CLIENT, PRICING_ROW_USD, PRICING_TOTALS_USD } from "@/utils/constants";

interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-60 mb-8">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

const { seatCount: SEATS, licenseDiscountPercent: DISCOUNT_PCT, organizationName: ORG } = CLIENT;

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Cover",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Factorial proposal</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">{ORG}</h1>
        <p className="text-[36px] opacity-80 font-light mb-6">
          HR operations for a distributed nonprofit — reliable attendance, clean data, and a strong mobile experience.
        </p>
        <p className="text-[26px] opacity-60 font-light">
          {SEATS} seats · ROW USD (monthly) · {DISCOUNT_PCT}% nonprofit license discount · Recruitment (5 active jobs)
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="text-[22px] opacity-70">Victor Gutierrez</p>
            <p className="text-[18px] opacity-50">Business Development · Factorial</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Context</SectionLabel>
        <SlideTitle>Why Righteous Foundation is looking for a new HR system</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Your team works <strong className="opacity-100">across the country, mostly remote</strong>. The previous HR tool had a{" "}
              <strong className="opacity-100">weak mobile experience</strong>, and key workflows — especially{" "}
              <strong className="opacity-100">reports and attendance</strong> — were unreliable.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              You moved to <strong className="opacity-100">manual processes</strong> to keep control, but that creates extra work, gaps, and errors when you need trustworthy records for managers and Finance/Payroll.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              As a <strong className="opacity-100">registered nonprofit</strong>, Factorial can align pricing through a nonprofit program — in this proposal:{" "}
              <strong className="opacity-100">{DISCOUNT_PCT}% off Factorial licenses</strong>.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "📱", title: "Mobile-first", desc: "Employees should complete daily HR tasks on the phone, not only on a desktop." },
              { icon: "🧾", title: "Clean reporting", desc: "Exports you can trust — fewer missing fields and less manual fixing." },
              { icon: "🌍", title: "Distributed team", desc: "Consistent policies and approvals across locations and remote workers." },
              { icon: "🤝", title: "Nonprofit footprint", desc: "Pricing designed to respect mission-driven budgets while staying enterprise-capable." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] opacity-60">{item.desc}</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>What you asked for</SectionLabel>
        <SlideTitle>Start with core HR operations — then scale</SlideTitle>
        <SlideSubtitle>
          You want the fundamental modules first: employee records, documentation, attendance/time tracking, time off, and recruitment — with realistic payroll handoff to your provider.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {[
            { icon: "👤", title: "Employee data & files", desc: "Single source of truth for contracts, IDs, and HR documents — with audit-friendly history." },
            { icon: "⏱️", title: "Time tracking + shifts", desc: "Clock in/out that works for remote teams; shift planning when schedules matter." },
            { icon: "🏖️", title: "Time off & approvals", desc: "Requests, policies, approvers, and a calendar everyone can trust." },
            { icon: "📣", title: "Recruitment (≈3–5 roles)", desc: "Postings, applicants, and messaging — including channels your team already uses." },
            { icon: "💸", title: "Payroll-ready outputs", desc: "Factorial does not run payroll checks here — it prepares the data your payroll partner needs." },
            { icon: "📊", title: "Better operational reporting", desc: "Dashboards and exports (incl. AI-assisted reporting on your own data, where enabled)." },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-8">
              <span className="text-[36px] block mb-4">{f.icon}</span>
              <h3 className="text-[24px] font-medium mb-2">{f.title}</h3>
              <p className="text-[20px] opacity-65 leading-relaxed">{f.desc}</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Commercial recommendation</SectionLabel>
        <SlideTitle>Starter Planning (ROW USD)</SlideTitle>
        <SlideSubtitle>
          Best fit for your needs on the price list: <strong className="opacity-100">Core</strong>, <strong className="opacity-100">Time Tracking</strong>,{" "}
          <strong className="opacity-100">Time Off</strong>, and <strong className="opacity-100">Shifts</strong> — before nonprofit discount:{" "}
          <strong className="opacity-100">${PRICING_ROW_USD.listPricePerSeatPerMonth}/seat/month</strong> (Business · monthly).
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-16 mt-10">
          <div className="border border-white/20 p-10">
            <h3 className="text-[28px] font-medium mb-6">Included in the bundle</h3>
            <ul className="space-y-4 text-[22px] opacity-75 leading-relaxed">
              <li className="flex gap-3"><Check className="shrink-0 mt-1" size={22} /> Employee platform / Core HR workspace</li>
              <li className="flex gap-3"><Check className="shrink-0 mt-1" size={22} /> Time tracking (mobile + web)</li>
              <li className="flex gap-3"><Check className="shrink-0 mt-1" size={22} /> Time off policies, balances, approvals</li>
              <li className="flex gap-3"><Check className="shrink-0 mt-1" size={22} /> Shift planning & scheduling</li>
            </ul>
          </div>
          <div className="border border-white/20 p-10">
            <h3 className="text-[28px] font-medium mb-6">Add-on in this proposal</h3>
            <p className="text-[22px] opacity-75 leading-relaxed mb-6">
              <strong className="opacity-100">Recruitment — {PRICING_ROW_USD.recruitment.tier}</strong>
              <br />
              Priced as a <strong className="opacity-100">fixed monthly</strong> subscription (not per seat). Matches your typical hiring volume (around 3–5 open roles at a time).
            </p>
            <p className="text-[20px] opacity-55">
              Optional modules (Performance, Training, Surveys/Engagement, etc.) can be activated later without changing the core story of phase 1.
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Experience</SectionLabel>
        <SlideTitle>Built for employees on their phones</SlideTitle>
        <SlideSubtitle>
          Your team is remote — the HR experience should feel as easy as any consumer app: clock in/out, request time off, sign documents, and see what requires action in one inbox.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {[
            { title: "One login, permission-based", desc: "HR/Admin sees everything; employees see only what they should — no separate “manager licenses” required." },
            { title: "Works without a desk", desc: "Managers can approve on mobile; employees can complete tasks without a corporate machine." },
            { title: "Optional geo controls", desc: "If needed, geofencing can help validate clock-in locations for roles that require it." },
          ].map((x) => (
            <div key={x.title} className="border border-foreground/15 p-8">
              <h3 className="text-[24px] font-medium mb-3">{x.title}</h3>
              <p className="text-[20px] opacity-60 leading-relaxed">{x.desc}</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Operations</SectionLabel>
        <SlideTitle>Attendance you can prove — reports you can export</SlideTitle>
        <SlideSubtitle>Fix the gap you felt in the previous system: missing fields, weak exports, and unreliable sign-in flows.</SlideSubtitle>
        <div className="grid grid-cols-2 gap-10 mt-8">
          {[
            { icon: "📅", title: "Shifts + attendance together", desc: "Plan shifts, track attendance, and resolve exceptions with clear approvals." },
            { icon: "📥", title: "Exports (Excel / PDF)", desc: "Download structured time tracking reports for internal control and payroll prep." },
            { icon: "🧠", title: "AI on your company data", desc: "Ask operational questions against your own dataset to speed up analysis (availability varies by workspace settings)." },
            { icon: "✅", title: "Approval workflows", desc: "Time off, overtime/banks of hours (where configured), and audit-friendly trails." },
          ].map((f) => (
            <div key={f.title} className="flex gap-5 border border-white/20 p-8">
              <span className="text-[34px] shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-[24px] font-medium mb-2">{f.title}</h4>
                <p className="text-[20px] opacity-60 leading-relaxed">{f.desc}</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Compliance & onboarding</SectionLabel>
        <SlideTitle>Documents, e-signatures, and structured onboarding</SlideTitle>
        <SlideSubtitle>
          Send policies in bulk, collect signatures, and run onboarding tasks so new hires upload IDs and complete onboarding steps in a guided flow.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-12 mt-10">
          <div className="space-y-5">
            {[
              "Bulk document distribution with tracking",
              "Fillable PDFs where needed",
              "Employee inbox for tasks (sign, upload, acknowledge)",
              "Audit trail for sensitive HR documents",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4 border border-white/15 p-6">
                <Check size={22} className="shrink-0 mt-1 opacity-70" />
                <p className="text-[22px] opacity-80">{t}</p>
              </div>
            ))}
          </div>
          <div className="border border-white/20 p-10">
            <h3 className="text-[26px] font-medium mb-4">From “offer accepted” to “ready to work”</h3>
            <p className="text-[20px] opacity-65 leading-relaxed">
              Keep recruitment and onboarding connected: signing the offer, collecting personal data, assigning mandatory training reads, and requesting file uploads into the right folders.
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Talent acquisition</SectionLabel>
        <SlideTitle>Recruitment with jobs postings and candidate experience</SlideTitle>
        <SlideSubtitle>
          Publish roles, capture applicants, and communicate by email — plus channels like WhatsApp where your team hires day-to-day.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {[
            { title: "Job board + landing links", desc: "Share a clean careers URL (also useful if candidates don’t arrive via a job board)." },
            { title: "Indeed / LinkedIn direction", desc: "Bring applicants into one pipeline with consistent screening steps." },
            { title: "5 active jobs package", desc: "Sized for your typical hiring volume; upgrade tiers only if recruiting scales up." },
          ].map((x) => (
            <div key={x.title} className="border border-foreground/15 p-8">
              <h3 className="text-[24px] font-medium mb-3">{x.title}</h3>
              <p className="text-[20px] opacity-60 leading-relaxed">{x.desc}</p>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Finance handoff</SectionLabel>
        <SlideTitle>Factorial prepares payroll inputs — your payroll partner runs payroll</SlideTitle>
        <SlideSubtitle>
          If you want fully processed payslips inside the same system, Factorial is not positioned as the payroll engine in this scope. If you’re open to a best-in-class HR hub + payroll partner, Factorial fits cleanly.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-12 mt-10">
          <div className="border border-white/20 p-10">
            <h3 className="text-[26px] font-medium mb-4">What Factorial covers</h3>
            <ul className="text-[21px] opacity-75 space-y-3">
              <li>• Salaries and compensation data (as configured)</li>
              <li>• Time off/absences and time tracking outputs</li>
              <li>• Exports matched to your payroll provider layout (project milestone)</li>
            </ul>
          </div>
          <div className="border border-white/20 p-10">
            <h3 className="text-[26px] font-medium mb-4">What your payroll partner keeps</h3>
            <ul className="text-[21px] opacity-75 space-y-3">
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investment</SectionLabel>
        <SlideTitle>Monthly estimate (ROW USD · monthly billing)</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Bundle + add-on</h3>
            <div className="border border-foreground/20 p-10 space-y-5">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">{PRICING_ROW_USD.bundleName} ({SEATS} × ${PRICING_ROW_USD.listPricePerSeatPerMonth})</span>
                <span className="font-medium">${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between text-[22px] text-emerald-700 dark:text-emerald-400">
                <span className="opacity-80">Nonprofit license discount ({DISCOUNT_PCT}%)</span>
                <span className="font-medium">−${(PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal).toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-foreground/15 pt-5">
                <span className="opacity-65">Licenses after discount</span>
                <span className="font-medium">${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mo</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Recruitment ({PRICING_ROW_USD.recruitment.tier}) — fixed</span>
                <span className="font-medium">${PRICING_ROW_USD.recruitment.fixedPerMonth.toFixed(2)}/mo</span>
              </div>
              <div className="border-t border-foreground/15 pt-5 space-y-2">
                <p className="text-[20px] opacity-55">Discount applies to Factorial per-seat licenses; recruitment is priced separately.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Totals</h3>
            <div className="space-y-6">
              <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-8 text-center">
                <p className="text-[18px] opacity-55 mb-2">Estimated monthly subscription</p>
                <p className="text-[74px] font-light leading-none">${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}</p>
                <p className="text-[18px] opacity-45 mt-3">per month · USD · excluding taxes/fees if applicable</p>
              </div>

              <div className="border border-foreground/20 p-8">
                <p className="text-[22px] opacity-75 mb-4">Implementation (one-time)</p>
                <div className="space-y-3 text-[21px]">
                  <p className="flex justify-between">
                    <span className="opacity-70">Guided setup (~5 hours) — indicative</span>
                    <span className="font-medium">${PRICING_TOTALS_USD.implementationOneTime.toFixed(0)}</span>
                  </p>
                  <p className="text-[16px] opacity-45">Final implementation scope/quote can be confirmed after data migration size and integrations are validated.</p>
                </div>
              </div>

              <div className="border border-foreground/20 p-6 text-[18px] opacity-55">
                Payment options discussed on the call include card or bank transfer in USD/EUR. Billing details are finalized in the order form.
              </div>
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
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Try it</SectionLabel>
        <SlideTitle>Explore Factorial in a demo workspace</SlideTitle>

        <div className="border-2 border-white/25 bg-white/[0.08] p-8 mb-10 flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="text-[24px] font-medium opacity-90 mb-2">Demo environment</p>
            <p className="text-[20px] opacity-55">
              Login: <span className="font-mono opacity-80">hellen@demob25acc00.com</span> · Password:{" "}
              <span className="font-mono opacity-80">Papapapa333!</span>
            </p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Open demo →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Deep links</h3>
            <div className="space-y-4">
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
                  className="flex items-start gap-4 border border-white/15 p-6 hover:border-white/35 hover:bg-white/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={24} className="opacity-60 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[24px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[19px] opacity-55 mt-1">{f.desc}</p>
                  </div>
                  <span className="text-[18px] opacity-40 group-hover:opacity-70 shrink-0 mt-1 transition-opacity">{f.isDemo ? "Demo" : "Help"}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Why this matches your priorities</h3>
            <div className="space-y-6">
              {[
                { title: "Mobile workflows", desc: "Employees can execute HR tasks without depending on a desktop machine." },
                { title: "Operational reliability", desc: "Designed to reduce missing fields and inconsistent exports vs. manual spreadsheets." },
                { title: "Recruitment connectivity", desc: "Keep hiring structured while staying practical for day-to-day messaging." },
              ].map((g) => (
                <div key={g.title} className="border border-white/15 p-8">
                  <h4 className="text-[26px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[22px] opacity-60">{g.desc}</p>
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
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Overview</SectionLabel>
        <SlideTitle>See the employee experience</SlideTitle>
        <div className="w-[960px] h-[540px] mt-8 max-w-full">
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
    id: "next-steps",
    title: "Next steps",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Next steps</SectionLabel>
        <SlideTitle>How we move forward</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Internal alignment", desc: "Confirm priorities: phase‑1 modules, seat count, and payroll partner export format." },
                { step: "2", title: "Validation workshop (30–45 min)", desc: "Short session with HR + IT/Finance to lock assumptions and timeline." },
                { step: "3", title: "Implementation kickoff", desc: "Guided configuration: policies, approvals, attendance, document templates, and recruiting pipeline." },
                { step: "4", title: "Go-live + hypercare", desc: "Train admins/managers, migrate employees, and stabilize reporting exports to payroll." },
              ].map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center shrink-0">
                    <span className="text-[22px] font-light">{p.step}</span>
                  </div>
                  <div>
                    <h4 className="text-[24px] font-medium mb-1">{p.title}</h4>
                    <p className="text-[20px] opacity-60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border border-foreground/20 bg-foreground/[0.04] p-12 text-center">
              <p className="text-[28px] font-light mb-6">Ready to proceed with Factorial for {ORG}?</p>
              <a
                href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG} | Next steps with Factorial`)}&body=${encodeURIComponent(`Hi Victor,\n\nWe’d like to move forward with Factorial for ${ORG}.\n\nBest regards`)}`}
                className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-[22px] font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={22} />
                Email Victor Gutierrez
              </a>
              <p className="text-[18px] opacity-40 mt-6">victor.gutierrez@factorial.co</p>
            </div>
            <p className="text-center mt-8 text-[16px] opacity-30">Proposal prepared for {ORG} — 2026</p>
          </div>
        </div>
      </div>
    ),
  },
];
