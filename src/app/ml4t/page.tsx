import Image from "next/image"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "ML-Driven Algorithmic Trading — Jie Yang",
  description: "Built a full algorithmic trading pipeline — custom decision-tree learners, technical indicator library, and an ML strategy that outperformed buy-and-hold by +42 percentage points in-sample.",
}

export default function ML4T() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#fafafa] mb-5">
            ML-Driven<br /><span className="text-[#6c8eff]">Algorithmic Trading</span>
          </h1>
          <p className="text-lg text-[#7b7f8f] max-w-[620px] mb-10">
            Built a full algorithmic trading pipeline from scratch — custom decision-tree learners,
            technical indicator library, rule-based strategy, and a machine-learning strategy that
            outperformed a buy-and-hold benchmark by{" "}
            <strong className="text-[#34d399]">+42 percentage points</strong> in-sample.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Python · NumPy · pandas", "Machine Learning"].map((t) => (
              <span key={t} className="bg-[#1e2026] border border-[#2a2d36] rounded px-3 py-1.5 text-[12px] font-mono text-[#7b7f8f]">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Section: Overview ── */}
        <section id="overview" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">01 — Overview</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">What this project is</h2>
          <p className="text-[#7b7f8f] leading-7 mb-4">
            This is a semester-long project for Georgia Tech&apos;s <strong className="text-[#fafafa]">CS 7646 – Machine Learning for Trading</strong>,
            one of the most data-intensive courses in the OMSA program. The goal: build a complete
            algorithmic trading system that uses machine learning to make buy/sell decisions for JPMorgan
            (JPM) stock — without any pre-built ML libraries for the learning algorithms themselves.
          </p>
          <p className="text-[#7b7f8f] leading-7 mb-6">
            The system spans three interconnected layers: a <strong className="text-[#fafafa]">custom ML engine</strong> (decision trees, random forests),
            a <strong className="text-[#fafafa]">technical indicator library</strong>, and two <strong className="text-[#fafafa]">trading strategies</strong> — one
            hand-crafted from market intuition, one learned from data. Both were benchmarked against a simple
            buy-and-hold portfolio over the 2008–2009 financial crisis (in-sample) and 2010–2011 (out-of-sample).
          </p>
        </section>

        {/* ── Section: Approach ── */}
        <section id="approach" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">02 — Technical Approach</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-8">Three-phase pipeline</h2>

          <div className="flex flex-col gap-6">

            {/* Phase 01 */}
            <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-7 grid grid-cols-[56px_1fr] gap-6 items-start">
              <div className="w-11 h-11 bg-[#6c8eff1a] border border-[#6c8eff40] rounded-lg flex items-center justify-center font-mono text-[15px] font-bold text-[#6c8eff]">01</div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#fafafa] mb-2">Custom Machine Learning Engine</h3>
                <p className="text-[#7b7f8f] text-[15px] leading-7 mb-3">Built decision tree learners from scratch using only NumPy arrays — no scikit-learn or other ML libraries.</p>
                <ul className="list-disc ml-5 text-[15px] text-[#7b7f8f] space-y-1.5">
                  <li><strong className="text-[#fafafa]">DTLearner:</strong> Splits on the feature with highest absolute Pearson correlation to the target. Tree stored as a flat NumPy array for cache efficiency.</li>
                  <li><strong className="text-[#fafafa]">RTLearner:</strong> Splits on a randomly selected feature — faster to train, reduces variance at the cost of slight bias.</li>
                  <li><strong className="text-[#fafafa]">BagLearner:</strong> Bootstrap aggregation wrapper; trains <em>n</em> base learners on resampled data and averages predictions. Configured with 150 RT bags.</li>
                  <li><strong className="text-[#fafafa]">Experiments:</strong> Measured RMSE and R² vs. leaf size to characterize overfitting. Confirmed bagging reduces overfitting: in-sample RMSE rose while out-of-sample RMSE held stable.</li>
                </ul>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-7 grid grid-cols-[56px_1fr] gap-6 items-start">
              <div className="w-11 h-11 bg-[#6c8eff1a] border border-[#6c8eff40] rounded-lg flex items-center justify-center font-mono text-[15px] font-bold text-[#6c8eff]">02</div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#fafafa] mb-2">Technical Indicator Library</h3>
                <p className="text-[#7b7f8f] text-[15px] leading-7 mb-4">
                  Implemented five indicators from scratch, each tuned empirically against JPM price data
                  to surface meaningful signal without over-fitting to noise.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {[
                    { name: "Bollinger Band %", desc: "Measures price relative to a 20-day rolling mean ± 1.5σ. Values near 0 signal oversold; near 1 signal overbought." },
                    { name: "Price / SMA Ratio", desc: "Normalizes price against its 20-day simple moving average. Ratio < 0.96 suggests mean-reversion long opportunity." },
                    { name: "Momentum", desc: "15-day percentage price change. Captures trend direction without lag from smoothing." },
                    { name: "PPO (Percentage Price Oscillator)", desc: "EMA(8) − EMA(26) / EMA(26), plus a signal line EMA(9). Crossovers used to detect trend shifts." },
                    { name: "Stochastic %K/%D", desc: "10-period stochastic with 3-period smoothing. Used during exploratory analysis; PPO crossover ultimately provided cleaner signal." },
                  ].map((ind) => (
                    <div key={ind.name} className="bg-[#0a0a0a] border border-[#2a2d36] rounded-lg p-4">
                      <div className="text-[13px] font-mono text-[#a78bfa] mb-1.5">{ind.name}</div>
                      <p className="text-[14px] text-[#7b7f8f] m-0">{ind.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1e2026] border border-[#2a2d36] rounded-lg overflow-hidden">
                  <Image
                    src="/projects/ml4t/indicator_evaluation/Bollinger Bands (JPM).png"
                    alt="Bollinger Bands chart for JPM"
                    width={1200}
                    height={600}
                    className="w-full h-auto block"
                  />
                  <p className="text-[12px] text-[#7b7f8f] px-4 py-2.5 border-t border-[#2a2d36] italic">
                    Bollinger Bands for JPM — price relative to 20-day SMA ± 1.5σ. Buy signals cluster near the lower band during the 2008 drawdown.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-7 grid grid-cols-[56px_1fr] gap-6 items-start">
              <div className="w-11 h-11 bg-[#6c8eff1a] border border-[#6c8eff40] rounded-lg flex items-center justify-center font-mono text-[15px] font-bold text-[#6c8eff]">03</div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#fafafa] mb-2">Dual Trading Strategies</h3>
                <p className="text-[#7b7f8f] text-[15px] leading-7 mb-3">Two strategies were built and compared head-to-head — one rule-based, one ML-driven.</p>
                <ul className="list-disc ml-5 text-[15px] text-[#7b7f8f] space-y-2">
                  <li>
                    <strong className="text-[#fafafa]">Manual Strategy:</strong> A weighted voting system across all four indicators.
                    Bollinger Band % carries 1.5× weight; SMA and Momentum carry 1×; PPO crossover carries 0.5×.
                    A net signal ≥ 2 triggers a long position (1,000 shares); ≤ −2 triggers short.
                  </li>
                  <li>
                    <strong className="text-[#fafafa]">Strategy Learner:</strong> A BagLearner (150 RTLearner bags, leaf_size=5) trained on the
                    four indicator features. Labels encode 5-day forward returns: &gt;2.5% + impact → long (+1),
                    &lt;−2.5% − impact → short (−1), else hold (0). Market impact and commission costs ($9.95/trade) are factored in.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section: Results ── */}
        <section id="results" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">03 — Results</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Performance across three strategies</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8">
            All strategies were tested on JPM stock against a simple buy-and-hold benchmark.
            In-sample: Jan 2008 – Dec 2009 (2008 financial crisis). Out-of-sample: Jan 2010 – Dec 2011.
          </p>

          {/* Performance tables */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "In-Sample (2008–2009)",
                rows: [
                  ["Cumulative Return", "+43.3%", "green", "+1.0%", "blue"],
                  ["Daily Mean Return", "0.080%", "green", "0.017%", "blue"],
                  ["Daily Std Dev", "1.32%", "green", "1.70%", "red"],
                ]
              },
              {
                title: "Out-of-Sample (2010–2011)",
                rows: [
                  ["Cumulative Return", "+1.95%", "green", "−8.53%", "red"],
                  ["Daily Mean Return", "+0.007%", "green", "−0.014%", "red"],
                  ["Daily Std Dev", "0.80%", "green", "0.85%", "blue"],
                ]
              }
            ].map((table) => (
              <div key={table.title} className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6">
                <h3 className="text-[17px] font-semibold text-[#fafafa] mb-4">{table.title}</h3>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr>
                      {["Metric", "Manual", "Benchmark"].map((h) => (
                        <th key={h} className="text-left text-[11px] font-mono uppercase tracking-widest text-[#7b7f8f] pb-3 border-b border-[#2a2d36]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map(([label, val1, c1, val2, c2]) => (
                      <tr key={label} className="border-b border-[#2a2d3699]">
                        <td className="py-2.5 text-[#fafafa] font-medium">{label}</td>
                        <td className={`py-2.5 font-mono ${c1 === "green" ? "text-[#34d399]" : c1 === "red" ? "text-[#f87171]" : "text-[#6c8eff]"}`}>{val1}</td>
                        <td className={`py-2.5 font-mono ${c2 === "green" ? "text-[#34d399]" : c2 === "red" ? "text-[#f87171]" : "text-[#6c8eff]"}`}>{val2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Experiment 1 charts */}
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6 mb-5">
            <h3 className="text-[17px] font-semibold text-[#fafafa] mb-3">Experiment 1 — Strategy Learner vs Manual Strategy vs Benchmark</h3>
            <p className="text-[#7b7f8f] text-[15px] leading-7 mb-5">
              In-sample, all three strategies were compared. The Strategy Learner, having been trained on
              the same period, generally matched or exceeded the Manual Strategy. The out-of-sample comparison
              tests real generalization — both handcrafted and ML strategies defended against the benchmark&apos;s 8.5% loss.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { src: "/projects/ml4t/strategy_evaluation/Experiment 1_Manual Strategy vs Strategy Learner vs Benchmark Portfolio (In Sample).png", caption: "In-sample (2008–2009): normalized portfolio values. Red = Manual Strategy, Orange = Strategy Learner, Purple = Benchmark." },
                { src: "/projects/ml4t/strategy_evaluation/Experiment 1_Manual Strategy vs Strategy Learner vs Benchmark Portfolio (Out of Sample).png", caption: "Out-of-sample (2010–2011): both active strategies outperform the buy-and-hold benchmark." },
              ].map((fig) => (
                <div key={fig.src} className="bg-[#1e2026] border border-[#2a2d36] rounded-lg overflow-hidden">
                  <Image src={fig.src} alt={fig.caption} width={1200} height={600} className="w-full h-auto block" />
                  <p className="text-[12px] text-[#7b7f8f] px-4 py-2.5 border-t border-[#2a2d36] italic">{fig.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiment 2 */}
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6 mb-5">
            <h3 className="text-[17px] font-semibold text-[#fafafa] mb-3">Experiment 2 — Market Impact Sensitivity</h3>
            <p className="text-[#7b7f8f] text-[15px] leading-7 mb-5">
              A key question in algorithmic trading: how does market impact (slippage) affect strategy viability?
              The Strategy Learner was re-run across impact values from 0.000 to 0.050. As impact increases,
              the learner correctly adapts — trading less frequently and targeting larger moves to remain profitable after friction costs.
            </p>
            <div className="bg-[#1e2026] border border-[#2a2d36] rounded-lg overflow-hidden">
              <Image
                src="/projects/ml4t/strategy_evaluation/Experiment 2_Combined Impact Analysis (JPM).png"
                alt="Market impact sensitivity analysis"
                width={1200}
                height={600}
                className="w-full h-auto block"
              />
              <p className="text-[12px] text-[#7b7f8f] px-4 py-2.5 border-t border-[#2a2d36] italic">
                Higher market impact → fewer trades (blue bars) and lower cumulative return (red bars). The learner&apos;s built-in impact awareness drives this adaptive behavior automatically.
              </p>
            </div>
          </div>

          {/* Theoretical ceiling */}
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl p-6">
            <h3 className="text-[17px] font-semibold text-[#fafafa] mb-3">Theoretical Upper Bound</h3>
            <p className="text-[#7b7f8f] text-[15px] leading-7 mb-5">
              As a reference ceiling, a <strong className="text-[#fafafa]">Theoretically Optimal Strategy (ToC)</strong> was computed using
              perfect future knowledge — buying every day before an up-move, shorting every day before a down-move.
              This is physically impossible to trade but establishes the maximum extractable value from the price series.
            </p>
            <table className="w-full text-[14px] mb-5">
              <thead>
                <tr>
                  {["Metric", "Theoretically Optimal", "Benchmark"].map((h) => (
                    <th key={h} className="text-left text-[11px] font-mono uppercase tracking-widest text-[#7b7f8f] pb-3 border-b border-[#2a2d36]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cumulative Return", "+5,720%", "+6.0%"],
                  ["Daily Mean Return", "0.82%", "0.99%"],
                  ["Daily Std Dev", "1.56%", "14.1%"],
                ].map(([label, opt, bench]) => (
                  <tr key={label} className="border-b border-[#2a2d3699]">
                    <td className="py-2.5 text-[#fafafa] font-medium">{label}</td>
                    <td className="py-2.5 font-mono text-[#34d399]">{opt}</td>
                    <td className="py-2.5 font-mono text-[#6c8eff]">{bench}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-[#1e2026] border border-[#2a2d36] rounded-lg overflow-hidden">
              <Image
                src="/projects/ml4t/indicator_evaluation/TOC vs. Benchmark Portfolio(JPM).png"
                alt="Theoretically Optimal Strategy vs Benchmark"
                width={1200}
                height={600}
                className="w-full h-auto block"
              />
              <p className="text-[12px] text-[#7b7f8f] px-4 py-2.5 border-t border-[#2a2d36] italic">
                ToC vs Benchmark: with perfect foresight, the same capital grows 57× over the same period.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section: Takeaways ── */}
        <div className="pt-16">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">04 — Takeaways</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-10">What this taught me</h2>
          <div className="flex flex-col gap-6">
            {[
              { strong: "Building learners from scratch reveals the math behind ML.", body: " Implementing DTLearner, RTLearner, and BagLearner without scikit-learn deepened my understanding of splitting criteria, variance reduction, and ensemble methods. The flat-array tree representation was a nice efficiency win." },
              { strong: "Technical indicators need empirical tuning.", body: " Each indicator (Bollinger Bands, momentum, PPO) was calibrated against JPM data. What works for one asset may not generalize; exploratory analysis and validation splits are essential." },
              { strong: "Out-of-sample performance matters more than in-sample.", body: " The real test was 2010–2011. Both manual and ML strategies beat buy-and-hold, but OOS returns were modest compared to in-sample — a reminder that backtest results can be optimistic." },
              { strong: "Market impact and commissions change the game.", body: " The Strategy Learner adapted to higher friction by trading less frequently. Ignoring transaction costs would have overstated returns; modeling them upfront made the evaluation realistic." },
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#6c8eff] mt-[7px]" />
                <p className="text-[15px] text-[#7b7f8f] leading-7">
                  <strong className="text-[#fafafa] font-semibold">{t.strong}</strong>
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
