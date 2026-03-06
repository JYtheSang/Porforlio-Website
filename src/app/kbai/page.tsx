import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solving ARC-AGI — Jie Yang",
  description: "Built a knowledge-based agent that solves ARC-AGI visual reasoning puzzles without neural networks, reaching 97.96% accuracy on the final milestone.",
}

// ARC color palette
const arcColors: Record<string, string> = {
  c0: "#111827",
  c1: "#6c8eff",
  c2: "#ef4444",
  c3: "#22c55e",
  c4: "#eab308",
  c5: "#6b7280",
  c6: "#ec4899",
  c7: "#f97316",
  c8: "#06b6d4",
  c9: "#8b5cf6",
}

function ArcGrid({ cells, cols }: { cells: string[]; cols: number }) {
  const rows = cells.length / cols
  return (
    <div
      className="inline-grid p-[6px] gap-[2px] rounded-md bg-[#1e2026]"
      style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}
    >
      {cells.map((c, i) => (
        <div
          key={i}
          className="w-5 h-5 rounded-[2px]"
          style={{ backgroundColor: arcColors[c] }}
        />
      ))}
    </div>
  )
}

function ArcPair({
  label,
  inCells,
  outCells,
  cols,
  outLabel = "output",
}: {
  label: string
  inCells: string[]
  outCells: string[]
  cols: number
  outLabel?: string
}) {
  return (
    <div className="flex-shrink-0">
      <div className="text-[10px] font-semibold tracking-widest uppercase text-[#52525b] mb-2">
        {label}
      </div>
      <div className="flex items-center gap-3">
        <div>
          <ArcGrid cells={inCells} cols={cols} />
          <div className="text-[11px] text-[#52525b] mt-1.5 text-center">input</div>
        </div>
        <span className="text-[#3f3f46] text-lg mt-[-14px]">→</span>
        <div>
          <ArcGrid cells={outCells} cols={cols} />
          <div className="text-[11px] text-[#52525b] mt-1.5 text-center">{outLabel}</div>
        </div>
      </div>
    </div>
  )
}

const modelFamilies = [
  {
    id: "1D",
    name: "One-Row Models",
    items: ["staircase_expansion", "center_extrapolation"],
  },
  {
    id: "GX",
    name: "Global Transforms",
    items: ["rotation", "flip", "translation", "divide_join", "ray_extend", "color_hist_stack"],
  },
  {
    id: "TP",
    name: "Topology",
    items: ["topology_recolor", "mirror_inside"],
  },
  {
    id: "VD",
    name: "Vertical Divider",
    items: [
      "vertical_or_single_color",
      "vertical_overlay_if_fits",
      "vertical_bool_combine",
      "vertical_stacking",
    ],
  },
  {
    id: "GD",
    name: "Grid & Symmetry",
    items: [
      "symmetry_3x3_grid",
      "grid_2x2_reflection",
      "separated_grid_histogram",
      "horizontal_half_xor",
    ],
  },
  {
    id: "BD",
    name: "Border & Geometry",
    items: [
      "concentric_rectangles",
      "border_marker_movement",
      "dots_inside_boundary",
      "inner_outer_border_coloring",
    ],
  },
  {
    id: "PT",
    name: "Paths & Rays",
    items: [
      "diagonal_cross",
      "diagonal_straight_path",
      "ray_through_mass",
      "connect_markers",
      "diamond_connect",
    ],
  },
  {
    id: "SP",
    name: "Spatial Ops",
    items: [
      "gravity_fit",
      "move_to_target",
      "split_reflection_outwards",
      "framed_fill_flip",
    ],
  },
  {
    id: "CL",
    name: "Color & Fill",
    items: ["inner_crop_recolor", "component_majority_fill", "legend_color_swap"],
  },
]

const pipelineSteps = [
  {
    num: 1,
    title: "Load the problem",
    body: "Each problem is a JSON file containing 3–4 training pairs (input/output grids) and one test input. Grids are loaded as NumPy arrays of integers 0–9, where each integer maps to one of ARC's 10 standard colors.",
    code: "ArcProblem → list[ArcSet] → np.ndarray",
  },
  {
    num: 2,
    title: "Gate with structural predicates",
    body: "Before running a model, a lightweight predicate checks whether the problem structure matches the model's domain. The vertical divider family, for example, only activates if a uniform-color divider column is detected. This skips irrelevant hypotheses without wasting computation.",
    code: "predicate_fn(train_pairs, test_in) → bool",
  },
  {
    num: 3,
    title: "Learn parameters from training pairs",
    body: "Each candidate model's learn function extracts the transformation parameters (e.g. rotation angle, color look-up table, axis of symmetry) by inspecting all training input/output pairs. If the model cannot extract consistent parameters across all examples, it is skipped.",
    code: "learn_fn(train_pairs) → params | None",
  },
  {
    num: 4,
    title: "Verify against all training outputs",
    body: "Extracted parameters are applied back to every training input. The resulting grids must match the expected outputs exactly — pixel by pixel. Any mismatch disqualifies the model entirely.",
    code: "np.array_equal(predicted, expected) for all pairs",
  },
  {
    num: 5,
    title: "Predict on the test input",
    body: "Verified models apply their parameters to the unseen test input and contribute up to 3 distinct predictions. The benchmark allows up to 3 guesses per problem, so the agent prioritizes model-spec predictions first and uses chain fallbacks to fill remaining slots.",
    code: "predict_fn(test_in, params) → np.ndarray",
  },
]

const takeaways = [
  {
    strong: "Explicit knowledge beats implicit pattern matching for structured problems.",
    body: " ARC's rules are exact and compositional. A model that encodes \"rotate 90 degrees\" will always outperform a neural network guessing pixel distributions when only 3 examples exist.",
  },
  {
    strong: "Structural predicates are free performance.",
    body: " Gating each model on a cheap structural check (does this grid have a vertical divider? is it 3×3 tiled?) cut the number of models run per problem by more than half without any accuracy cost.",
  },
  {
    strong: "Strict verification is the core of reliability.",
    body: " Requiring pixel-perfect reconstruction of every training output before making a test prediction essentially eliminated false positives. A model either explains all examples or is discarded — no partial credit, no ambiguity.",
  },
  {
    strong: "Building the fallback last was the right call.",
    body: " The rule-chain fallback was only needed for a small fraction of problems. Investing first in a rich, well-structured model library — and only adding the combinatorial fallback after exhausting model-spec coverage — kept the architecture clean and debuggable.",
  },
]

export default function KBAI() {
  return (
    <main className="pb-24">

      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <div className="pt-16 pb-16 border-b border-[#2a2d36]">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#fafafa] mb-5">
            Solving ARC-AGI<br />
            <span className="text-[#6c8eff]">Without Neural Networks</span>
          </h1>
          <p className="text-lg text-[#7b7f8f] max-w-[620px] mb-10 leading-relaxed">
            The Abstraction and Reasoning Corpus is one of AI&apos;s hardest open benchmarks.
            I built a knowledge-based agent that generalizes visual transformation rules
            from just 3–4 examples and solves unseen test grids — reaching{" "}
            <strong className="text-[#34d399]">97.96% accuracy</strong> on the final milestone.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Python", "Artificial intelligence"].map((t) => (
              <span key={t} className="bg-[#1e2026] border border-[#2a2d36] rounded px-3 py-1.5 text-[12px] font-mono text-[#7b7f8f]">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Section: Overview ── */}
        <section id="overview" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">01 — Overview</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">What makes ARC so hard</h2>
          <p className="text-base text-[#7b7f8f] max-w-[640px] leading-relaxed mb-10">
            Each ARC problem is a visual IQ test. You&apos;re shown a handful of colored grid pairs
            (input → output) and must infer the hidden transformation rule — then apply it to
            a new input you&apos;ve never seen. No training data. No pre-trained model. Just reasoning.
          </p>

          {/* ARC grid demo */}
          <div className="flex flex-wrap gap-8 mb-6">
            <ArcPair
              label="Train example 1"
              inCells={["c9","c0","c0","c9","c9","c9","c9","c9","c9"]}
              outCells={["c0","c9","c9","c0","c9","c9","c9","c9","c9"]}
              cols={3}
            />
            <ArcPair
              label="Train example 2"
              inCells={["c2","c0","c2","c0","c0","c2","c0","c2","c2"]}
              outCells={["c2","c2","c2","c0","c0","c2","c2","c0","c0"]}
              cols={3}
            />
            <ArcPair
              label="Test input (agent must solve)"
              inCells={["c0","c0","c5","c5","c0","c0","c0","c5","c5"]}
              outCells={["c0","c5","c0","c0","c0","c5","c5","c0","c5"]}
              cols={3}
              outLabel="predicted output"
            />
          </div>
          <p className="text-[#7b7f8f] leading-7 mb-6">
            Problem <code className="text-[#52525b]">ed36ccf7</code> from the Final milestone.
            The rule is a matrix transpose — inferred from examples alone.
          </p>
        </section>

        {/* ── Section: Approach ── */}
        <section id="approach" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">02 — Approach</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">
            A two-tier reasoning engine
          </h2>
          <p className="text-base text-[#7b7f8f] max-w-[640px] leading-relaxed mb-10">
            Rather than training a neural network, I built a library of explicit transformation
            models. Each model encodes a hypothesis about how inputs map to outputs. The agent
            tests every hypothesis against the training examples and picks the one that fits.
          </p>

          {/* Architecture diagram */}
          <div className="border border-[#2a2d36] rounded-xl overflow-hidden mb-10">
            {[
              {
                num: "1",
                title: "Parameterized Model Library",
                sub: "35+ hand-crafted transformation models — tried first",
                body: `Each model is a learn + predict pair. The learn function inspects the
                training pairs and extracts parameters (e.g. rotation angle, color mapping,
                divider axis). The predict function applies those parameters to the test input.
                A structural predicate gates expensive models — for example, the vertical divider
                family only runs if a vertical divider color is detected in the first training input.
                The agent stops as soon as it finds up to 3 consistent predictions.`,
              },
              {
                num: "2",
                title: "Rule Chain Fallback",
                sub: "Brute-force composition of simple rules — used only if Tier 1 fails",
                body: `If no single model produces 3 predictions, the agent falls back to composing
                chains of up to 3 simple rules (rotate 90°, flip, invert color, extract, fill,
                pixel expand, etc.). Viable rules are filtered against the first training pair,
                then chains are scored across all training pairs. Only chains that perfectly
                reproduce every training output are applied to the test input.`,
              },
            ].map((tier, i) => (
              <div key={tier.num} className={`p-7 ${i > 0 ? "border-t border-[#2a2d36]" : ""}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 bg-[#6c8eff1a] border border-[#6c8eff40] rounded-lg flex items-center justify-center font-mono text-[15px] font-bold text-[#6c8eff] flex-shrink-0">
                    {tier.num}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#fafafa]">{tier.title}</div>
                    <div className="text-xs text-[#52525b]">{tier.sub}</div>
                  </div>
                </div>
                <p className="text-sm text-[#7b7f8f] leading-relaxed pl-9">{tier.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Transformation Models ── */}
        <section id="models" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">03 — Transformation Models</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">
            35+ models across 9 families
          </h2>
          <p className="text-base text-[#7b7f8f] max-w-[640px] leading-relaxed mb-10">
            Each model family targets a distinct class of visual rule. Structural predicates
            ensure that expensive models are only tested when the input has the right structure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelFamilies.map((family) => (
              <div
                key={family.id}
                className="border border-[#2a2d36] rounded-xl p-5 bg-[#17181c]"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-6 rounded bg-[#6c8eff1a] text-[#6c8eff] text-[10px] font-extrabold flex items-center justify-center flex-shrink-0">
                    {family.id}
                  </div>
                  <span className="text-sm font-semibold text-[#fafafa]">{family.name}</span>
                </div>
                <ul className="space-y-0">
                  {family.items.map((item, i) => (
                    <li
                      key={item}
                      className={`text-[11px] font-mono text-[#7b7f8f] py-[3px] ${i < family.items.length - 1 ? "border-b border-[#1e2026]" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Pipeline ── */}
        <section id="pipeline" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">04 — Pipeline</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-10">
            How the agent solves a problem
          </h2>

          <div>
            {pipelineSteps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-5 py-6 ${i < pipelineSteps.length - 1 ? "border-b border-[#2a2d36]" : ""}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e2026] flex items-center justify-center text-[12px] font-bold text-[#7b7f8f] mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#fafafa] mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[#7b7f8f] leading-relaxed mb-2">{step.body}</p>
                  <code className="inline-block text-[11px] font-mono text-[#6c8eff] bg-[#6c8eff1a] border border-[#6c8eff40] px-2.5 py-1 rounded">
                    {step.code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Results ── */}
        <section id="results" className="py-16 border-b border-[#2a2d36]">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">05 — Results</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">
            Final milestone performance
          </h2>
          <p className="text-base text-[#7b7f8f] max-w-[640px] leading-relaxed mb-10">
            The agent was evaluated on 4 milestone benchmarks (B, C, D, Final) with 49 total
            problems in the final set.
          </p>

          {/* Stat strip */}
          <div className="bg-[#17181c] border border-[#2a2d36] rounded-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden mb-10">
            {[
              { value: "48/49", accent: true, label: "Problems solved on Final milestone" },
              { value: "97.96%", accent: true, label: "Accuracy — pixel-perfect match required" },
              { value: "3", accent: false, label: "Max predictions allowed per problem" },
              { value: "35+", accent: false, label: "Transformation models implemented" },
            ].map((s, i) => (
              <div key={i} className={`p-7 ${i > 0 ? "border-l border-[#2a2d36] max-md:border-l-0 max-md:border-t" : ""}`}>
                <div className={`text-3xl font-bold tracking-tight mb-1.5 ${s.accent ? "text-[#34d399]" : "text-[#fafafa]"}`}>
                  {s.value}
                </div>
                <div className="text-xs text-[#7b7f8f] leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Takeaways ── */}
        <div className="pt-16">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">06 — Takeaways</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-10">
            What this taught me
          </h2>
          <div className="flex flex-col gap-6">
            {takeaways.map((t, i) => (
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
