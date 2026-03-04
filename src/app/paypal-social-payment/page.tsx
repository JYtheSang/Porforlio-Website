import Image from "next/image"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "PayPal Social Payment — Jie Yang",
  description: "Lead Product Design for PayPal's Social Payments — Pool Money, Emojis & Themes, Quick Reply, Messaging, and Fundraiser.",
}

const sections = [
  {
    id: "pool-money",
    title: "Pool Money",
    image: "/projects/paypal/pool-money.png",
    role: "Lead Product Designer · Concept → Launch",
    description: "Pool Money explores how groups can easily collect, manage, and spend money together for shared goals. The project focused on making group payments transparent, flexible, and friction-light—from creating a pool and contributing funds to tracking activity and checking out as a group. The feature launched within the PayPal app, enabling people to organize money collaboratively without leaving their existing payment flow.",
    link: {
      href: "https://www.paypal.com/us/digital-wallet/send-receive-money/pool-money",
      label: "View Public Product Page",
    },
  },
  {
    id: "emojis-themes",
    title: "Emojis and Themes",
    image: "/projects/paypal/emojis-themes.png",
    role: "Lead Product Designer · Concept → Launch",
    description: "Emojis and Themes explored how rich media could be meaningfully integrated into a single P2P payment without disrupting speed or clarity. I investigated multiple media types—static emojis, animated themes, and expressive illustrations—and evaluated where they should live within the send flow, how they scale across screens, and when they should appear to enhance emotion without overwhelming the transaction. The final design balances expressiveness and restraint, introducing media at moments of intent and confirmation while preserving a fast, familiar payment experience.",
    link: null,
  },
  {
    id: "quick-reply",
    title: "Quick Reply",
    image: "/projects/paypal/quick-reply.png",
    role: "Lead Product Designer · Concept → Launch",
    description: "Quick Reply enhances the receiving experience by enabling instant acknowledgment of P2P payments. Designed to reassure senders and reduce social friction, the feature surfaces contextual responses at moments of receipt, turning payments into closed, mutually acknowledged exchanges.",
    link: null,
  },
  {
    id: "messaging",
    title: "Messaging",
    image: "/projects/paypal/messaging.png",
    role: "Lead Product Designer · Concept → Launch",
    description: "Messaging embeds social interaction directly into the payment experience. The released design integrates quick replies and follow-up messaging within payment receipts, enabling acknowledgment and conversation without breaking transactional flow. Message-based P2P payments were also explored as a future direction, but were not included in the final launch.",
    link: null,
  },
  {
    id: "fundraiser",
    title: "PayPal Fundraiser",
    image: "/projects/paypal/fundraiser.png",
    role: "Lead Product Designer · Concept → Launch",
    description: "PayPal Fundraiser helps people raise money for causes through clear storytelling, transparent progress, and easy sharing. The experience supports the full lifecycle for both organizers and donors—from campaign creation and contribution to progress tracking and social sharing.",
    link: {
      href: "https://www.paypal.com/us/fundraiser/hub",
      label: "Access PayPal Fundraiser",
    },
  },
]

export default function PayPalSocialPayment() {
  return (
    <main className="pb-24">

      {/* Back nav */}
      <div className="max-w-[800px] mx-auto px-6 pt-10 pb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </a>
      </div>

      {/* Cover image */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden bg-[#1a1a2e]">
          <Image
            src="/projects/paypal/cover.png"
            alt="PayPal Social Payment"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-16 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">PayPal · 2019–2024</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Social Payments
          </h1>
        </div>
        <p>
          During my time at PayPal, I worked on a range of products exploring the{" "}
          <strong className="text-[#fafafa] font-semibold">social dimensions of payments</strong>. We observed
          that traditional payment flows treated transactions as isolated actions, often stripping away the
          social context that gives them meaning. We believed that payments should not exist as standalone
          steps, but be deeply integrated into the social spaces where conversation, intent, and shared
          experiences already exist. Through multiple explorations and experiments, several of these concepts
          matured into shipped features that are now live in the PayPal app.
        </p>
        <p>
          The work shown here represents{" "}
          <strong className="text-[#fafafa] font-semibold">shipped outcomes of a much broader exploration</strong>{" "}
          effort across social, messaging, and payment surfaces, all of which are accessible within the PayPal
          app or website, while much of the broader exploration remains internal due to confidentiality.
        </p>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.id} className="mt-20">
          {/* Section image */}
          <div className="max-w-[1250px] mx-auto px-6">
            <div className="w-full rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src={section.image}
                alt={section.title}
                width={1600}
                height={900}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Section text */}
          <div className="max-w-[800px] mx-auto px-6 mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa] mb-2">
              {section.title}
            </h2>
            <p className="text-sm text-[#a1a1aa] mb-5">
              <span className="font-semibold text-[#fafafa]">Role: </span>
              {section.role}
            </p>
            <p className="text-base leading-7 text-[#94a3b8]">{section.description}</p>
            {section.link && (
              <a
                href={section.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#60a5fa] hover:opacity-80 transition-opacity"
              >
                {section.link.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      ))}

    </main>
  )
}
