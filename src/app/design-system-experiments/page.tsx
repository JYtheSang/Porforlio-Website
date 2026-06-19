import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Delivering Design System in Code — Jie Yang",
  description:
    "Delivering a design system in code with full interaction, states, and motion beyond static Figma handoff.",
}

const FIGMA_EMBED_SRC =
  "https://embed.figma.com/design/S9ay6OOmlWx0ajUFmNqSSZ/Untitled?node-id=2-643&embed-host=share"

const STORYBOOK_IFRAME_SRC =
  "https://f092ee8bc35977171efb7a82124a5d89.share.chromatic.com/iframe.html?id=components-sensorstatuscard--docs&viewMode=docs"

const GITHUB_URL = "https://github.com/JYtheSang/design-system-experiments"

const FIGMA_URL =
  "https://www.figma.com/design/S9ay6OOmlWx0ajUFmNqSSZ/Untitled?node-id=2-643"

const LIVE_DEMO_URL =
  "https://f092ee8bc35977171efb7a82124a5d89.share.chromatic.com/?path=/docs/components-sensorstatuscard--docs"

function SectionText({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="max-w-[800px] mx-auto px-6 mt-10 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
      <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa]">{title}</h2>
      {children}
    </div>
  )
}

export default function DesignSystemExperiments() {
  return (
    <main className="pb-24">
      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-10 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">
            Design System · 2026
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Delivering Design System in Code
          </h1>
        </div>
        <p>
          Handoff from Figma often stops at static frames. Layout, color, and type are there — but
          the delivery is still a picture, not a product.{" "}
          <strong className="text-[#fafafa] font-semibold">
            Interaction details are missing or implied
          </strong>
          : expand and collapse behavior, hover and focus states, loading and empty states, and how
          components respond when data changes in real time.
        </p>
        <p>
          That gap makes it hard for designers and engineers to align on what the experience should
          actually feel like. Static specs do not carry the rhythm of a real app — the timing of an
          animation, the density of a dashboard, or the way a card reads when eight of them share a
          screen. This project started from that problem:{" "}
          <strong className="text-[#fafafa] font-semibold">
            build components that behave like software, not screenshots
          </strong>
          , so design intent can be reviewed, tested, and iterated in a live environment.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#60a5fa] hover:opacity-80 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4m0-24C5.8 0 4 1.8 4 4s1.8 4 4 4h4V4c0-2.2-1.8-4-4-4m0 8C5.8 8 4 9.8 4 12s1.8 4 4 4h4V8zm8-8h-4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4m0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
            </svg>
            Figma
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#60a5fa] hover:opacity-80 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#60a5fa] hover:opacity-80 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
              <path d="M21.786 0l-.007 6.457L16 3.277 4.926 9.671v12.658L16 28.723l11.074-6.394V11.33L16 17.724l-1.926-1.112v8.015l-5.86-3.38V13.41L16 10.066l11.074 6.394V.006L21.786 0z" />
            </svg>
            Live demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Figma source */}
      <div className="mt-20">
        <div className="max-w-[1250px] mx-auto px-6">
          <div className="overflow-hidden rounded-2xl border border-[#2a2d36] bg-[#17181c]">
            <iframe
              src={FIGMA_EMBED_SRC}
              title="RobotCard Figma design"
              className="w-full h-[800px] border-0 bg-white"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* How to build it in Cursor */}
      <div className="mt-20">
        <SectionText title="Building it in Cursor">
          <p>
            I used Cursor as the full workflow — from scaffold to documented component. The process
            breaks into five steps that map cleanly onto how design and code should stay linked.
          </p>
          <ol className="list-decimal pl-5 flex flex-col gap-4 marker:text-[#a1a1aa]">
            <li>
              <strong className="text-[#fafafa] font-semibold">Set up React.</strong> Start a Vite +
              React + TypeScript project in Cursor (<code className="text-[#d4d4d8]">npm create vite@latest</code>
              ). This gives you a fast dev server, a real component tree, and a place to iterate on
              behavior — not just layout.
            </li>
            <li>
              <strong className="text-[#fafafa] font-semibold">Share the Figma link.</strong> Paste the
              Figma file URL into Cursor and ask it to implement the component from the design. With the
              Figma MCP connected, Cursor can read frames, tokens, and spacing directly from the source
              file instead of guessing from a flat export.
            </li>
            <li>
              <strong className="text-[#fafafa] font-semibold">Fine-tune design details in code.</strong>{" "}
              The first pass from Figma gets you close, but real components need polish — spacing that
              breathes at different widths, expand/collapse timing, hover and focus states, and edge cases
              like offline or loading. Use Cursor to iterate in the browser: tweak CSS, adjust props, and
              refine interaction until the implementation matches the intent, not just the pixels.
            </li>
            <li>
              <strong className="text-[#fafafa] font-semibold">Add Storybook.</strong> Run{" "}
              <code className="text-[#d4d4d8]">npx storybook@latest init</code> to generate stories
              alongside your components. Each variant from Figma — nominal, warning, critical, offline —
              becomes a story you can review, tweak, and share without rebuilding the whole app.
            </li>
            <li>
              <strong className="text-[#fafafa] font-semibold">Save the work on GitHub.</strong> Push the
              project to a repo as you go — components, stories, and config together. GitHub becomes the
              single source of truth for the implementation: easy to revisit, share with collaborators, and
              link from a portfolio or Storybook deploy without losing the thread between design and code.
            </li>
          </ol>
          <p>
            The Figma embed above is the spec. Cursor closes the loop by turning that spec into working
            code, GitHub preserves the iteration, and Storybook makes the result reviewable on its own.
          </p>
        </SectionText>

        <div className="max-w-[1250px] mx-auto px-6 mt-10">
          <AnimatedSectionImage
            src="/projects/design-system-experiments/cursor-workflow.png"
            alt="Cursor editor with Figma MCP, agent chat, and the portfolio case study in the browser preview"
            width={1024}
            height={551}
            loading="lazy"
          />
        </div>
      </div>

      {/* Storybook */}
      <div className="mt-20">
        <SectionText title="Reviewing in Storybook">
          <p>
            Storybook is where the component becomes a product surface — not a single screen in a
            larger app, but a self-contained artifact you can inspect, test, and share. Open a story
            to see a variant in isolation, use the{" "}
            <strong className="text-[#fafafa] font-semibold">Controls</strong> panel to swap props at
            runtime, and switch to the{" "}
            <strong className="text-[#fafafa] font-semibold">Docs</strong> tab for usage notes and API
            reference. The Design addon embeds the original Figma frame side by side, so you can compare
            implementation against the source without leaving the browser.
          </p>
          <p>
            The benefit is alignment at every layer: designers review real interaction, engineers get
            a stable contract for each variant, and the team shares one link instead of a PDF and a
            separate prototype. Add-ons for accessibility and visual regression (Chromatic) catch drift
            early — before a component ships inside a full dashboard.{" "}
            <strong className="text-[#fafafa] font-semibold">
              Try the component in the embed below — expand a card, switch variants, and notice the
              live interaction that a static Figma frame cannot show.
            </strong>
          </p>
        </SectionText>

        <div className="max-w-[1250px] mx-auto px-6 mt-10">
          <div className="overflow-hidden rounded-2xl border border-[#2a2d36] bg-[#17181c]">
            <iframe
              src={STORYBOOK_IFRAME_SRC}
              title="SensorStatusCard Storybook demo"
              className="w-full h-[960px] border-0 bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
