import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "JobCompare6300 — Android Demo App — Jie Yang",
  description: "Android app built in Java. Layered architecture with SQLite persistence, cost-of-living salary normalization, and a configurable weighted scoring engine.",
}

export default function AndroidDemoApp() {
  return (
    <main className="pb-24">

      {/* Back nav */}
      <div className="max-w-[900px] mx-auto px-6 pt-10 pb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </a>
      </div>

      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <div className="pb-16 border-b border-[#2a2d36]">
          <span className="inline-block bg-[#6c8eff1a] text-[#6c8eff] border border-[#6c8eff4d] rounded-full px-3.5 py-1 text-xs font-semibold tracking-widest uppercase mb-5">
            CS 6300 · Spring 2025 · Team 129
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#fafafa] mb-5">
            Job<span className="text-[#6c8eff]">Compare</span>6300
          </h1>
          <p className="text-lg text-[#7b7f8f] max-w-[600px] mb-10">
            Android app built in Java. Layered architecture with SQLite persistence,
            singleton domain objects, cost-of-living salary normalization, and a
            configurable weighted scoring engine.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Language", value: "Java 17" },
              { label: "Target SDK", value: "Android API 34" },
              { label: "Storage", value: "SQLite (on-device)" },
              { label: "UI", value: "Material Design Components" },
              { label: "Build", value: "Gradle" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] uppercase tracking-widest text-[#7b7f8f]">{m.label}</span>
                <span className="text-sm font-semibold text-[#fafafa]">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Demo ── */}
        <section id="demo" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Demo</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">App Walkthrough</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            A short video walkthrough of the full user flow — from adding a current job to viewing the comparison table.
          </p>
          <div className="bg-[#1a1d27] border-2 border-dashed border-[#2e3250] rounded-xl aspect-video flex flex-col items-center justify-center gap-4 text-[#7b7f8f] mb-3">
            <div className="w-14 h-14 rounded-full bg-[#6c8eff1a] border border-[#6c8eff40] flex items-center justify-center text-2xl">▶</div>
            <p className="text-sm"><strong className="text-[#fafafa]">Video demo coming soon</strong></p>
            <p className="text-sm">Replace this block with your video or YouTube embed</p>
          </div>
          <p className="text-sm text-[#7b7f8f] text-center">
            Full app demo — JobCompare6300 on Android Emulator, Spring 2025
          </p>
        </section>

        {/* ── Screen Flow ── */}
        <section id="screens" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">UI Flow</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">Activity Navigation</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8 max-w-[650px]">
            Six Activities. All navigation routes back through MainMenu. The Compare Jobs button is conditionally enabled based on a data count check at runtime.
          </p>
          <div className="flex flex-wrap gap-px bg-[#2e3250] rounded-xl overflow-hidden mb-6">
            {[
              { num: 1, name: "MainMenu.java", desc: "Launches each Activity via Intent. Queries job count to enable/disable Compare button." },
              { num: 2, name: "current_job_activity", desc: "Pre-populates form from DB if a current job exists. Writes to jobs table on save." },
              { num: 3, name: "job_offer_activity", desc: "Inserts new row into jobs table. Optionally launches compare result directly." },
              { num: 4, name: "comparison_settings", desc: "Reads/writes the single row in comparison_settings table via ComparisonSettings singleton." },
              { num: 5, name: "compare_jobs", desc: "Calls JobComparison.getRankedJobs() to sort and display. Passes two selected IDs to result." },
              { num: 6, name: "compare_result", desc: "Reads ComparisonData from singleton. Renders a 10-field comparison table." },
            ].map((s) => (
              <div key={s.num} className="flex-1 min-w-[150px] bg-[#1a1d27] px-4 py-5 text-center">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#6c8eff1a] border border-[#6c8eff4d] text-[#6c8eff] text-xs font-bold mb-2.5">{s.num}</div>
                <div className="text-sm font-semibold text-[#fafafa] mb-1">{s.name}</div>
                <p className="text-xs text-[#7b7f8f] leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architecture ── */}
        <section id="architecture" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Architecture</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">App Structure</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8 max-w-[650px]">
            Three layers: Activities own UI and navigation logic, domain Classes hold business logic and are accessed as singletons, and Database helpers wrap SQLite via SQLiteOpenHelper.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { layer: "UI Layer", chips: ["MainMenu.java", "current_job_activity.java", "job_offer_activity.java", "comparison_settings.java", "compare_jobs.java", "compare_result.java"] },
              { layer: "Domain Layer", chips: ["Job.java", "JobComparison.java", "ComparisonSettings.java", "ComparisonData (inner)"] },
              { layer: "Data Layer", chips: ["JobDatabase.java", "JobDatabaseHelper.java", "ComparisonSettingsDatabaseHelper.java", "SQLite (on-device)"] },
            ].map((row) => (
              <div key={row.layer} className="grid grid-cols-[140px_1fr] gap-4 items-start max-[640px]:grid-cols-1">
                <div className="py-3 px-3 bg-[#6c8eff12] border border-[#6c8eff33] rounded-lg text-center text-xs font-bold uppercase tracking-wider text-[#6c8eff] flex items-center justify-center">
                  {row.layer}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.chips.map((chip) => (
                    <span key={chip} className="bg-[#22263a] border border-[#2e3250] rounded-lg px-3.5 py-2 text-sm font-mono text-[#fafafa]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#fafafa] mb-4">Domain Classes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Job.java", desc: "Plain Java model. Exposes computed getters: calculateAdjustedYearlySalary(), calculateAdjustedYearlyBonus(), calculateHealthInsurance(), calculateEmployeeDiscount()." },
              { name: "JobComparison.java", desc: "Application-scoped singleton. Accepts job list and weight list. rankJobs() sorts by score. compareJobs() populates ComparisonData POJO." },
              { name: "ComparisonSettings.java", desc: "Application-scoped singleton. Wraps ComparisonSettingsDatabaseHelper. Inserts default row (all weights = 1) if empty." },
            ].map((c) => (
              <div key={c.name} className="bg-[#1a1d27] border border-[#2e3250] rounded-xl p-6">
                <h4 className="font-mono text-[#6c8eff] font-semibold mb-2">{c.name}</h4>
                <p className="text-sm text-[#7b7f8f] leading-6">{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#fafafa] mb-4">Database Schema</h3>
          <div className="space-y-4">
            <div className="bg-[#22263a] border border-[#2e3250] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2e3250] px-4 py-2.5 text-xs font-bold text-[#6c8eff] font-mono">TABLE: jobs</div>
              {[
                ["id", "INTEGER PK", "Auto-increment"],
                ["is_current_job", "INTEGER", "Boolean flag (0/1)"],
                ["title, company, location", "TEXT", "Job identifiers"],
                ["cost_of_living", "INTEGER", "Index used for salary adjustment"],
                ["yearly_salary, yearly_bonus", "REAL", "Pre-adjustment raw values"],
              ].map(([col, type, note]) => (
                <div key={col} className="grid grid-cols-[1fr_0.6fr_2fr] gap-2 px-4 py-2 border-b border-[#2e3250] last:border-0 text-xs font-mono max-[640px]:grid-cols-[1fr_0.6fr]">
                  <span className="text-[#fafafa]">{col}</span>
                  <span className="text-[#fbbf24]">{type}</span>
                  <span className="text-[#7b7f8f] max-[640px]:hidden">{note}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#22263a] border border-[#2e3250] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2e3250] px-4 py-2.5 text-xs font-bold text-[#6c8eff] font-mono">TABLE: comparison_settings</div>
              {["salary_weight", "bonus_weight", "tuition_weight", "health_weight", "discount_weight", "adoption_weight"].map((col) => (
                <div key={col} className="grid grid-cols-[1fr_0.6fr] gap-2 px-4 py-2 border-b border-[#2e3250] last:border-0 text-xs font-mono">
                  <span className="text-[#fafafa]">{col}</span>
                  <span className="text-[#fbbf24]">INTEGER (Default: 1)</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scoring ── */}
        <section id="scoring" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Scoring Formula</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">Weighted Scoring Implementation</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            calculateScore(Job) in JobComparison.java computes a double score per job. Each term divides its weight by 9 (max weight) so the scale is invariant to the absolute weight values.
          </p>
          <div className="bg-[#22263a] border border-[#2e3250] rounded-xl p-6 font-mono text-sm text-[#6c8eff] leading-8 overflow-x-auto mb-6">
            <span className="text-[#7b7f8f] italic">// Weighted Job Score</span>
            <br />
            score = (salaryWeight/9) × adjustedYearlySalary
            <br />
            + (bonusWeight/9) × adjustedYearlyBonus
            <br />
            + (tuitionWeight/9) × tuitionReimbursement
            <br />
            + (healthWeight/9) × (healthInsurance + adjustedSalary × 0.02)
            <br />
            + (discountWeight/9) × employeeDiscount
            <br />
            + (adoptionWeight/9) × (childAdoptionAssistance / 5)
            <br /><br />
            <span className="text-[#7b7f8f] italic">// Cost-of-living adjustment</span>
            <br />
            adjustedSalary = yearlySalary × (100 / costOfLivingIndex)
            <br />
            adjustedBonus = yearlyBonus × (100 / costOfLivingIndex)
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Features</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">Implemented Functionality</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8 max-w-[650px]">
            Five functional areas, each mapping to one or more Activities and domain methods.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Current Job — Enter & Edit", desc: "current_job_activity loads existing data via JobDatabaseHelper.getCurrentJob() and pre-fills all 10 fields. Client-side validation before insert/update." },
              { title: "Job Offers — Insert & Shortcut Compare", desc: "job_offer_activity always inserts new row (isCurrentJob = false). After save, enables inline Compare with Current Job button if current job exists." },
              { title: "Comparison Settings — Persistent Weights", desc: "comparison_settings reads singleton weight array. Validates each field as integer in [1, 9] before writing to SQLite." },
              { title: "Ranked Job List", desc: "compare_jobs fetches all jobs, passes to JobComparison, calls getRankedJobs(). ListView adapter marks the current job entry." },
              { title: "Side-by-Side Comparison Table", desc: "compare_result calls JobComparison.compareJobs(jobA, jobB), reads ComparisonData to fill 10-row table." },
            ].map((uc, i) => (
              <div key={uc.title} className="bg-[#1a1d27] border border-[#2e3250] rounded-xl p-4 flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#6c8eff1a] border border-[#6c8eff40] flex items-center justify-center text-xs font-bold text-[#6c8eff] flex-shrink-0">{i + 1}</div>
                <div>
                  <div className="font-semibold text-[#fafafa] mb-1">{uc.title}</div>
                  <p className="text-sm text-[#7b7f8f] leading-6">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Implementation Notes ── */}
        <section id="constraints" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Implementation Notes</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">Validation & Edge Cases</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            Input constraints are enforced at the Activity layer before any write to SQLite.
          </p>
          <div className="bg-[#1a1d27] border border-[#2e3250] rounded-xl p-6 mb-6">
            {[
              "Employee discount clamped to min(input, 0.18 × yearlySalary) in Job constructor",
              "Health insurance stored as raw premium; 2% salary surcharge computed at score time",
              "Weights validated as integers in [1, 9] before settings UPDATE",
              "Compare Jobs button state recalculated in MainMenu.onResume() — queries offer count and current-job flag",
              "Child adoption assistance term divided by 5 in score formula to normalize scale",
            ].map((item, i) => (
              <div key={i} className="flex items-baseline gap-3 py-2.5 border-b border-[#2e3250] last:border-0 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6c8eff] flex-shrink-0 mt-1.5" />
                <span className="text-[#fafafa]">{item}</span>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-[#fafafa] mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Android SDK 34", "Java 17", "SQLite / SQLiteOpenHelper", "Material Design Components", "Gradle", "JUnit / Espresso"].map((t) => (
              <span key={t} className="bg-[#22263a] border border-[#2e3250] rounded-full px-3.5 py-1.5 text-sm text-[#7b7f8f] font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section id="team" className="py-16">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">Team</div>
          <h2 className="text-2xl font-bold tracking-tight text-[#fafafa] mb-5">The People Behind It</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8 max-w-[650px]">
            Team 129 — Georgia Tech CS 6300, Spring 2025.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { initials: "JY", name: "Jie Yang", role: "Front-End Engineer" },
              { initials: "MC", name: "Michael Chen", role: "Back-End Engineer" },
              { initials: "SM", name: "Snigdha Majeti", roles: ["Project Manager", "Back-End Engineer", "Reviewer"] },
              { initials: "SP", name: "Srikanta Patra", roles: ["Back-End Engineer", "Tester"] },
            ].map((m) => (
              <div key={m.name} className="bg-[#1a1d27] border border-[#2e3250] rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c8eff] to-[#a78bfa] flex items-center justify-center font-bold text-sm text-white mb-3">
                  {m.initials}
                </div>
                <div className="font-semibold text-[#fafafa] text-sm mb-1">{m.name}</div>
                <div className="flex flex-wrap gap-1">
                  {("roles" in m ? m.roles : [m.role]).map((r) => (
                    <span key={r} className="bg-[#34d3991a] text-[#34d399] border border-[#34d39933] rounded-full px-2 py-0.5 text-xs font-semibold">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
