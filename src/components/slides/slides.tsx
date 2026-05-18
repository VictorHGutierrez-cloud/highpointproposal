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
        <SectionLabel>Factorial commercial proposal</SectionLabel>
        <h1 className="text-[44px] md:text-[52px] font-light leading-[1.08] mb-4 max-w-[1200px]">{ORG}</h1>
        <p className="text-[17px] md:text-[19px] opacity-80 font-light mb-3">
          Bundle-first plan for a distributed nonprofit: start with the right base package, close only real gaps with add-ons, and go live fast.
        </p>
        <p className="text-[14px] md:text-[15px] opacity-60 font-light">
          {SEATS} employees · ROW USD monthly · {DISCOUNT_PCT}% nonprofit discount on licenses, recruitment, and implementation
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
    id: "golden-rule",
    title: "Golden Rule",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Golden rule #0</SectionLabel>
        <SlideTitle>Always sell and implement bundle-first</SlideTitle>
        <SlideSubtitle>
          We start with one bundle that covers core HR operations, then add add-ons only if a real functional gap appears in validation.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div>
            <div className="border border-foreground/20 p-5 bg-foreground/[0.03]">
              <h3 className="text-[17px] font-medium mb-3">Why this rule protects outcomes</h3>
              <ul className="space-y-2 text-[14px] opacity-75">
                <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Faster implementation and simpler change management</li>
                <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Better cost control from day one</li>
                <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Clear scope for HR, Finance, and managers</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { icon: "1", title: "Default starting point", desc: "Bundle first. Never begin with loose modules as the primary proposal." },
              { icon: "2", title: "Add-ons by evidence", desc: "Add-ons are introduced only when validation proves missing coverage." },
              { icon: "3", title: "Commercial clarity", desc: "Business vs Enterprise differences are shown only when they impact decision quality." },
              { icon: "4", title: "Operational discipline", desc: "The team follows one consistent sales and implementation flow from diagnosis to launch." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 border border-foreground/15 p-3">
                <span className="text-[18px] shrink-0 w-7 h-7 border border-foreground/25 flex items-center justify-center">{item.icon}</span>
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
    id: "pain-diagnosis",
    title: "Diagnosis",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 1: diagnose pain</SectionLabel>
        <SlideTitle>What must be fixed first for {ORG}</SlideTitle>
        <SlideSubtitle>
          Before discussing modules, we confirm where operations are breaking today and which outcomes are most urgent for the team.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            { icon: "📱", title: "Weak mobile experience", desc: "Employees and managers need reliable mobile workflows for daily HR actions." },
            { icon: "⏱️", title: "Remote clock-in reliability", desc: "Time events must be captured correctly for distributed teams and shifts." },
            { icon: "📊", title: "Incomplete reporting", desc: "Operational and payroll-prep reports must be clean, consistent, and exportable." },
            { icon: "🧾", title: "Manual workaround overload", desc: "Spreadsheets and ad-hoc processes create avoidable errors and rework." },
            { icon: "🌍", title: "Distributed consistency", desc: "Policies and approvals should work the same across locations." },
            { icon: "🤝", title: "Budget discipline", desc: "As a nonprofit, spend should stay tied to measurable business need." },
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
    id: "bundle-choice",
    title: "Bundle Choice",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 2: choose the base bundle</SectionLabel>
        <SlideTitle>Recommended starter package for {SEATS} employees</SlideTitle>
        <SlideSubtitle>
          Start with <strong className="opacity-100">{PRICING_ROW_USD.bundleName}</strong>: Core + Time Tracking + Time Off + Shifts. It is the best first-fit baseline for this case.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">Bundle coverage in plain results language</h3>
            <ul className="space-y-2 text-[14px] opacity-75 leading-snug">
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> One source of truth for employee data and HR records</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Reliable attendance and clock-in routines for remote teams</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Clear time-off policies, balances, and approvals</li>
              <li className="flex gap-2"><Check className="shrink-0 mt-0.5" size={16} /> Shift planning where scheduling is operationally critical</li>
            </ul>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">Commercial basis</h3>
            <p className="text-[14px] opacity-75 leading-snug mb-3">
              List price basis for this bundle: <strong className="opacity-100">${PRICING_ROW_USD.listPricePerSeatPerMonth}/employee/month</strong>.
            </p>
            <p className="text-[13px] opacity-65 leading-snug mb-3">
              Nonprofit pricing applies {DISCOUNT_PCT}% discount to licenses, recruitment, and implementation in this proposal.
            </p>
            <p className="text-[12px] opacity-55 leading-snug">
              We only move beyond this bundle after formal coverage validation and gap analysis.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "coverage-validation",
    title: "Coverage Validation",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 3: validate coverage</SectionLabel>
        <SlideTitle>Does the bundle cover core, operations, and people needs?</SlideTitle>
        <SlideSubtitle>
          We validate the bundle against real workflows before discussing any expansion.
        </SlideSubtitle>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {[
            { title: "Core HR foundation", desc: "Profiles, contracts, documents, and access controls support compliance and daily administration." },
            { title: "Operational stability", desc: "Clock-ins, shifts, time off, and approvals operate in one consistent workflow." },
            { title: "People experience", desc: "Employees complete requests and managers approve actions with a clear mobile-first interface." },
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
    id: "gap-analysis",
    title: "Gap Analysis",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 4 and 5: gap analysis and add-ons</SectionLabel>
        <SlideTitle>Add add-ons only when they close a validated gap</SlideTitle>
        <SlideSubtitle>
          Add-ons are surgical: no extra modules unless they directly solve a confirmed business gap.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { icon: "🎯", title: "Likely add-on now", desc: `Recruitment (${PRICING_ROW_USD.recruitment.tier}) if active hiring is recurring.` },
            { icon: "📈", title: "Possible future add-ons", desc: "Engagement, Performance, and Trainings only if future goals require them." },
            { icon: "🧩", title: "No add-on by default", desc: "If the bundle already covers the process, we keep scope simple and focused." },
            { icon: "✅", title: "Decision criterion", desc: "Every add-on must map to a measurable operational or business outcome." },
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
    id: "implementation-flow",
    title: "Implementation Flow",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 6: implementation</SectionLabel>
        <SlideTitle>Simple, guided execution from kickoff to go-live</SlideTitle>
        <SlideSubtitle>
          The implementation path stays practical: clear responsibilities, short cycles, and a target timeline around six weeks.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="space-y-2">
            {[
              "Kickoff and role alignment (HR, Finance, IT)",
              "Bundle setup: Core, Time Tracking, Time Off, Shifts",
              "Data loading and approvals configuration",
              "Pilot and go-live readiness check",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 border border-white/15 p-3">
                <Check size={16} className="shrink-0 mt-0.5 opacity-70" />
                <p className="text-[14px] opacity-80 leading-snug">{t}</p>
              </div>
            ))}
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">Ownership and cadence</h3>
            <p className="text-[13px] opacity-65 leading-snug">
              One implementation specialist leads weekly sessions with your team. Scope is validated in sequence, and only confirmed gaps trigger add-on activation.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "sales-sequence",
    title: "Sales Sequence",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Commercial playbook</SectionLabel>
        <SlideTitle>Seven-step sales flow to keep decisions clear</SlideTitle>
        <SlideSubtitle>
          This is the sequence used in calls and proposals to keep commercial decisions objective and outcome-based.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            { title: "1) Short diagnosis", desc: "Confirm pain points and prioritize what must improve first." },
            { title: "2) Choose base bundle", desc: "Starter or PRO, based on real operational needs." },
            { title: "3) Validate coverage", desc: "Check core, operations, and people requirements." },
            { title: "4) Run gap analysis", desc: "Identify what the bundle does not cover." },
            { title: "5) Add surgical add-ons", desc: "Only to close specific validated gaps." },
            { title: "6) Plan implementation", desc: "Define phases, timeline, and owners." },
            { title: "7) Clear next action", desc: "Issue final proposal and schedule a short confirmation call." },
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
    id: "investment",
    title: "Investment",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Commercial summary</SectionLabel>
        <SlideTitle>Starter package economics for {SEATS} employees</SlideTitle>
        <SlideSubtitle>
          Transparent pricing supports quick decision-making while preserving cost control and implementation simplicity.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">Monthly subscription</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• Bundle list subtotal: ${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mo</li>
              <li>• Bundle after nonprofit discount: ${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mo</li>
              <li>• Recruitment ({PRICING_ROW_USD.recruitment.tier}) after discount: ${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mo</li>
              <li>• Estimated total monthly subscription: ${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}/mo</li>
            </ul>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">One-time implementation</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• List reference: ${PRICING_TOTALS_USD.implementationListOneTime.toFixed(0)}</li>
              <li>• Nonprofit implementation price: ${PRICING_TOTALS_USD.implementationOneTime.toFixed(0)}</li>
              <li>• Delivery cadence: 1 hour per week, about 6 weeks total</li>
              <li>• Final taxes and currency terms confirmed in order form</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "proposal-message",
    title: "Proposal Message",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Ready-to-use wording</SectionLabel>
        <SlideTitle>Proposal message aligned with the bundle-first strategy</SlideTitle>

        <div className="mt-4 border border-foreground/20 bg-foreground/[0.03] p-8 max-w-[1200px]">
          <p className="text-[18px] leading-relaxed font-light">
            “To keep implementation simple and costs controlled, we follow a bundle-first model: we start with a bundle that covers essential HR operations and add add-ons only when there is a specific business need.”
          </p>
          <p className="text-[13px] opacity-60 mt-4">
            Suggested bundle for this case: {PRICING_ROW_USD.bundleName} for {SEATS} employees, with Recruitment ({PRICING_ROW_USD.recruitment.tier}) if recurring active hiring is confirmed.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "next-action",
    title: "Next Action",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Step 7: clear CTA</SectionLabel>
        <SlideTitle>Confirm bundle scope and schedule the final short call</SlideTitle>

        <div className="border-2 border-white/25 bg-white/[0.08] p-4 mb-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-[15px] font-medium opacity-90 mb-1">Recommended decision path</p>
            <p className="text-[12px] opacity-55 leading-snug">Approve the base bundle, confirm any validated gaps, and receive the final proposal version.</p>
          </div>
          <a
            href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG} — Bundle-first final proposal`)}`}
            className="shrink-0 bg-white text-black px-5 py-2.5 text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            Send approval email →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-[16px] font-normal mb-3 opacity-80">What happens after approval</h3>
            <div className="space-y-2">
              {[
                { label: "1) Final proposal sent", desc: "Bundle scope, optional add-ons, and implementation timeline are documented." },
                { label: "2) Commercial confirmation call", desc: "Short call to validate ownership, dates, and billing details." },
                { label: "3) Kickoff booked", desc: "Implementation specialist starts weekly sessions immediately after signature." },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-2 border border-white/15 p-3">
                  <Check size={16} className="opacity-60 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium opacity-90">{f.label}</p>
                    <p className="text-[11px] opacity-55 mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-normal mb-3 opacity-80">Final fit check for this case</h3>
            <div className="space-y-2">
              {[
                { title: "Bundle-first discipline", desc: "Scope starts simple, implementation risk stays low, and costs remain controlled." },
                { title: "Gap-based add-ons", desc: "Recruitment and future modules are activated only when clearly justified." },
                { title: "Clear commercial next step", desc: "Decision makers can approve quickly because the proposal is structured and explicit." },
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
];
