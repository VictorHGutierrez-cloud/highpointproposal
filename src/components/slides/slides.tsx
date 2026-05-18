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
          HR operations for a distributed nonprofit — reliable attendance, clean data, and a strong mobile experience.
        </p>
        <p className="text-[14px] md:text-[15px] opacity-60 font-light">
          {SEATS} seats · ROW USD (monthly) · {DISCOUNT_PCT}% nonprofit discount (licenses, recruitment, implementation) · 5 active jobs
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
              { icon: "📱", title: "Mobile-first", desc: "Employees should complete daily HR tasks on the phone, not only on a desktop." },
              { icon: "🧾", title: "Clean reporting", desc: "Exports you can trust — fewer missing fields and less manual fixing." },
              { icon: "🌍", title: "Distributed team", desc: "Consistent policies and approvals across locations and remote workers." },
              { icon: "🤝", title: "Nonprofit footprint", desc: "Pricing designed to respect mission-driven budgets while staying enterprise-capable." },
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
          You want the fundamental modules first: employee records, documentation, attendance/time tracking, time off, and recruitment — with realistic payroll handoff to your provider.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            { icon: "👤", title: "Employee data & files", desc: "Single source of truth for contracts, IDs, and HR documents — with audit-friendly history." },
            { icon: "⏱️", title: "Time tracking + shifts", desc: "Clock in/out that works for remote teams; shift planning when schedules matter." },
            { icon: "🏖️", title: "Time off & approvals", desc: "Requests, policies, approvers, and a calendar everyone can trust." },
            { icon: "📣", title: "Recruitment (≈3–5 roles)", desc: "Postings, applicants, and messaging — including channels your team already uses." },
            { icon: "💸", title: "Payroll-ready outputs", desc: "Factorial does not run payroll checks here — it prepares the data your payroll partner needs." },
            { icon: "📊", title: "Better operational reporting", desc: "Dashboards and exports (incl. AI-assisted reporting on your own data, where enabled)." },
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
        <SectionLabel>Commercial recommendation</SectionLabel>
        <SlideTitle>Starter Planning (ROW USD)</SlideTitle>
        <SlideSubtitle>
          Best fit for your needs on the price list: <strong className="opacity-100">Core</strong>, <strong className="opacity-100">Time Tracking</strong>,{" "}
          <strong className="opacity-100">Time Off</strong>, and <strong className="opacity-100">Shifts</strong> — before nonprofit discount:{" "}
          <strong className="opacity-100">${PRICING_ROW_USD.listPricePerSeatPerMonth}/seat/month</strong> (Business · monthly).
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">Included in the bundle</h3>
            <ul className="space-y-2 text-[14px] opacity-75 leading-snug">
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Employee platform / Core HR workspace</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Time tracking (mobile + web)</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Time off policies, balances, approvals</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Shift planning & scheduling</li>
            </ul>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">Add-on in this proposal</h3>
            <p className="text-[14px] opacity-75 leading-snug mb-3">
              <strong className="opacity-100">Recruitment — {PRICING_ROW_USD.recruitment.tier}</strong>
              <br />
              Fixed monthly list: <strong className="opacity-100">${PRICING_TOTALS_USD.recruitmentListPerMonth}/mo</strong> → with nonprofit discount:{" "}
              <strong className="opacity-100">${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</strong>.
            </p>
            <p className="text-[12px] opacity-55 leading-snug">
              Optional modules (Performance, Training, etc.) can be activated later.
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
          Your team is remote — the HR experience should feel as easy as any consumer app: clock in/out, request time off, sign documents, and see what requires action in one inbox.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { title: "One login, permission-based", desc: "HR/Admin sees everything; employees see only what they should — no separate “manager licenses” required." },
            { title: "Works without a desk", desc: "Managers can approve on mobile; employees can complete tasks without a corporate machine." },
            { title: "Optional geo controls", desc: "If needed, geofencing can help validate clock-in locations for roles that require it." },
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
        <SlideSubtitle>Fix the gap you felt in the previous system: missing fields, weak exports, and unreliable sign-in flows.</SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { icon: "📅", title: "Shifts + attendance together", desc: "Plan shifts, track attendance, and resolve exceptions with clear approvals." },
            { icon: "📥", title: "Exports (Excel / PDF)", desc: "Download structured time tracking reports for internal control and payroll prep." },
            { icon: "🧠", title: "AI on your company data", desc: "Ask operational questions against your own dataset (availability varies by workspace)." },
            { icon: "✅", title: "Approval workflows", desc: "Time off, overtime/banks of hours (where configured), and audit-friendly trails." },
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
          Send policies in bulk, collect signatures, and run onboarding tasks so new hires upload IDs and complete onboarding steps in a guided flow.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="space-y-2">
            {[
              "Bulk document distribution with tracking",
              "Fillable PDFs where needed",
              "Employee inbox for tasks (sign, upload, acknowledge)",
              "Audit trail for sensitive HR documents",
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
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Talent acquisition</SectionLabel>
        <SlideTitle>Recruitment with jobs postings and candidate experience</SlideTitle>
        <SlideSubtitle>
          Publish roles, capture applicants, and communicate by email — plus channels like WhatsApp where your team hires day-to-day.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { title: "Job board + landing links", desc: "Share a clean careers URL (also useful if candidates don’t arrive via a job board)." },
            { title: "Indeed / LinkedIn direction", desc: "Bring applicants into one pipeline with consistent screening steps." },
            { title: "5 active jobs package", desc: "Sized for your typical hiring volume; upgrade tiers only if recruiting scales up." },
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
              <li>• Salaries and compensation data (as configured)</li>
              <li>• Time off/absences and time tracking outputs</li>
              <li>• Exports matched to your payroll provider layout (project milestone)</li>
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
                <p className="text-[10px] opacity-45 leading-snug">Guided setup (~5 hours). Final scope confirmed in the order form.</p>
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
                { title: "Mobile workflows", desc: "Employees can execute HR tasks without depending on a desktop machine." },
                { title: "Operational reliability", desc: "Designed to reduce missing fields and inconsistent exports vs. manual spreadsheets." },
                { title: "Recruitment connectivity", desc: "Keep hiring structured while staying practical for day-to-day messaging." },
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
    id: "next-steps",
    title: "Next steps",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Next steps</SectionLabel>
        <SlideTitle>How we move forward</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <div className="space-y-3">
              {[
                { step: "1", title: "Internal alignment", desc: "Confirm priorities: phase‑1 modules, seat count, and payroll partner export format." },
                { step: "2", title: "Validation workshop (30–45 min)", desc: "Short session with HR + IT/Finance to lock assumptions and timeline." },
                { step: "3", title: "Implementation kickoff", desc: "Guided configuration: policies, approvals, attendance, document templates, and recruiting pipeline." },
                { step: "4", title: "Go-live + hypercare", desc: "Train admins/managers, migrate employees, and stabilize reporting exports to payroll." },
              ].map((p) => (
                <div key={p.step} className="flex gap-3 items-start">
                  <div className="w-9 h-9 border border-foreground/30 flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-light">{p.step}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-medium mb-0.5">{p.title}</h4>
                    <p className="text-[12px] opacity-60 leading-snug">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border border-foreground/20 bg-foreground/[0.04] p-6 text-center">
              <p className="text-[17px] font-light mb-4">Ready to proceed with Factorial for {ORG}?</p>
              <a
                href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG} | Next steps with Factorial`)}&body=${encodeURIComponent(`Hi Victor,\n\nWe’d like to move forward with Factorial for ${ORG}.\n\nBest regards`)}`}
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email Victor Gutierrez
              </a>
              <p className="text-[12px] opacity-40 mt-4">victor.gutierrez@factorial.co</p>
            </div>
            <p className="text-center mt-4 text-[11px] opacity-30">Proposal prepared for {ORG} — 2026</p>
          </div>
        </div>
      </div>
    ),
  },
];
