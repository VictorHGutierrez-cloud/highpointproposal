import { Check, ExternalLink } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CLIENT, PRICING_ROW_USD, PRICING_TOTALS_USD } from "@/utils/constants";

const { seatCount: SEATS, licenseDiscountPercent: DISCOUNT_PCT, organizationName: ORG } = CLIENT;

function Divider({ light }: { light?: boolean }) {
  return (
    <hr
      className={
        light
          ? "my-[2vw] border-none border-t border-white/50"
          : "my-[2vw] border-none border-t border-black/40"
      }
    />
  );
}

const labelCls = "text-xs font-bold uppercase tracking-[0.2em]";
const headCls =
  "text-[clamp(2.25rem,8vw,6.5rem)] font-bold leading-[0.9] uppercase tracking-tight";
const bodyCls = "text-[clamp(1rem,2.2vw,1.75rem)] font-normal leading-relaxed";
const cardTitleCls = "mb-2 text-sm font-bold uppercase tracking-wider";
const cardBodyCls = "text-[clamp(0.9rem,1.4vw,1.15rem)] leading-relaxed opacity-80";

export default function ProposalFlow() {
  return (
    <FlowArt aria-label={`Factorial proposal for ${ORG}`}>
      {/* 01 Cover */}
      <FlowSection aria-label="Cover" style={{ backgroundColor: "#FF355E", color: "#fff" }}>
        <p className={labelCls}>01 — Factorial proposal</p>
        <Divider light />
        <div>
          <h1 className={headCls}>
            {ORG}
            <br />
            HR
            <br />
            Reimagined
          </h1>
        </div>
        <Divider light />
        <p className={`mt-auto max-w-[55ch] ${bodyCls}`}>
          Starter Planning (Enterprise) plus Recruitment — one integrated workspace: Core, attendance, time off,
          shifts, and hiring for your distributed team.
        </p>
        <p className={`text-[clamp(0.85rem,1.3vw,1rem)] opacity-80`}>
          {SEATS} seats · ROW USD (monthly) · {DISCOUNT_PCT}% nonprofit discount (licenses, recruitment,
          implementation) · Recruitment: {PRICING_ROW_USD.recruitment.tier}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/30 pt-6">
          <div className="flex h-12 w-12 items-center justify-center border border-white/40 text-xl font-light">
            F
          </div>
          <div>
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] font-medium">Victor Gutierrez</p>
            <p className="text-sm opacity-70">Business Development · Factorial</p>
          </div>
        </div>
      </FlowSection>

      {/* 02 Context */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Context"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>02 — Context</p>
        <Divider />
        <h2 className={headCls}>
          Why a new
          <br />
          HR system
        </h2>
        <Divider />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`space-y-6 ${bodyCls}`}>
            <p>
              Your team works <strong className="font-semibold">across the country, mostly remote</strong>. The
              previous HR tool had a <strong className="font-semibold">weak mobile experience</strong>, and key
              workflows — especially <strong className="font-semibold">reports and attendance</strong> — were
              unreliable.
            </p>
            <p>
              You moved to <strong className="font-semibold">manual processes</strong> to keep control, but that
              creates extra work and errors when managers and Finance need trustworthy records.
            </p>
            <p>
              As a <strong className="font-semibold">registered nonprofit</strong>, this proposal applies{" "}
              <strong className="font-semibold">{DISCOUNT_PCT}%</strong> to{" "}
              <strong className="font-semibold">licenses</strong>, <strong className="font-semibold">recruitment</strong>
              , and <strong className="font-semibold">implementation</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📱",
                title: "Mobile-first",
                desc: "Clock in/out, request time off, sign documents, and complete tasks from the Factorial app.",
              },
              {
                icon: "🧾",
                title: "Complete records",
                desc: "Timesheets, attendance dashboards, and HR exports with the fields managers and Finance need.",
              },
              {
                icon: "🌍",
                title: "One system",
                desc: "Employee data, shifts, absences, and documents in a single place — not spreadsheets.",
              },
              {
                icon: "🤝",
                title: "Nonprofit pricing",
                desc: `${DISCOUNT_PCT}% discount on licenses, recruitment, and implementation.`,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 border border-black/15 bg-white/50 p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-[clamp(0.85rem,1.2vw,1rem)] opacity-75 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FlowSection>

      {/* 03 Priorities */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="What you asked for"
        style={{ backgroundColor: "hsl(347 50% 18%)", color: "#fff" }}
      >
        <p className={labelCls}>03 — What you asked for</p>
        <Divider light />
        <h2 className={headCls}>
          Core HR
          <br />
          First
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Employee records and documents, reliable remote attendance, time off, shift planning, hiring (~3–5 open
          roles), and clean data handoff to your payroll provider.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "👤",
              title: "Core HR",
              desc: "Directory, contracts, org chart, permissions, cloud documents, e-signatures, onboarding workflows.",
            },
            {
              icon: "⏱️",
              title: "Time tracking",
              desc: "Mobile clock-in/out with geolocation, timesheet approval, real-time attendance, exports.",
            },
            {
              icon: "📅",
              title: "Shifts",
              desc: "Bulk shifts, templates, breaks, conflict warnings, mobile schedule review.",
            },
            {
              icon: "🏖️",
              title: "Time off",
              desc: "Requests and approvals on web and app; policies, balances, calendars, attachments.",
            },
            {
              icon: "📣",
              title: "Recruitment",
              desc: "Career page, pipeline, Indeed/LinkedIn, email and WhatsApp — ~5 active jobs.",
            },
            {
              icon: "💸",
              title: "Payroll handoff",
              desc: "Factorial does not run local payroll here — it centralizes data your partner can use.",
            },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-4">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-2 font-semibold text-[clamp(1rem,1.4vw,1.15rem)]">{f.title}</h3>
              <p className="mt-1 text-[clamp(0.85rem,1.2vw,1rem)] opacity-70 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 04 Package */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Recommended package"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>04 — Recommended package</p>
        <Divider light />
        <h2 className={headCls}>
          {PRICING_ROW_USD.bundleName}
          <br />
          Enterprise
        </h2>
        <Divider light />
        <p className={`max-w-[60ch] ${bodyCls}`}>
          One monthly package for {SEATS} employees: <strong>Core</strong>, <strong>Time Tracking</strong>,{" "}
          <strong>Time Off</strong>, and <strong>Shifts</strong> — list{" "}
          <strong>${PRICING_ROW_USD.listPricePerSeatPerMonth}/seat/month</strong> before your nonprofit discount.
        </p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">In the bundle</h3>
            <div className="space-y-4 text-[clamp(0.9rem,1.3vw,1.05rem)] opacity-90">
              <div>
                <p className="mb-2 font-semibold text-white">Core</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Directory, contracts, org chart, teams
                    & permissions
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Cloud documents, bulk send, legally valid
                    e-signatures
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Onboarding/offboarding with tasks and file
                    collection
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> HR and custom reports; payroll-ready
                    change exports
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Time tracking & shifts</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Clock-in/out on mobile and web; geolocation;
                    optional location alerts
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Timesheet approval; live attendance
                    dashboard; Excel/PDF exports
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Overtime rules, bank of hours, shift
                    planning with conflict warnings
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Time off</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Requests and approvals; policy-based
                    balances
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Team calendars; multi-level approvals;
                    document attachments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">Recruitment add-on</h3>
            <p className={`${bodyCls} opacity-90`}>
              <strong>{PRICING_ROW_USD.recruitment.tier}</strong> — ATS for typical hiring volume (~3–5 open roles).
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.3vw,1.05rem)] opacity-90">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Branded career page and customizable hiring stages
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Indeed and LinkedIn; one candidate pipeline
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Email and WhatsApp; notes and feedback per profile
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Hires flow into Core onboarding (data, documents, tasks)
              </li>
            </ul>
            <p className="border-t border-white/20 pt-4 text-sm opacity-70">
              List <strong>${PRICING_TOTALS_USD.recruitmentListPerMonth}/mo</strong> → nonprofit:{" "}
              <strong>${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</strong>
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 05 Mobile */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Mobile experience"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>05 — Mobile experience</p>
        <Divider />
        <h2 className={headCls}>
          Built for
          <br />
          Phones
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Remote employees use the Factorial app for daily HR: clock in/out with geolocation, request time off, sign
          documents, and complete onboarding tasks from one inbox.
        </p>
        <Divider />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: "One login, roles",
              desc: "HR sees everything; managers approve their scope; employees see only their data — no extra license types.",
            },
            {
              title: "Tasks in one inbox",
              desc: "Signatures, time-off reviews, uploads, and onboarding steps as actionable mobile tasks.",
            },
            {
              title: "Location-aware",
              desc: "Work locations per employee; optional geofencing alerts when you need stricter validation.",
            },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-black/15 bg-white/60 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 06 Attendance */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Attendance and reporting"
        style={{ backgroundColor: "hsl(347 50% 18%)", color: "#fff" }}
      >
        <p className={labelCls}>06 — Operations</p>
        <Divider light />
        <h2 className={headCls}>
          Attendance
          <br />
          You trust
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Validated timesheets, live attendance visibility, and exports your Finance team can use — not half-empty
          reports.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "📅",
              title: "Shifts linked to attendance",
              desc: "Templates, bulk edits, breaks, conflicts, absences aligned with the schedule.",
            },
            {
              icon: "📥",
              title: "Timesheets & exports",
              desc: "Approval, autofill where configured, detailed Excel/PDF exports.",
            },
            {
              icon: "📊",
              title: "Live attendance",
              desc: "Who clocked in, who is missing, location, breaks — in real time.",
            },
            {
              icon: "⏱️",
              title: "Overtime & bank",
              desc: "Rules for overtime and special hours; balance extra time with your policies.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 border border-white/20 p-4">
              <span className="text-3xl shrink-0">{f.icon}</span>
              <div>
                <h4 className="font-semibold text-[clamp(1rem,1.4vw,1.1rem)]">{f.title}</h4>
                <p className="mt-1 text-[clamp(0.85rem,1.2vw,1rem)] opacity-75 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 07 Documents */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Documents and onboarding"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>07 — Documents & onboarding</p>
        <Divider light />
        <h2 className={headCls}>
          Sign &
          <br />
          Onboard
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Centralize HR files, collect legally valid e-signatures, and run structured onboarding so new hires submit IDs
          and complete tasks without email chaos.
        </p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="space-y-3 text-[clamp(0.9rem,1.3vw,1.05rem)]">
            {[
              "Employee directory, contracts, and org chart in one workspace",
              "Send, sign, and track documents in bulk (desktop and mobile)",
              "Guided onboarding/offboarding workflows with assigned tasks",
              "Super-task to collect IDs and files into the right folders",
              "Custom roles and permissions — control who sees and approves what",
            ].map((t) => (
              <li key={t} className="flex gap-3 border border-white/15 p-3">
                <Check className="mt-1 h-4 w-4 shrink-0 opacity-80" />
                <span className="opacity-90">{t}</span>
              </li>
            ))}
          </ul>
          <div className="border border-white/20 p-6">
            <h3 className="text-lg font-semibold mb-3">From offer accepted to day one</h3>
            <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] opacity-80 leading-relaxed">
              After you hire in Recruitment, onboarding continues in Core: offer and personal data, signatures, and
              uploads — so the employee can clock in and request time off on day one.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 08 Recruitment */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Recruitment"
        style={{ backgroundColor: "#07A2AD", color: "#fff" }}
      >
        <p className={labelCls}>08 — Talent acquisition</p>
        <Divider light />
        <h2 className={headCls}>
          Hire
          <br />
          Smarter
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Publish roles, manage candidates in one ATS, and reach people on Indeed, LinkedIn, email, or WhatsApp —
          sized for about five active jobs at a time.
        </p>
        <Divider light />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: "Career page",
              desc: "Branded careers URL, customizable application forms, job catalog aligned with your teams.",
            },
            {
              title: "Indeed & LinkedIn",
              desc: "One pipeline with tags, notes, and hiring stages managers can follow.",
            },
            {
              title: "Communication",
              desc: "Email from Factorial, WhatsApp outreach, hiring metrics (time-to-hire, sources, funnel).",
            },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-white/30 bg-black/10 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 09 Payroll */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Finance and payroll handoff"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>09 — Finance handoff</p>
        <Divider />
        <h2 className={headCls}>
          Payroll
          <br />
          Partner
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Factorial prepares payroll inputs — your payroll partner runs payroll. If you need fully processed payslips
          inside one system, we position as an HR hub alongside a payroll provider.
        </p>
        <Divider />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-black/15 bg-white/70 p-6">
            <h3 className="mb-3 font-bold uppercase tracking-wide text-sm">What Factorial covers</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Contract and employee updates that affect payroll</li>
              <li>• Time tracking, absences, overtime, bank-of-hours outputs</li>
              <li>• Guided payroll cycle collaboration and exports</li>
              <li>• Custom reports and change exports for your provider&apos;s format</li>
            </ul>
          </div>
          <div className="border border-black/15 bg-white/70 p-6">
            <h3 className="mb-3 font-bold uppercase tracking-wide text-sm">What your partner keeps</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Payslip generation and statutory compliance</li>
              <li>• Bank files / regulatory filings (as applicable)</li>
              <li>• Authoritative accounting entries (per your finance stack)</li>
            </ul>
          </div>
        </div>
      </FlowSection>

      {/* 10 Investment */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Investment"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>10 — Investment</p>
        <Divider light />
        <h2 className={headCls}>
          ROW USD
          <br />
          Monthly
        </h2>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3 border border-white/20 p-6 text-[clamp(0.9rem,1.25vw,1.05rem)]">
            <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Monthly subscription</h3>
            <div className="flex justify-between gap-2 border-b border-white/10 pb-2">
              <span className="opacity-80">
                {PRICING_ROW_USD.bundleName} ({SEATS} × ${PRICING_ROW_USD.listPricePerSeatPerMonth})
              </span>
              <span className="font-medium">${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mo</span>
            </div>
            <div className="flex justify-between gap-2 text-emerald-400">
              <span>Nonprofit discount ({DISCOUNT_PCT}%)</span>
              <span>
                −$
                {(PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal).toFixed(2)}/mo
              </span>
            </div>
            <div className="flex justify-between gap-2 pt-2 font-medium">
              <span className="opacity-80">Licenses after discount</span>
              <span>${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mo</span>
            </div>
            <div className="flex justify-between gap-2 pt-2 border-t border-white/10">
              <span className="opacity-80">Recruitment ({PRICING_ROW_USD.recruitment.tier}) — list</span>
              <span>${PRICING_TOTALS_USD.recruitmentListPerMonth.toFixed(2)}/mo</span>
            </div>
            <div className="flex justify-between gap-2 text-emerald-400">
              <span>Nonprofit discount ({DISCOUNT_PCT}%)</span>
              <span>
                −$
                {(
                  PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal
                ).toFixed(2)}
                /mo
              </span>
            </div>
            <div className="flex justify-between gap-2 pt-2 font-medium border-t border-white/10">
              <span className="opacity-80">Recruitment after discount</span>
              <span>${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-2 border-white/30 bg-white/5 p-6 text-center">
              <p className="text-sm opacity-70 mb-2">Estimated monthly subscription</p>
              <p className="text-[clamp(2.5rem,8vw,4.5rem)] font-light leading-none">
                ${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}
              </p>
              <p className="text-xs opacity-50 mt-2">USD · before taxes/fees if applicable</p>
            </div>
            <div className="border border-white/20 p-5 text-sm space-y-2">
              <p className="font-semibold">Implementation (one-time)</p>
              <p className="flex justify-between">
                <span className="opacity-70">List (reference)</span>
                <span>${PRICING_TOTALS_USD.implementationListOneTime.toFixed(0)}</span>
              </p>
              <p className="flex justify-between text-emerald-400">
                <span>Nonprofit discount ({DISCOUNT_PCT}%)</span>
                <span>
                  −$
                  {(
                    PRICING_TOTALS_USD.implementationListOneTime - PRICING_TOTALS_USD.implementationOneTime
                  ).toFixed(0)}
                </span>
              </p>
              <p className="flex justify-between border-t border-white/15 pt-2 font-medium">
                <span>Your price</span>
                <span>${PRICING_TOTALS_USD.implementationOneTime.toFixed(0)} USD</span>
              </p>
              <p className="text-xs opacity-50 pt-2">
                ~1 hour/week with your Specialist; ~1.5 months to go-live. Final scope in the order form.
              </p>
            </div>
            <p className="text-sm opacity-60">Card or bank transfer in USD/EUR as agreed.</p>
            <a
              href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG} — Proposal confirmation`)}`}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Reply to confirm <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FlowSection>

      {/* 11 Demo + video */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Demo and product overview"
        style={{ backgroundColor: "#3d1522", color: "#fff" }}
      >
        <p className={labelCls}>11 — Try it</p>
        <Divider light />
        <h2 className={headCls}>
          Demo &
          <br />
          Overview
        </h2>
        <Divider light />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <p className={bodyCls}>Explore Factorial in a demo workspace, or watch a short product overview.</p>
            <div className="flex flex-col gap-4 border border-white/20 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold mb-1">Demo login</p>
                <p className="text-xs sm:text-sm opacity-70 font-mono break-all">
                  hellen@demob25acc00.com · Papapapa333!
                </p>
              </div>
              <a
                href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center bg-white px-5 py-2.5 text-sm font-medium text-black hover:opacity-90"
              >
                Open demo
              </a>
            </div>
            <div className="space-y-2">
              {[
                {
                  label: "Shifts (monthly)",
                  url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1",
                },
                {
                  label: "Time off approvals (Help Center)",
                  url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939",
                },
                {
                  label: "AI reports (demo)",
                  url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/15 p-3 text-sm hover:bg-white/5"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 opacity-70" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full flex-1 max-w-3xl aspect-video border-2 border-white/25">
            <iframe
              title="Factorial product overview"
              src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </FlowSection>

      {/* 12 Onboarding */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Implementation"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>12 — Implementation</p>
        <Divider />
        <h2 className={headCls}>
          How we
          <br />
          Go live
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Structured weekly sessions so your team adopts Factorial confidently — without overwhelming day-to-day work.
        </p>
        <Divider />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-black/15 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">During implementation</p>
            <h3 className="text-lg font-semibold mb-3">Dedicated Onboarding Specialist</h3>
            <p className="text-[clamp(0.95rem,1.35vw,1.05rem)] opacity-80 mb-4 leading-relaxed">
              Your Specialist configures Starter Planning: Core, Time Tracking, Time Off, Shifts, Recruitment basics,
              and payroll-ready exports.
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.2vw,1rem)]">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> One live session per week
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Each session: 1 hour, actionable
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> ~1.5 months (≈6 weeks) to go-live
              </li>
            </ul>
          </div>
          <div className="border border-black/15 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">After go-live</p>
            <h3 className="text-lg font-semibold mb-3">Your Account Manager</h3>
            <p className="text-[clamp(0.95rem,1.35vw,1.05rem)] opacity-80 mb-4 leading-relaxed">
              One named contact for adoption, renewals, and growing the platform — not a faceless ticket queue.
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.2vw,1rem)]">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Specialist first, then one Account Manager
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Ongoing alignment on usage and next modules
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-auto text-sm opacity-60 border-t border-black/10 pt-6">
          Proposal prepared for {ORG} — 2026 · Scroll experience; reduce motion in system settings for a simpler view.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
