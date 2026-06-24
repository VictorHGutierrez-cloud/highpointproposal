import { Check, ExternalLink } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import {
  CLIENT,
  IMPLEMENTATION,
  PRICING_OPTIONS,
  PRICING_TOTALS_USD,
  RECOMMENDED,
} from "@/utils/constants";

const { seatCount: SEATS, organizationName: ORG } = CLIENT;
const OPTS = [PRICING_OPTIONS.a, PRICING_OPTIONS.b, PRICING_OPTIONS.c];

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
            High Point
            <br />
            Group
            <br />
            HR
          </h1>
        </div>
        <Divider light />
        <p className={`mt-auto max-w-[55ch] ${bodyCls}`}>
          One integrated HR platform for four affiliated companies — replace manual payroll prep, paper leave forms,
          and disconnected clocking with Core, shifts, time off, trainings, and native Sage 50 Cloud Payroll sync.
        </p>
        <p className="text-[clamp(0.85rem,1.3vw,1rem)] opacity-80">
          {SEATS} seats · Africa USD (monthly) · Recommended: {RECOMMENDED.bundle.name} · Partner: {CLIENT.partner}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/30 pt-6">
          <div className="flex h-12 w-12 items-center justify-center border border-white/40 text-xl font-light">
            F
          </div>
          <div>
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] font-medium">Victor Gutierrez</p>
            <p className="text-sm opacity-70">Account Executive, Africa · Factorial</p>
            <p className="text-xs opacity-60 mt-1">Paolo Urzi — Regional Manager, Southern Africa</p>
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
          Four companies.
          <br />
          One manual HR reality.
        </h2>
        <Divider />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`space-y-6 ${bodyCls}`}>
            <p>
              High Point grew from <strong className="font-semibold">two businesses to four</strong> — engineering, steel
              manufacturing, production, mining, and service operations across{" "}
              <strong className="font-semibold">Cape Town and provincial sites</strong> (~{SEATS} employees).
            </p>
            <p>
              Today there is <strong className="font-semibold">no HR system</strong>. Payroll runs on{" "}
              <strong className="font-semibold">Pastel Payroll</strong>, finance on{" "}
              <strong className="font-semibold">Sage 200 Evolution</strong>, and clocking on{" "}
              <strong className="font-semibold">Uniclocks</strong> (facial recognition) — but{" "}
              <strong className="font-semibold">nothing talks to anything else</strong>.
            </p>
            <p>
              Elani and Werner absorb <strong className="font-semibold">hours of manual work</strong> every month:
              print timesheets, re-key data, chase paper leave forms, and hunt documents on servers for ISO and B-BBEE
              audits.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "🏭",
                title: "Multi-site operations",
                desc: "Mines (~30), drivers with variable hours, production workshops, and a service centre — each with different shift patterns.",
              },
              {
                icon: "📋",
                title: "Compliance pressure",
                desc: "ISO standards (Howden audit), B-BBEE certificate cycle, and bargaining council reporting need accurate, exportable workforce data.",
              },
              {
                icon: "🔗",
                title: "Sage ecosystem",
                desc: "Exponent joins as your Sage partner — Factorial syncs compensation to Sage 50 Cloud Payroll with one click.",
              },
              {
                icon: "📱",
                title: "Owner visibility",
                desc: "The business owner is highly involved but distant — needs instant mobile reporting, not month-end surprises.",
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
          Your priorities
          <br />
          from the call
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Based on our conversation with Elani and Werner — aligned to what you need before pitching to the business
          owner.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "⏱️",
              title: "Time & attendance",
              desc: "End printed Uniclocks timesheets and manual re-entry. Integrate existing facial-recognition devices or use mobile/tablet clocking.",
            },
            {
              icon: "📅",
              title: "Shifts & scheduling",
              desc: "Mines, drivers, production — different hour categories today; day and night shifts coming when full production resumes.",
            },
            {
              icon: "🏖️",
              title: "Time off",
              desc: "Replace paper forms with mobile requests, manager approvals, and multi-level workflows (manager → finance).",
            },
            {
              icon: "📁",
              title: "Documents & onboarding",
              desc: "Digital employee folders, compliant e-signatures, expiry alerts (licences, certifications), structured onboarding tasks.",
            },
            {
              icon: "🎓",
              title: "Trainings & ISO",
              desc: "Mandatory training tracking, 30-day expiry warnings, audit-ready document repository for Werner's ISO obligations.",
            },
            {
              icon: "💸",
              title: "Sage 50 Cloud sync",
              desc: "Compose salary, deductions, overtime, and incentives in Factorial — sync to Pastel/Sage 50 Cloud Payroll natively.",
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
          {RECOMMENDED.bundle.name}
          <br />
          ⭐ Recommended
        </h2>
        <Divider light />
        <p className={`max-w-[60ch] ${bodyCls}`}>
          For High Point, <strong>Planning PRO</strong> is the best fit: shifts for mines and production, plus
          Trainings for ISO/B-BBEE, Performance for owner reporting, and Engagement — in one bundle (no à la carte
          modules).
        </p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">What&apos;s included</h3>
            <div className="space-y-4 text-[clamp(0.9rem,1.3vw,1.05rem)] opacity-90">
              <div>
                <p className="mb-2 font-semibold text-white">Core HR</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Four entities in one tenant — unified
                    policies, entity-level segmentation
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Keep existing Pastel employee codes
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Documents, e-signatures, onboarding
                    workflows, bulk Excel import
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Time, shifts & leave</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Uniclocks integration assessment +
                    mobile/tablet facial recognition option
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Shift templates, AI scheduler, publish &
                    notify (push, email, in-app)
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Leave policies, accruals, multi-level
                    approvals
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Trainings · Performance · Engagement</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Training catalogue, mandatory courses,
                    expiry alerts, certificates
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> B-BBEE reporting support (levels 1–8) —
                    built with onboarding consultant
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Factorial One AI — custom reports for owner
                    and Werner
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">Three options (bundles only)</h3>
            {OPTS.map((opt) => (
              <div
                key={opt.id}
                className={`border p-4 ${opt.recommended ? "border-white/50 bg-white/5" : "border-white/15"}`}
              >
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold">
                    Option {opt.id} — {opt.label}
                    {opt.recommended && " ⭐"}
                  </p>
                  <p className="font-light text-lg shrink-0">${opt.monthlyTotal.toFixed(0)}/mo</p>
                </div>
                <p className="text-sm opacity-70 mb-2">{opt.subtitle}</p>
                <p className="text-xs opacity-55">
                  {opt.bundle.name} · {opt.bundle.includes}
                  {opt.addons.length > 0 && ` + ${opt.addons.map((a) => a.name).join(", ")}`}
                </p>
              </div>
            ))}
            <p className="text-xs opacity-50 pt-2 border-t border-white/15">
              Annual billing saves ~8% (e.g. Option B: ${PRICING_OPTIONS.b.annualMonthlyEquiv.toFixed(0)}/mo equivalent).
              Minimum 14 seats — you bill {SEATS}.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 05 Shifts & Uniclocks */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Shifts and time tracking"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>05 — Time & shifts</p>
        <Divider />
        <h2 className={headCls}>
          From printed
          <br />
          timesheets
          <br />
          to live data
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Today: Uniclocks facial recognition → print timesheets → manual payroll entry. Tomorrow: clock data flows
          into Factorial, extra hours compose in Compensation, one-click sync to Sage 50 Cloud.
        </p>
        <Divider />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: "Keep your Uniclocks",
              desc: "Send us the device model — we assess integration so you don't have to buy new hardware. Any camera device (tablet, phone on wall) also works.",
            },
            {
              title: "Shift categories",
              desc: "Separate rules for mines, drivers, and production. AI-assisted scheduling when you launch day and night shifts.",
            },
            {
              title: "Employee notifications",
              desc: "Published shifts reach staff via push notification, email, and in-app inbox — no more 'I didn't know my roster'.",
            },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-black/15 bg-white/60 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 06 Documents & compliance */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Documents and compliance"
        style={{ backgroundColor: "hsl(347 50% 18%)", color: "#fff" }}
      >
        <p className={labelCls}>06 — Compliance</p>
        <Divider light />
        <h2 className={headCls}>
          ISO · B-BBEE
          <br />
          Audit-ready
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Werner&apos;s ISO audit with Howden exposed the risk of paper HR files. Factorial centralises documents,
          tracks training expiries, and supports South Africa B-BBEE reporting — all exportable for consultants.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "📄",
              title: "Document vault",
              desc: "Upload ID on day one from a phone. Searchable folders — trainings, contracts, certifications — with compliant e-signatures.",
            },
            {
              icon: "⚠️",
              title: "Expiry workflows",
              desc: "Custom alerts 30 days before driver licences, certifications, or mandatory training expires — email to manager and HR.",
            },
            {
              icon: "🎓",
              title: "Training sequences",
              desc: "Onboarding task chains from hire date: videos, documents, acknowledgements — tracked from first day on the floor.",
            },
            {
              icon: "📊",
              title: "B-BBEE & equity",
              desc: "SA policy templates and custom reports built with your onboarding consultant — supports certificate phases (levels 1–8).",
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

      {/* 07 Sage integration */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Sage integration"
        style={{ backgroundColor: "#07A2AD", color: "#fff" }}
      >
        <p className={labelCls}>07 — Sage integration</p>
        <Divider light />
        <h2 className={headCls}>
          Factorial +
          <br />
          Sage 50 Cloud
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Native integration built with Sage over three years. Factorial prepares compensation;{" "}
          <strong>Pastel/Sage 50 Cloud Payroll</strong> remains your payroll engine. Exponent supports the finance
          side; Sage 200 Evolution stays for costing (out of scope).
        </p>
        <Divider light />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/30 bg-black/10 p-6">
            <h3 className="mb-3 font-bold uppercase tracking-wide text-sm">What Factorial syncs</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Base salary, deductions, commissions, overtime, incentives</li>
              <li>• Time tracking and absence data — no duplicate entry</li>
              <li>• Employee master updates (retain your existing codes)</li>
              <li>• One-click &quot;Sync&quot; to Sage 50 Cloud Payroll</li>
            </ul>
          </div>
          <div className="border border-white/30 bg-black/10 p-6">
            <h3 className="mb-3 font-bold uppercase tracking-wide text-sm">What stays in Sage</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Payslip generation and statutory payroll execution</li>
              <li>• Sage 200 Evolution for finance / costing / stock</li>
              <li>• Bargaining council system (manual export only)</li>
              <li>• Final bank files and regulatory filings</li>
            </ul>
          </div>
        </div>
      </FlowSection>

      {/* 08 Success vision */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Success vision"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>08 — Success in 12 months</p>
        <Divider light />
        <h2 className={headCls}>
          What changes
          <br />
          for you
        </h2>
        <Divider light />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/20 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Elani — Cape Town HQ</p>
            <p className={`${bodyCls} opacity-90 leading-relaxed`}>
              &quot;An integrated system where everybody on the floor follows the same process — and payroll prep is
              automatic by month-end, not one-by-one leave forms.&quot;
            </p>
          </div>
          <div className="border border-white/20 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Werner — Provincial ops</p>
            <p className={`${bodyCls} opacity-90 leading-relaxed`}>
              &quot;Proper reporting for the owner — see which department costs money, where salaries sit, and stop
              spending days on manual pulls before month-end.&quot;
            </p>
          </div>
        </div>
        <Divider light />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { title: "Owner on mobile", desc: "Silent partner stays informed — instant communication and workforce visibility from his phone." },
            { title: "Hours back for managers", desc: "Elani and Werner recover time currently lost to copy-paste between Pastel, Uniclocks, and paper." },
            { title: "Audit confidence", desc: "ISO and B-BBEE consultants get accurate packs — not a scramble through server folders." },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-white/20 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 09 Investment */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Investment"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>09 — Investment</p>
        <Divider />
        <h2 className={headCls}>
          Africa USD
          <br />
          Monthly
        </h2>
        <Divider />
        <div className="grid gap-6 lg:grid-cols-3 mb-6">
          {OPTS.map((opt) => (
            <div
              key={opt.id}
              className={`border p-5 ${opt.recommended ? "border-black/40 bg-white shadow-md" : "border-black/15 bg-white/70"}`}
            >
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Option {opt.id}</p>
              <h3 className="font-bold text-lg mb-1">
                {opt.label}
                {opt.recommended && " ⭐"}
              </h3>
              <p className="text-3xl font-light mb-2">${opt.monthlyTotal.toFixed(2)}</p>
              <p className="text-xs opacity-60 mb-3">per month · {SEATS} seats</p>
              <p className="text-sm opacity-75 leading-snug mb-2">{opt.bundle.name}</p>
              <p className="text-xs opacity-55">
                Annual equiv.: ${opt.annualMonthlyEquiv.toFixed(2)}/mo
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-black/20 p-6 text-sm space-y-2">
            <p className="font-semibold text-base mb-3">Recommended — Option B breakdown</p>
            <div className="flex justify-between">
              <span className="opacity-70">
                {RECOMMENDED.bundle.name} ({SEATS} × ${RECOMMENDED.bundle.rateMonthly})
              </span>
              <span>${RECOMMENDED.monthlyTotal.toFixed(2)}/mo</span>
            </div>
            <p className="text-xs opacity-50 pt-2">
              Includes Trainings, Performance, and Engagement — no separate module lines.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border-2 border-black/30 bg-black/[0.04] p-6 text-center">
              <p className="text-sm opacity-60 mb-2">Recommended monthly subscription</p>
              <p className="text-[clamp(2.5rem,8vw,4.5rem)] font-light leading-none">
                ${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}
              </p>
              <p className="text-xs opacity-50 mt-2">USD · {SEATS} employees · before taxes if applicable</p>
            </div>
            <div className="border border-black/20 p-5 text-sm space-y-2">
              <p className="font-semibold">Implementation (one-time)</p>
              <p className="flex justify-between">
                <span className="opacity-70">Onboarding &amp; configuration (~{IMPLEMENTATION.timelineDays} days)</span>
                <span className="font-medium">${PRICING_TOTALS_USD.implementationOneTime.toLocaleString()} USD</span>
              </p>
              <p className="text-xs opacity-50 pt-2">
                {IMPLEMENTATION.goLiveRule}. No hidden fees — standard hours included. Exponent aligned for Sage
                integration.
              </p>
            </div>
            <a
              href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG} — Proposal follow-up`)}`}
              className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Reply to confirm <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FlowSection>

      {/* 10 Rollout */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Implementation"
        style={{ backgroundColor: "#3d1522", color: "#fff" }}
      >
        <p className={labelCls}>10 — Rollout</p>
        <Divider light />
        <h2 className={headCls}>
          Go-live in
          <br />
          {IMPLEMENTATION.timelineDays} days
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Phased implementation with Exponent and your onboarding consultant — aligned to your rule:{" "}
          <strong>start at the beginning of a financial month</strong>, not mid-cycle.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { phase: "Weeks 1–2", title: "Discovery", desc: "Map 4 entities, shift rules, Uniclocks spec, Sage 50 mapping, B-BBEE requirements." },
            { phase: "Weeks 2–5", title: "Configure", desc: "Core, time, shifts, leave, trainings, compensation. Import ~100 employees (keep Pastel codes)." },
            { phase: "Weeks 5–7", title: "Test", desc: "UAT with Elani & Werner. Optional parallel payroll cycle. Sage sync validation." },
            { phase: "Weeks 7–8", title: "Go-live", desc: "Admin + manager training. Launch at month start. 30-day hypercare support." },
          ].map((s) => (
            <div key={s.phase} className="border border-white/20 p-4">
              <p className="text-xs opacity-50 mb-1">{s.phase}</p>
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-sm opacity-75 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 11 Demo */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Demo"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
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
                { label: "Shifts (monthly view)", url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1" },
                { label: "Compensation & payroll prep", url: "https://app.eu2.demo.factorial.dev/compensation" },
                { label: "AI reports (Factorial One)", url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question" },
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

      {/* 12 Next steps */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Next steps"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>12 — Next steps</p>
        <Divider />
        <h2 className={headCls}>
          Your
          <br />
          timeline
        </h2>
        <Divider />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { step: "1", title: "Owner meeting (Monday)", desc: "Elani presents this proposal + ROI to the business owner for budget approval." },
            { step: "2", title: "Follow-up call (Friday)", desc: "Victor + Paolo answer questions after internal review. Confirm Uniclocks device models." },
            { step: "3", title: "Contract & kick-off", desc: "Order form signed — implementation starts within ~1 month. Onboarding fee at signature." },
            { step: "4", title: "Go-live at month start", desc: "First payroll cycle in Factorial aligned to financial month boundary — as you requested." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 border border-black/15 bg-white/70 p-5">
              <span className="text-2xl font-light opacity-40">{s.step}</span>
              <div>
                <h4 className="font-semibold mb-1">{s.title}</h4>
                <p className="text-sm opacity-75 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-auto text-sm opacity-60 border-t border-black/10 pt-6">
          Proposal prepared for {ORG} — June 2026 · Prepared for {CLIENT.contacts.champion} &amp;{" "}
          {CLIENT.contacts.operations}
        </p>
      </FlowSection>
    </FlowArt>
  );
}
