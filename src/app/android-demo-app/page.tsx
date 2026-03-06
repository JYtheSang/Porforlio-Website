import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JobCompare6300 — Android Demo App — Jie Yang",
  description: "Android app built in Java. Layered architecture with SQLite persistence, cost-of-living salary normalization, and a configurable weighted scoring engine.",
}

export default function AndroidDemoApp() {
  return (
    <main className="pb-24">

      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <div className="pt-16 pb-16 border-b border-[#2a2d36]">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#fafafa] mb-5">
            An <span className="text-[#6c8eff]">Android Demo</span> App
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
          <div className="mt-10">
            <span className="text-[11px] uppercase tracking-widest text-[#7b7f8f]">Team</span>
            <div className="mt-1 space-y-1">
              <div className="flex flex-wrap gap-4">
                <span className="text-sm font-semibold text-[#fafafa]">Jie Yang</span>
                <span className="text-sm font-semibold text-[#fafafa]">Michael Chen</span>
                <span className="text-sm font-semibold text-[#fafafa]">Snigdha Majeti</span>
                <span className="text-sm font-semibold text-[#fafafa]">Srikanta Patra</span>
              </div>
              <div className="text-[11px] text-[#7b7f8f]">
                <span className="text-[#6c8eff] font-medium">My contribution:</span> UI design, front-end development, and backend support
              </div>
            </div>
          </div>
        </div>

        {/* ── Demo ── */}
        <section id="demo" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">01 — Demo</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">App Walkthrough</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            A short video walkthrough of the full user flow — from adding a current job to viewing the comparison table.
          </p>
          <div className="flex justify-center mb-3">
            <div className="rounded-2xl overflow-hidden bg-[#17181c] border border-[#2a2d36] w-full max-w-[220px]">
              <video
                className="w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/projects/android-demo/demo_compressed.webm" type="video/webm" />
              </video>
            </div>
          </div>
          <p className="text-sm text-[#7b7f8f] text-center">
            Full app demo — engineering-focused project, sorry for the design 😅
          </p>
        </section>

        {/* ── Screen Flow ── */}
        <section id="screens" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">02 — UI Flow</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Activity Navigation</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8 max-w-[650px]">
            Six Activities. All navigation routes back through MainMenu. The Compare Jobs button is conditionally enabled based on a data count check at runtime.
          </p>
          <div className="flex flex-wrap gap-px bg-[#2a2d36] rounded-xl overflow-hidden mb-6">
            {[
              { num: 1, name: "MainMenu.java", desc: "Launches each Activity via Intent. Queries job count to enable/disable Compare button." },
              { num: 2, name: "current_job_activity", desc: "Pre-populates form from DB if a current job exists. Writes to jobs table on save." },
              { num: 3, name: "job_offer_activity", desc: "Inserts new row into jobs table. Optionally launches compare result directly." },
              { num: 4, name: "comparison_settings", desc: "Reads/writes the single row in comparison_settings table via ComparisonSettings singleton." },
              { num: 5, name: "compare_jobs", desc: "Calls JobComparison.getRankedJobs() to sort and display. Passes two selected IDs to result." },
              { num: 6, name: "compare_result", desc: "Reads ComparisonData from singleton. Renders a 10-field comparison table." },
            ].map((s) => (
              <div key={s.num} className="flex-1 min-w-[150px] bg-[#17181c] px-4 py-5 text-center">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#6c8eff1a] border border-[#6c8eff40] text-[#6c8eff] text-xs font-bold mb-2.5">{s.num}</div>
                <div className="text-sm font-semibold text-[#fafafa] mb-1">{s.name}</div>
                <p className="text-xs text-[#7b7f8f] leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architecture ── */}
        <section id="architecture" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">03 — Architecture</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">App Structure</h2>
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
                    <span key={chip} className="bg-[#17181c] border border-[#2a2d36] rounded-lg px-3.5 py-2 text-sm font-mono text-[#fafafa]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-[#fafafa] mb-4">Domain Classes</h3>
          <div className="mb-8 flex items-center gap-0 overflow-x-auto pb-2">
            {/* ComparisonSettings */}
            <div className="flex-1 min-w-[170px] bg-[#17181c] border border-[#2a2d36] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2a2d36] px-4 py-2.5">
                <span className="font-mono text-sm font-semibold text-[#6c8eff]">ComparisonSettings</span>
              </div>
              <ul className="px-4 py-3 space-y-1">
                {["Stores weight values", "Loads/saves from DB", "Default weights = 1"].map((l) => (
                  <li key={l} className="text-xs text-[#7b7f8f] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2a2d36] flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center px-2 flex-shrink-0">
              <span className="text-[10px] text-[#7b7f8f] font-mono mb-1 whitespace-nowrap">provides weights</span>
              <div className="flex items-center">
                <div className="h-px w-8 bg-[#2a2d36]" />
                <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#2a2d36]" />
              </div>
            </div>

            {/* JobComparison */}
            <div className="flex-1 min-w-[160px] bg-[#17181c] border border-[#2a2d36] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2a2d36] px-4 py-2.5">
                <span className="font-mono text-sm font-semibold text-[#6c8eff]">JobComparison</span>
              </div>
              <ul className="px-4 py-3 space-y-1">
                {["rankJobs()", "compareJobs()", "calculates job score"].map((l) => (
                  <li key={l} className="text-xs text-[#7b7f8f] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2a2d36] flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center px-2 flex-shrink-0">
              <span className="text-[10px] text-[#7b7f8f] font-mono mb-1 whitespace-nowrap">evaluates</span>
              <div className="flex items-center">
                <div className="h-px w-8 bg-[#2a2d36]" />
                <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#2a2d36]" />
              </div>
            </div>

            {/* Job */}
            <div className="flex-1 min-w-[180px] bg-[#17181c] border border-[#2a2d36] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2a2d36] px-4 py-2.5">
                <span className="font-mono text-sm font-semibold text-[#6c8eff]">Job</span>
              </div>
              <ul className="px-4 py-3 space-y-1">
                {["Job data model", "calculateAdjustedYearlySalary()", "calculateAdjustedYearlyBonus()", "calculateHealthInsurance()", "calculateEmployeeDiscount()"].map((l) => (
                  <li key={l} className="text-xs text-[#7b7f8f] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2a2d36] flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#fafafa] mb-4">Database Schema</h3>
          <div className="space-y-4">
            <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2a2d36] px-4 py-2.5 text-xs font-bold text-[#6c8eff] font-mono">TABLE: jobs</div>
              {[
                ["id", "INTEGER PK", "Auto-increment"],
                ["is_current_job", "INTEGER", "Boolean flag (0/1)"],
                ["title, company, location", "TEXT", "Job identifiers"],
                ["cost_of_living", "INTEGER", "Index used for salary adjustment"],
                ["yearly_salary, yearly_bonus", "REAL", "Pre-adjustment raw values"],
              ].map(([col, type, note]) => (
                <div key={col} className="grid grid-cols-[1fr_0.6fr_2fr] gap-2 px-4 py-2 border-b border-[#2a2d36] last:border-0 text-xs font-mono max-[640px]:grid-cols-[1fr_0.6fr]">
                  <span className="text-[#fafafa]">{col}</span>
                  <span className="text-[#fbbf24]">{type}</span>
                  <span className="text-[#7b7f8f] max-[640px]:hidden">{note}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl overflow-hidden">
              <div className="bg-[#6c8eff14] border-b border-[#2a2d36] px-4 py-2.5 text-xs font-bold text-[#6c8eff] font-mono">TABLE: comparison_settings</div>
              {["salary_weight", "bonus_weight", "tuition_weight", "health_weight", "discount_weight", "adoption_weight"].map((col) => (
                <div key={col} className="grid grid-cols-[1fr_0.6fr] gap-2 px-4 py-2 border-b border-[#2a2d36] last:border-0 text-xs font-mono">
                  <span className="text-[#fafafa]">{col}</span>
                  <span className="text-[#fbbf24]">INTEGER (Default: 1)</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scoring ── */}
        <section id="scoring" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">04 — Scoring Formula</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Weighted Scoring Implementation</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            calculateScore(Job) in JobComparison.java computes a double score per job. Each term divides its weight by 9 (max weight) so the scale is invariant to the absolute weight values.
          </p>
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6 font-mono text-sm text-[#6c8eff] leading-8 overflow-x-auto mb-6">
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
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">05 — Features</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Implemented Functionality</h2>
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
              <div key={uc.title} className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-4 flex gap-4">
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
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">06 — Implementation Notes</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Validation & Edge Cases</h2>
          <p className="text-[#7b7f8f] leading-7 mb-6 max-w-[650px]">
            Input constraints are enforced at the Activity layer before any write to SQLite.
          </p>
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6 mb-6">
            {[
              "Employee discount clamped to min(input, 0.18 × yearlySalary) in Job constructor",
              "Health insurance stored as raw premium; 2% salary surcharge computed at score time",
              "Weights validated as integers in [1, 9] before settings UPDATE",
              "Compare Jobs button state recalculated in MainMenu.onResume() — queries offer count and current-job flag",
              "Child adoption assistance term divided by 5 in score formula to normalize scale",
            ].map((item, i) => (
              <div key={i} className="flex items-baseline gap-3 py-2.5 border-b border-[#2a2d36] last:border-0 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6c8eff] flex-shrink-0 mt-1.5" />
                <span className="text-[#fafafa]">{item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
