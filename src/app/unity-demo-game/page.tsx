import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PhaseBreach — Jie Yang",
  description: "A Unity WebGL game playable directly in the browser.",
}

export default function UnityDemoGame() {
  return (
    <main className="pb-24">

      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <div className="pt-16 pb-16 border-b border-[#2a2d36]">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#fafafa] mb-5">
            Phase<span className="text-[#6c8eff]">Breach</span>
          </h1>
          <p className="text-lg text-[#7b7f8f] max-w-[600px] mb-10">
            A Unity WebGL game playable directly in the browser. Built with C# and deployed via WebGL.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Engine", value: "Unity" },
              { label: "Language", value: "C#" },
              { label: "Platform", value: "WebGL" },
              { label: "Year", value: "2026" },
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
              <p className="text-sm font-semibold text-[#fafafa]">Team Project</p>
              <div className="text-[14px] text-[#7b7f8f]">
                <span className="text-[#6c8eff] font-medium">My contribution:</span> game scene and character control
              </div>
            </div>
          </div>
        </div>

        {/* ── Game Embed ── */}
        <section id="game" className="py-16">
          <div className="text-[11px] font-mono text-[#6c8eff] uppercase tracking-[0.12em] mb-3.5">01 — Play</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#fafafa] mb-5">Play in Browser</h2>
          <p className="text-[#7b7f8f] leading-7 mb-8">
            Use WASD to control direction, left click to shoot, right click to rotate camera, space bar to skip forward.
          </p>
          <div className="rounded-2xl overflow-hidden bg-[#17181c] border border-[#2a2d36] w-full aspect-[8/5]">
            <iframe
              src="/projects/phasebreach/index.html"
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; fullscreen"
              title="PhaseBreach"
            />
          </div>
        </section>

      </div>
    </main>
  )
}
