import { useState, type FormEvent } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  Disc,
  ExternalLink,
  Layers,
  Mail,
  Music,
  Send,
  Sparkles,
} from "lucide-react"

import Antigravity from "@/components/Antigravity"
import BlurText from "@/components/BlurText"
import MicroSlats from "@/components/MicroSlats"

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" />
    </svg>
  )
}

export function App() {
  const [matteTilesEnabled, setMatteTilesEnabled] = useState(true)
  const [activeEdition, setActiveEdition] = useState<"bvcovia" | "berechet">("bvcovia")
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null)

  // Newsletter state
  const [newsletterName, setNewsletterName] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  // Contact Inquiry state (opens native mail app)
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactRole, setContactRole] = useState("Artist / Management Shoot Inquiry")
  const [contactSubject, setContactSubject] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setNewsletterSubscribed(true)
  }

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subjectLine =
      contactSubject.trim() || `[COSMIC SHOT MAGAZINE] ${contactRole} — ${contactName || "Inquiry"}`
    const bodyLines = [
      `Name: ${contactName}`,
      `Email: ${contactEmail}`,
      `Inquiry Category: ${contactRole}`,
      "",
      "Message:",
      contactMessage,
      "",
      "— Sent via Cosmic Shot Magazine Official Website",
    ].join("\r\n")

    const mailtoUrl = `mailto:cosmicshotmagazine@gmail.com?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines)}`

    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] selection:bg-[#8C1D24] selection:text-[#F5F5F7] font-sans antialiased overflow-x-hidden">
      {/* BREATHABLE, SPACIOUS NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-[#2C2C2E]/70 bg-[#000000]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 lg:px-16">
          {/* Brand Title & Official Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <img
              src="/cosmicshot-logo.png"
              alt="Cosmic Shot Magazine Logo"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Breathable Center Navigation Links */}
          <nav className="hidden items-center gap-12 text-xs font-medium tracking-[0.26em] text-[#8E8E93] lg:flex">
            <a
              href="#editions"
              onClick={() => setActiveEdition("bvcovia")}
              className="py-1 transition-colors hover:text-[#F5F5F7]"
            >
              ICONS 002 — BVCOVIA
            </a>
            <a
              href="#editions"
              onClick={() => setActiveEdition("berechet")}
              className="py-1 transition-colors hover:text-[#F5F5F7]"
            >
              SERIES 001 — BERECHET
            </a>
            <a href="#newsletter" className="py-1 transition-colors hover:text-[#F5F5F7]">
              NEWSLETTER
            </a>
            <a href="#contact" className="py-1 transition-colors hover:text-[#F5F5F7]">
              CONTACT US
            </a>
          </nav>

          {/* Single ON/OFF Toggle Button for Matte Tiles Shader */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMatteTilesEnabled((prev) => !prev)}
              className={`flex items-center gap-2.5 border px-4 py-2.5 font-mono text-[11px] tracking-[0.2em] transition-all cursor-pointer ${
                matteTilesEnabled
                  ? "border-[#8C1D24] bg-[#74131A]/35 text-[#F5F5F7] shadow-[0_0_20px_rgba(140,29,36,0.35)]"
                  : "border-[#2C2C2E] bg-[#0A0A0A] text-[#8E8E93] hover:border-[#3A3A3C] hover:text-[#F5F5F7]"
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-[#8C1D24]" />
              <span>MATTE TILES: {matteTilesEnabled ? "ON" : "OFF"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION: MATTE TILES SHADER (MICROSLATS + SUBTLE MATTE ANTIGRAVITY) */}
      <section className="relative min-h-[88vh] w-full overflow-hidden border-b border-[#2C2C2E]">
        {matteTilesEnabled && (
          <>
            {/* Base Layer: Matte Slats / Tiles Shader */}
            <div className="absolute inset-0 z-0 opacity-75">
              <MicroSlats
                preset="swell"
                color="#74131A"
                glintColor="#8C1D24"
                backgroundColor="#000000"
                slatWidth={12}
                slatHeight={32}
                gap={4}
                roundness={0.65}
                speed={0.45}
                chop={0.4}
                glint={0.75}
                contrast={1.4}
                fog={0.55}
                interactive={true}
                cursorStrength={1.1}
                cursorSize={50}
                swirl={0.25}
                trail={1.5}
                lean={0.3}
              />
            </div>

            {/* Secondary Layer: Matte Particle Field */}
            <div className="absolute inset-0 z-10 mix-blend-screen">
              <Antigravity
                count={1100}
                magnetRadius={8.5}
                ringRadius={6.2}
                waveSpeed={0.32}
                waveAmplitude={0.8}
                waveCount={2}
                particleSize={0.78}
                lerpSpeed={0.032}
                colors={["#74131A", "#3A3A3C", "#8E8E93"]}
                colorMode="radial"
                colorSpeed={0.02}
                autoAnimate={true}
                particleVariance={1}
                rotationSpeed={0.08}
                depthFactor={0.9}
                pulseSpeed={1.5}
                particleShape="capsule"
                fieldStrength={9}
                ambient={0.22}
                interactive={true}
                clickBurst={true}
                intro={true}
                opacity={0.65}
              />
            </div>
          </>
        )}

        {/* Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_15%,#000000_92%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-44 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent" />

        {/* Hero Editorial Content */}
        <div className="relative z-30 mx-auto flex min-h-[88vh] max-w-[1440px] flex-col justify-between px-8 py-16 lg:px-16 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C2E]/60 pb-6">
            <span className="inline-flex items-center gap-2.5 border border-[#8C1D24]/70 bg-[#74131A]/25 px-4 py-1.5 font-mono text-[11px] font-medium tracking-[0.22em] text-[#F5F5F7]">
              <Sparkles className="h-3.5 w-3.5 text-[#8C1D24]" />
              ARTISTS. CREATIVITY. CULTURE.
            </span>
            <span className="font-mono text-xs tracking-[0.24em] text-[#8E8E93]">
              BUCHAREST, ROMANIA — 2026
            </span>
          </div>

          <div className="my-auto py-14 lg:py-20">
            <div className="mb-5 flex items-center gap-4 font-mono text-xs tracking-[0.28em] text-[#8C1D24]">
              <span>[ COSMIC SHOT MAGAZINE ]</span>
              <span className="h-px w-12 bg-[#8C1D24]" />
              <span className="text-[#8E8E93]">DOCUMENTING THE PEOPLE BEHIND THE CULTURE</span>
            </div>

            <BlurText
              text="BEYOND THE MUSIC. BEYOND THE NAME."
              delay={110}
              animateBy="words"
              direction="bottom"
              effect="focus"
              blur={14}
              stepDuration={0.45}
              trigger="load"
              className="max-w-5xl text-5xl font-extrabold tracking-[-0.03em] text-[#F5F5F7] sm:text-7xl lg:text-[5.4rem] leading-[0.98]"
            />

            <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 border-l-2 border-[#8C1D24] pl-6 md:grid-cols-12">
              <p className="text-base leading-relaxed text-[#F5F5F7]/85 md:col-span-8 sm:text-lg">
                An independent visual magazine documenting artists, creators and cultural figures
                through photography, interviews and editorial storytelling.
              </p>
              <div className="flex flex-col justify-between border-t border-[#2C2C2E] pt-4 font-mono text-[11px] tracking-[0.2em] text-[#8E8E93] md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                <div>
                  <div className="text-[#F5F5F7]">FOUNDER & EDITOR-IN-CHIEF</div>
                  <div className="mt-1 text-[#8C1D24]">DAVID DAVID ZAGABE</div>
                </div>
                <div className="mt-4">
                  <div className="text-[#F5F5F7]">PUBLISHED EDITIONS</div>
                  <div className="mt-1">001: MATEI BERECHET // 002: BVCOVIA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Edition Cards in Hero Footer */}
          <div className="grid grid-cols-1 gap-6 border-t border-[#2C2C2E]/80 pt-8 md:grid-cols-2">
            <a
              href="#editions"
              onClick={() => setActiveEdition("bvcovia")}
              className={`group flex items-center justify-between border p-5 transition-all ${
                activeEdition === "bvcovia"
                  ? "border-[#8C1D24] bg-[#74131A]/25"
                  : "border-[#2C2C2E] bg-[#0A0A0A]/80 hover:border-[#8C1D24]/60"
              }`}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.24em] text-[#8C1D24]">
                  THE ICONS SERIES — 002 // OCT 29, 2026
                </span>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#F5F5F7]">
                  BVCOVIA: Shaping the Sound of Romanian Trap
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#8C1D24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#editions"
              onClick={() => setActiveEdition("berechet")}
              className={`group flex items-center justify-between border p-5 transition-all ${
                activeEdition === "berechet"
                  ? "border-[#8C1D24] bg-[#74131A]/25"
                  : "border-[#2C2C2E] bg-[#0A0A0A]/80 hover:border-[#8C1D24]/60"
              }`}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.24em] text-[#8C1D24]">
                  ARTIST SERIES — 001 // OCT 17, 2026
                </span>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#F5F5F7]">
                  Matei Berechet: Rise of a Romanian Hip-Hop Sensation
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#8C1D24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* EDITION SWITCHER & FULL EDITORIAL ARTICLES */}
      <section id="editions" className="mx-auto max-w-[1440px] px-8 py-24 lg:px-16">
        {/* Edition Selector Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#2C2C2E] pb-8 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs tracking-[0.28em] text-[#8C1D24]">
              PUBLISHED ARCHIVE // 2 FEATURED ARTISTS
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#F5F5F7] sm:text-5xl">
              EDITORIAL FEATURES
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setActiveEdition("bvcovia")}
              className={`border px-6 py-3.5 font-mono text-xs tracking-[0.22em] transition-all cursor-pointer ${
                activeEdition === "bvcovia"
                  ? "border-[#8C1D24] bg-[#74131A] text-[#F5F5F7] shadow-[0_0_25px_rgba(140,29,36,0.4)]"
                  : "border-[#2C2C2E] bg-[#0A0A0A] text-[#8E8E93] hover:border-[#3A3A3C] hover:text-[#F5F5F7]"
              }`}
            >
              002 // BVCOVIA (THE ICONS SERIES)
            </button>
            <button
              type="button"
              onClick={() => setActiveEdition("berechet")}
              className={`border px-6 py-3.5 font-mono text-xs tracking-[0.22em] transition-all cursor-pointer ${
                activeEdition === "berechet"
                  ? "border-[#8C1D24] bg-[#74131A] text-[#F5F5F7] shadow-[0_0_25px_rgba(140,29,36,0.4)]"
                  : "border-[#2C2C2E] bg-[#0A0A0A] text-[#8E8E93] hover:border-[#3A3A3C] hover:text-[#F5F5F7]"
              }`}
            >
              001 // MATEI BERECHET (ARTIST SERIES)
            </button>
          </div>
        </div>

        {/* =====================================================================
            EDITION 002: BVCOVIA — SHAPING THE SOUND OF ROMANIAN TRAP
           ===================================================================== */}
        {activeEdition === "bvcovia" && (
          <article className="space-y-20">
            {/* Article Hero Banner */}
            <div className="grid grid-cols-1 gap-12 border border-[#2C2C2E] bg-[#070707] p-8 lg:grid-cols-12 lg:p-12">
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="inline-flex items-center gap-2 border border-[#8C1D24] bg-[#74131A]/30 px-3.5 py-1.5 font-mono text-xs tracking-[0.24em] text-[#F5F5F7]">
                    COSMIC SHOT MAGAZINE — THE ICONS SERIES — 002
                  </div>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-6xl leading-[1.05]">
                    BVCOVIA: SHAPING THE SOUND OF ROMANIAN TRAP
                  </h1>
                  <p className="mt-4 text-xl italic text-[#F5F5F7]/85">
                    “Beyond the music, beyond the name: the story of an artist building his own path.”
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#2C2C2E] pt-6 font-mono text-xs tracking-widest text-[#8E8E93] sm:grid-cols-2">
                  <div>
                    <span className="block text-[10px] text-[#8C1D24]">PHOTOGRAPHY</span>
                    <span className="mt-1 block text-[#F5F5F7]">David David Zagabe & Luca</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#8C1D24]">LOCATION & YEAR</span>
                    <span className="mt-1 block text-[#F5F5F7]">Bucharest, Romania — 2026</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/copy-of-fashion-magazine-template-magazine-in-black-red-bold-style-instagram-post-34-5.png",
                    caption: "BVCOVIA — Cosmic Shot Magazine: The Icons Series 002 Cover",
                  })
                }
                className="group relative overflow-hidden border border-[#2C2C2E] bg-[#000000] cursor-pointer lg:col-span-5"
              >
                <img
                  src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/copy-of-fashion-magazine-template-magazine-in-black-red-bold-style-instagram-post-34-5.png?w=1440"
                  alt="BVCOVIA Cosmic Shot Magazine Cover"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>

            {/* Chapter 01 & 02 + Portrait */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="space-y-12 lg:col-span-7">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    01 — THE ARTIST BEHIND THE NAME
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      In Romanian trap, an artist’s identity is built through more than music alone. It
                      takes a recognisable sound, a body of work and a personality that audiences
                      gradually come to know. For <strong>Bvcovia</strong>, that identity has developed
                      over years of releases, collaborations and creative decisions.
                    </p>
                    <p>
                      Born Ioan-Marian Răduly in Sfântu Gheorghe, Romania, <strong>Bvcovia</strong>{" "}
                      discovered his interest in music as a child. In a 2025 interview with{" "}
                      <em>Libertatea</em>, he recalled listening to music from an early age, with Romanian
                      hip-hop group B.U.G. Mafia among his early influences.
                    </p>
                    <p>
                      That early connection eventually became something more than an interest. Music grew
                      into a direction he wanted to pursue seriously, even when doing so meant making
                      decisions that took him away from a conventional career path.
                    </p>
                    <p>
                      Today, <strong>Bvcovia</strong>’s catalogue includes solo albums, collaborative
                      projects and singles that reflect different moments in his development. Rather than
                      being defined by one release, his career can be explored as an evolving body of work.
                    </p>
                    <p>
                      For this edition of The Icons Series, we look at the person behind the name, the
                      music that has shaped his journey and the relationships that have accompanied him
                      along the way.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-10">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    02 — THE STORY BEHIND BVCOVIA
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      An artist’s name can become a recognisable identity, but its origin may be far more
                      personal than audiences expect.
                    </p>
                    <p>
                      For <strong>Bvcovia</strong>, the name is connected to his experience living and
                      working in England. In his interview with <em>Libertatea</em>, he explained that
                      during that period he felt melancholic and compared his state of mind to the
                      atmosphere associated with Romanian poet George Bacovia. That association eventually
                      inspired his artistic name.
                    </p>
                    <p>
                      The connection is particularly interesting because it links a contemporary trap
                      artist with one of Romania’s best-known literary figures. George Bacovia is
                      associated with melancholy, solitude and an often sombre atmosphere in his poetry.
                      The name therefore carries a cultural reference as well as a personal memory.
                    </p>
                    <p>
                      It offers a different way to understand the artist’s identity: not simply as a name
                      chosen for its appearance, but as something connected to an experience that stayed
                      with him.
                    </p>
                    <p>
                      An artist’s name eventually takes on a life of its own. It becomes attached to
                      music, performances, collaborations and the way listeners interpret the work. Yet the
                      story behind it remains a small part of the person who existed before the public
                      knew the name.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2319.jpeg",
                      caption: "BVCOVIA — Photography by David David Zagabe & Luca",
                    })
                  }
                  className="sticky top-28 overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2319.jpeg?w=1440"
                    alt="Bvcovia Portrait IMG_2319"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="border-t border-[#2C2C2E] p-4 font-mono text-xs text-[#8E8E93]">
                    PLATE // IMG_2319 — BVCOVIA IN BUCHAREST
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters 03, 04 & 05 (Discography) */}
            <div className="grid grid-cols-1 gap-12 border-t border-[#2C2C2E] pt-16 lg:grid-cols-12">
              <div className="space-y-10 lg:col-span-6">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    03 — CHOOSING MUSIC
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Every artist has a different path, and Bvcovia’s journey has been shaped by his
                      decision to pursue music and develop his own artistic identity.
                    </p>
                    <p>
                      After spending several years in England, he returned to Romania with the ambition of
                      establishing his own music studio and pursuing his musical goals. It was an
                      important step towards building the future he had envisioned for himself.
                    </p>
                    <p>
                      His story reflects a commitment to music that has continued throughout his career.
                      Developing an identity as an artist takes time, consistency and a willingness to
                      keep creating.
                    </p>
                    <p>
                      For Bvcovia, music became more than an interest. It became the direction he chose to
                      follow, and the foundation on which he would continue to build his career.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-10">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    04 — FINDING HIS PLACE IN ROMANIAN TRAP
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Romanian trap has developed through a generation of artists bringing different
                      influences, production styles and personal perspectives into the local hip-hop
                      scene.
                    </p>
                    <p>
                      Bvcovia has established his own presence within this landscape through his music, his
                      catalogue and his continued artistic development.
                    </p>
                    <p>
                      His career includes solo projects such as <em>Lego</em>, <em>En Sabah Nur</em>,{" "}
                      <em>Kira</em>, <em>Vise Lucide</em> and <em>En Sabah Nur 2</em>, each forming part of
                      a broader body of work.
                    </p>
                    <p>
                      Rather than being defined by one album or a single moment, his career can be explored
                      through the music he has released over the years.
                    </p>
                    <p>
                      Bvcovia’s story is one of continued artistic development: building a catalogue,
                      exploring creative directions and shaping an identity of his own within Romanian trap.
                    </p>
                  </div>
                </div>
              </div>

              {/* 05 — The Discography Box */}
              <div className="border border-[#2C2C2E] bg-[#070707] p-8 lg:col-span-6">
                <div className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                  <Disc className="h-4 w-4" />
                  <span>05 — THE DISCOGRAPHY</span>
                </div>
                <p className="mt-3 text-sm text-[#8E8E93]">
                  Bvcovia’s recorded work includes solo projects and collaborative releases. The following
                  selection highlights several important projects in his catalogue.
                </p>

                <div className="mt-6 divide-y divide-[#2C2C2E]">
                  {[
                    {
                      title: "PE TRAP — 2018",
                      desc: "An early project associated with the beginning of his recorded career.",
                    },
                    {
                      title: "LEGO — 2020",
                      desc: "A solo project from the early period of his developing catalogue.",
                    },
                    {
                      title: "EN SABAH NUR — 2021",
                      desc: "A project that became part of the wider body of work associated with his artistic identity.",
                    },
                    {
                      title: "KIRA — 2022",
                      desc: "A further solo release, continuing the development of his catalogue.",
                    },
                    {
                      title: "VISE LUCIDE — 2024",
                      desc: "A later project in his solo discography, released as his body of work continued to expand.",
                    },
                    {
                      title: "EN SABAH NUR 2 — 2025",
                      desc: "A continuation of the En Sabah Nur title, released on 9 April 2025.",
                    },
                    {
                      title: "BANDO SERIES — 2020–2025",
                      desc: "The BANDO projects bring Bvcovia and Marko Glass together in collaborative releases, with the series extending through several instalments, including BANDO 4 in 2025.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="py-3.5">
                      <div className="font-mono text-xs font-bold tracking-wider text-[#F5F5F7]">
                        {item.title}
                      </div>
                      <p className="mt-1 text-sm text-[#8E8E93]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Official Spotify Artist Embed */}
                <div className="mt-6">
                  <iframe
                    title="Spotify Embed: Bvcovia"
                    style={{ borderRadius: "8px" }}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    src="https://open.spotify.com/embed/artist/5CqmNRrmp3UP3NGccmlKHR?utm_source=oembed"
                  />
                </div>
              </div>
            </div>

            {/* Chapter 06 & YouTube Video Archive */}
            <div className="space-y-8 border-t border-[#2C2C2E] pt-16">
              <div className="max-w-3xl space-y-4">
                <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                  06 — MORE THAN A RELEASE
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                  <p>
                    A discography can tell us when music was released, but it cannot explain everything
                    about an artist’s relationship with the work.
                  </p>
                  <p>
                    Every project is the result of creative choices: what to record, what to release, what
                    to revisit and what to leave behind. The finished track is what listeners hear, while
                    the process that led to it is often less visible.
                  </p>
                  <p>
                    <strong>Bvcovia</strong>’s catalogue provides a way to follow his development across
                    different projects and periods. It also shows the place of collaboration in his career,
                    alongside his work as a solo artist.
                  </p>
                  <p>
                    The important distinction is that collaboration does not erase individuality. Artists
                    can work together while maintaining their own voices, priorities and creative
                    identities.
                  </p>
                  <p>
                    For <strong>Bvcovia</strong>, the solo releases and collaborative projects form
                    different parts of the same wider story. Each offers a different perspective on the
                    artist and the work he continues to put into the world.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {["uCgzlZgObZc", "1BkwyFuF3r8", "BJMgOqh_9RM", "PVNcmAQPjL4"].map((videoId) => (
                  <div key={videoId} className="aspect-video overflow-hidden border border-[#2C2C2E] bg-[#050505]">
                    <iframe
                      loading="lazy"
                      title={`Bvcovia YouTube Video ${videoId}`}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Chapters 07, 08 & Marko Glass Feature */}
            <div className="grid grid-cols-1 gap-12 border-t border-[#2C2C2E] pt-16 lg:grid-cols-12">
              <div className="space-y-10 lg:col-span-7">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    07 — BVCOVIA & MARKO GLASS: BEYOND THE MUSIC
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Some relationships begin with a shared interest and grow into something that extends
                      far beyond the original connection.
                    </p>
                    <p>
                      <strong>Bvcovia</strong> and <strong>Marko Glass</strong> are known for their musical
                      partnership, but their relationship is also rooted in friendship. In a 2022 report by{" "}
                      <em>VICE Romania</em>, the two were described as friends who communicated openly and
                      said they had never argued, attributing the strength of their relationship to that
                      communication.
                    </p>
                    <p>
                      The two artists have worked together on the <em>BANDO</em> series and on tracks
                      including “Dior,” “Cadou,” “Praf” and “Ride.” Their collaborations form a
                      recognisable part of their respective catalogues, but the relationship behind the
                      work is not limited to studio sessions or releases.
                    </p>
                    <p>
                      Friendship can provide a different kind of creative environment. Familiarity and
                      trust can make it easier to exchange ideas, understand each other’s instincts and
                      build something together without needing to explain every decision.
                    </p>
                    <p>
                      That does not mean their careers are interchangeable. Bvcovia has his own solo
                      catalogue, artistic identity and direction. Marko Glass has his own work as well.
                      Their friendship connects two individual journeys without making either artist an
                      extension of the other.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-10">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    08 — THE IMPORTANCE OF CREATIVE CONNECTIONS
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Music is often experienced individually: one artist, one song, one listener. But the
                      process of making it can be collaborative, involving friendships, long-standing
                      working relationships and people who understand the creative process from the inside.
                    </p>
                    <p>
                      <strong>Bvcovia</strong>’s work with <strong>Marko Glass</strong> is one example of
                      how a relationship can exist on two levels at once. There is the public work — the
                      tracks, projects and performances — and there is the private friendship that exists
                      outside the finished music.
                    </p>
                    <p>
                      For <strong>Bvcovia</strong>, friendship and collaboration are part of the wider
                      landscape of his career. They are not the only explanation for his work, but they
                      provide another way to understand the person behind the music.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2352.jpg",
                      caption: "Bvcovia & Marko Glass — by niculaibnt",
                    })
                  }
                  className="overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2352.jpg?w=1125"
                    alt="Bvcovia and Marko Glass"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="border-t border-[#2C2C2E] p-4 font-mono text-xs text-[#8E8E93]">
                    PHOTO // BY NICULAIBNT
                  </div>
                </div>

                <iframe
                  title="Spotify Embed: Anubis"
                  style={{ borderRadius: "8px" }}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  src="https://open.spotify.com/embed/album/7bUjQKCSnBG52CxK2UPiqA?utm_source=oembed"
                />
              </div>
            </div>

            {/* Pullquote + Chapters 09, 10, 11, 12 */}
            <div className="border-y border-[#8C1D24]/60 bg-[#74131A]/15 p-10 text-center lg:p-14">
              <blockquote className="mx-auto max-w-2xl">
                <p className="text-3xl font-bold tracking-tight text-[#F5F5F7] sm:text-4xl">
                  “Eu mă simt ca Bacovia / I feel like Bacovia”
                </p>
                <cite className="mt-4 block font-mono text-xs not-italic tracking-[0.24em] text-[#8C1D24]">
                  — BVCOVIA, ON THE ORIGIN OF HIS STAGE NAME
                </cite>
              </blockquote>
            </div>

            {/* Gallery Duo (IMG_2286 & IMG_2288) */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2286.png",
                "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2288.png",
              ].map((imgUrl, index) => (
                <div
                  key={imgUrl}
                  onClick={() =>
                    setLightboxImage({
                      src: imgUrl,
                      caption: `BVCOVIA — Cosmic Shot Magazine Plate 0${index + 2}`,
                    })
                  }
                  className="overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src={`${imgUrl}?w=1440`}
                    alt={`Bvcovia Editorial Plate ${index + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              ))}
            </div>

            {/* Chapters 09, 10, 11 & IMG_2317 */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="space-y-10 lg:col-span-7">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    09 — THE ARTIST’S EVOLUTION
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      An artist’s development is not always a straight line. It can involve
                      experimentation, changes in direction, returning to familiar ideas or approaching a
                      new project with a different perspective.
                    </p>
                    <p>
                      <strong>Bvcovia</strong>’s catalogue spans several years, from early releases to more
                      recent albums and singles. Projects such as <em>Lego</em>, <em>En Sabah Nur</em>,{" "}
                      <em>Kira</em>, <em>Vise Lucide</em> and <em>En Sabah Nur 2</em> provide reference
                      points across his solo discography. The collaborative <em>BANDO</em> series adds
                      another dimension, showing how his work can also develop through sustained
                      partnerships.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-8">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    10 — BEYOND THE MUSIC: WHAT COMES NEXT
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      A profile of an active artist should not end by suggesting that their story has
                      reached its final chapter.
                    </p>
                    <p>
                      Bvcovia continued releasing music in 2026. Among his releases were “Soarele și Luna,”
                      published in March, and “Forgive Me,” released in September. These releases show that
                      his catalogue has continued to grow beyond the projects that established earlier
                      stages of his career.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-8">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    11 — THE COSMIC SHOT PERSPECTIVE
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      At Cosmic Shot Magazine, we are interested in more than the public image of an
                      artist. We want to explore the person behind the name, the work that has shaped their
                      identity and the experiences that give context to what audiences see.
                    </p>
                    <p>
                      Through photography and storytelling, The Icons Series documents artists as they are
                      now, while recognising that their stories continue beyond any single feature. Bvcovia
                      is the focus of this second edition. His music, his journey and his own identity
                      remain at the centre of it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2317-2.jpeg",
                      caption: "BVCOVIA — IMG_2317 by David David Zagabe",
                    })
                  }
                  className="overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/img_2317-2.jpeg?w=1440"
                    alt="Bvcovia IMG_2317"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* 12 — About This Edition & Sources */}
                <div className="border border-[#2C2C2E] bg-[#070707] p-6 font-mono text-xs leading-relaxed">
                  <div className="text-sm font-bold tracking-[0.2em] text-[#8C1D24]">
                    12 — ABOUT THIS EDITION
                  </div>
                  <div className="mt-4 space-y-1.5 text-[#F5F5F7]">
                    <div>
                      <span className="text-[#8E8E93]">SERIES:</span> THE ICONS SERIES — 002
                    </div>
                    <div>
                      <span className="text-[#8E8E93]">PHOTOGRAPHY:</span> David David Zagabe & Luca
                    </div>
                    <div>
                      <span className="text-[#8E8E93]">FOUNDER & EDITOR-IN-CHIEF:</span> David David Zagabe
                    </div>
                    <div>
                      <span className="text-[#8E8E93]">LOCATION:</span> Bucharest, Romania (2026)
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#2C2C2E] pt-4">
                    <div className="text-[11px] font-bold tracking-widest text-[#8C1D24]">
                      SOURCES & REFERENCES
                    </div>
                    <ul className="mt-2 space-y-2 text-[11px] text-[#8E8E93]">
                      <li>
                        <a
                          href="https://www.vice.com/ro/article/o-zi-cu-trapperii-bvcovia-marko-glass-am-aflat-realitate-versuri-viata-personala/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#F5F5F7] underline"
                        >
                          01. VICE Romania — Bvcovia & Marko Glass Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.libertatea.ro/entertainment/bvcovia-artistul-care-a-riscat-totul-pentru-muzica-eram-falit-dar-am-avut-o-viziune-totul-pleaca-de-la-un-gand-si-multa-munca-5437508"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#F5F5F7] underline"
                        >
                          02. Libertatea — Interview (Sept 6, 2025)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.albumoftheyear.org/artist/75488-bvcovia/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#F5F5F7] underline"
                        >
                          03. Album of the Year — Bvcovia Discography
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bvcovia-shop.com/shop/albume~125"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#F5F5F7] underline"
                        >
                          04. Bvcovia Official Store
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* =====================================================================
            EDITION 001: MATEI BERECHET — RISE OF A ROMANIAN HIP-HOP SENSATION
           ===================================================================== */}
        {activeEdition === "berechet" && (
          <article className="space-y-20">
            {/* Article Hero Banner */}
            <div className="grid grid-cols-1 gap-12 border border-[#2C2C2E] bg-[#070707] p-8 lg:grid-cols-12 lg:p-12">
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="inline-flex items-center gap-2 border border-[#8C1D24] bg-[#74131A]/30 px-3.5 py-1.5 font-mono text-xs tracking-[0.24em] text-[#F5F5F7]">
                    COSMIC SHOT MAGAZINE — ARTIST SERIES 001
                  </div>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-6xl leading-[1.05]">
                    MATEI BERECHET: RISE OF A ROMANIAN HIP-HOP SENSATION
                  </h1>
                  <p className="mt-4 text-xl italic text-[#F5F5F7]/85">
                    “One of Romanian Rap’s Biggest Names — Beyond the Music.”
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#2C2C2E] pt-6 font-mono text-xs tracking-widest text-[#8E8E93] sm:grid-cols-3">
                  <div>
                    <span className="block text-[10px] text-[#8C1D24]">PHOTOGRAPHY & DIRECTION</span>
                    <span className="mt-1 block text-[#F5F5F7]">David David Zagabe</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#8C1D24]">SPOTIFY REACH</span>
                    <span className="mt-1 block text-[#F5F5F7]">521K+ Monthly // 88M+ Streams</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#8C1D24]">LOCATION & YEAR</span>
                    <span className="mt-1 block text-[#F5F5F7]">Bucharest, Romania — 2026</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144232.png",
                    caption: "Matei Berechet — Photography by David David Zagabe (02144232)",
                  })
                }
                className="group relative overflow-hidden border border-[#2C2C2E] bg-[#000000] cursor-pointer lg:col-span-5"
              >
                <img
                  src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144232.png?w=1440"
                  alt="Matei Berechet Portrait 1"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>

            {/* Sections 1, 2, 3 & Second Portrait */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="space-y-12 lg:col-span-7">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    01 — BUILDING A NAME IN ROMANIAN HIP-HOP
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Before the wider recognition, before the festival crowds and before his music reached
                      a much larger audience, there were years of work.
                    </p>
                    <p>
                      <strong>Matei Berechet</strong> began making music with friends around 2017. In a
                      2023 interview with PRO TV, he reflected on those early beginnings and explained that
                      he had spent approximately six years trying to move beyond the underground and reach
                      a broader audience.
                    </p>
                    <p>
                      It is a detail that puts his career into perspective. What might look like a sudden
                      breakthrough from the outside was, for him, the result of years spent working towards
                      a bigger audience.
                    </p>
                    <p>
                      Today, <strong>Berechet</strong>’s catalogue includes albums, singles and
                      collaborations that have helped establish his name in Romanian hip-hop.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-10">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    02 — THE MOMENT MORE PEOPLE TOOK NOTICE
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      In 2023, <em>Bam, Bam, Bam</em> became a major turning point in{" "}
                      <strong>Berechet</strong>’s public visibility. The track spent an extended period at
                      the top of Romania’s trending charts, bringing his music to listeners far beyond his
                      existing audience.
                    </p>
                    <p>
                      But <strong>Berechet</strong> himself offered an interesting perspective on the song.
                      Speaking to PRO TV, he explained that it had been created playfully and was not
                      necessarily representative of his artistic identity. He was happy that listeners had
                      embraced it.
                    </p>
                    <p>
                      That distinction matters. An artist can become widely recognized through one release
                      without that release defining everything they do.
                    </p>
                    <p>
                      The same interview captured another important moment: his appearance at Beach,
                      Please!, where fans sang along to his music. <strong>Berechet</strong> described that
                      connection with the crowd as one of the greatest joys an artist could experience.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-10">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    03 — BEYOND ONE SONG & A CAREER THAT KEEPS MOVING
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      <strong>Berechet</strong>’s discography tells a broader story than a single viral
                      moment. His album <em>33</em>, released in 2022, and <em>FAVELA DO BRAZIL</em>,
                      released in 2024, represent two distinct points in his recorded catalogue. His work
                      also includes the 2025 EP <em>APELURI PIERDUTE</em>, released with Vanilla.
                    </p>
                    <p>
                      Across his releases, <strong>Berechet</strong> has worked with artists including
                      Vanilla, Cercel, HAZEY, Marko Glass and Petre Ștefan. His collaborations range from
                      tracks such as <em>WAKA WAKA E</em> and <em>Vampiri</em> to later releases including{" "}
                      <em>STIU CA TI-E DOR</em>, <em>MODEL</em> and <em>LNPSTRD</em>.
                    </p>
                    <p>
                      In 2025, he appeared on several collaborative tracks, including{" "}
                      <em>STIU CA TI-E DOR</em>, <em>MODEL</em> and <em>LNPSTRD</em>. His 2026 releases
                      include <em>DEUCESS</em>, <em>LA NOI E CEARTA</em> and the album{" "}
                      <em>#BACKto2016</em>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144184.png",
                      caption: "Matei Berechet — Photography by David David Zagabe (02144184)",
                    })
                  }
                  className="overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144184.png?w=1440"
                    alt="Matei Berechet Portrait 2"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="border-t border-[#2C2C2E] p-4 font-mono text-xs text-[#8E8E93]">
                    PLATE // 02144184 — MATEI BERECHET
                  </div>
                </div>

                {/* Spotify Embed for Berechet */}
                <div className="border border-[#2C2C2E] bg-[#070707] p-6">
                  <div className="mb-4 flex items-center justify-between font-mono text-xs text-[#8C1D24]">
                    <span className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      STREAMING CATALOGUE
                    </span>
                    <a
                      href="https://www.youtube.com/@berechett?sub_confirmation=1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#F5F5F7] hover:text-[#8C1D24]"
                    >
                      YOUTUBE <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <iframe
                    title="Spotify Embed: Berechet"
                    style={{ borderRadius: "8px" }}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    src="https://open.spotify.com/embed/artist/50vNYJ9Cj5MfsFqGqI7JXQ?utm_source=oembed"
                  />
                </div>
              </div>
            </div>

            {/* Sections 4, 5, 6 & Third Portrait */}
            <div className="grid grid-cols-1 gap-12 border-t border-[#2C2C2E] pt-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144250.png",
                      caption: "Matei Berechet — Photography by David David Zagabe (02144250)",
                    })
                  }
                  className="overflow-hidden border border-[#2C2C2E] bg-[#070707] cursor-pointer group"
                >
                  <img
                    src="https://cosmicshotmagazine.wordpress.com/wp-content/uploads/2026/10/02144250.png?w=1440"
                    alt="Matei Berechet Portrait 3"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="border-t border-[#2C2C2E] p-4 font-mono text-xs text-[#8E8E93]">
                    PLATE // 02144250 — PHOTOGRAPHY BY DAVID DAVID ZAGABE
                  </div>
                </div>
              </div>

              <div className="space-y-10 lg:col-span-7">
                <div className="space-y-4">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    04 — THE NUMBERS BEHIND THE NAME
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Berechet’s presence on streaming platforms offers another perspective on his career.
                      In October 2026, third-party Spotify analytics tracked approximately 521,000 monthly
                      listeners and around 190,000 followers on his artist profile.
                    </p>
                    <p>
                      His catalogue was estimated to have accumulated more than 88 million Spotify streams
                      across its releases. Among his recent successes, <em>DEUCESS</em>, featuring Vanilla,
                      had surpassed 8.4 million Spotify streams by October 2026, with more than 4 songs
                      over 8 million Spotify streams.
                    </p>
                    <p>
                      The song also continued to perform strongly in Romania: in the week of October 8,
                      2026, it ranked first on Soundcharts’ Romanian Spotify chart, with approximately
                      183,000 streams that week.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[#2C2C2E] pt-8">
                  <h2 className="font-mono text-sm font-bold tracking-[0.24em] text-[#8C1D24]">
                    05 — HIS PLACE IN ROMANIAN RAP & BEYOND THE MUSIC
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-[#F5F5F7]/90">
                    <p>
                      Berechet belongs to a generation of artists whose careers have developed alongside
                      the changing ways people discover music. Streaming platforms, social media and live
                      performances have all become important routes through which Romanian rap reaches
                      listeners.
                    </p>
                    <p>
                      For the first edition of <strong>COSMIC SHOT MAGAZINE — ARTIST SERIES</strong>, we
                      turn our attention to an artist whose story extends beyond the tracks that first
                      introduced him to a wider audience. This is Berechet, beyond the music.
                    </p>
                  </div>
                </div>

                <div className="border border-[#2C2C2E] bg-[#070707] p-6 font-mono text-xs">
                  <div className="font-bold tracking-widest text-[#8C1D24]">
                    CREDITS & SOURCES
                  </div>
                  <p className="mt-2 text-[#F5F5F7]">
                    Photography and editorial direction: <strong>David David ZAGABE</strong>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-6 text-[#8E8E93]">
                    <a
                      href="https://www.protv.ro/articol/90305-exclusiv-berechet-tanarul-care-a-facut-senzatie-la-beach-please-detalii-despre-cariera-muzica-si-viata"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-[#F5F5F7]"
                    >
                      PRO TV Interview (May 2023)
                    </a>
                    <a
                      href="https://www.shazam.com/artist/berechet/1485748930"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-[#F5F5F7]"
                    >
                      Shazam Profile
                    </a>
                    <a
                      href="https://open.spotify.com/artist/50vNYJ9Cj5MfsFqGqI7JXQ"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-[#F5F5F7]"
                    >
                      Spotify Catalogue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </section>

      {/* =====================================================================
          NEWSLETTER SECTION
         ===================================================================== */}
      <section
        id="newsletter"
        className="border-t border-[#2C2C2E] bg-gradient-to-b from-[#060606] to-[#000000] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-12 border border-[#2C2C2E] bg-[#0A0A0A] p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#8C1D24]">
                <Mail className="h-4 w-4" />
                <span>COSMIC SHOT DISPATCH</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-4xl">
                Subscribe to our newsletter and never miss a new article!
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#8E8E93]">
                Cosmic Shot Magazine is an online magazine made by culture lovers. We offer weekly
                reflections, reviews, and news on art, literature, and music. Please subscribe to our
                newsletter to let us know whenever we publish new content. We send no spam, and you can
                unsubscribe at any time.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubscribed ? (
                <div className="flex flex-col items-start gap-3 border border-[#8C1D24] bg-[#74131A]/20 p-8">
                  <div className="flex items-center gap-2.5 text-[#F5F5F7] font-bold">
                    <CheckCircle2 className="h-5 w-5 text-[#8C1D24]" />
                    <span>Thank you for subscribing!</span>
                  </div>
                  <p className="text-sm text-[#8E8E93]">
                    You’re on the list ({newsletterEmail}). You will be notified as soon as our next
                    artist edition drops.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setNewsletterSubscribed(false)
                      setNewsletterEmail("")
                      setNewsletterName("")
                    }}
                    className="mt-2 font-mono text-xs tracking-widest text-[#8C1D24] underline cursor-pointer"
                  >
                    REGISTER ANOTHER EMAIL
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      NAME (REQUIRED)
                    </label>
                    <input
                      type="text"
                      required
                      value={newsletterName}
                      onChange={(e) => setNewsletterName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      EMAIL ADDRESS (REQUIRED)
                    </label>
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-[#8C1D24] bg-[#74131A] px-6 py-4 font-mono text-xs font-semibold tracking-[0.2em] text-[#F5F5F7] uppercase transition-all hover:bg-[#8C1D24] hover:shadow-[0_0_30px_rgba(140,29,36,0.5)] cursor-pointer"
                  >
                    Subscribe to our newsletter and never miss a new article!
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONTACT US / INQUIRY SECTION (OPENS NATIVE MAIL APP)
         ===================================================================== */}
      <section id="contact" className="border-t border-[#2C2C2E] bg-[#000000] py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left Description */}
            <div className="space-y-6 lg:col-span-5">
              <span className="font-mono text-xs tracking-[0.28em] text-[#8C1D24]">
                BOOKINGS & EDITORIAL INQUIRIES
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#F5F5F7] sm:text-5xl">
                CONTACT US
              </h2>
              <p className="text-base leading-relaxed text-[#8E8E93]">
                Whether you are an artist, manager, label representative, or fellow photographer looking
                to collaborate on an upcoming edition of <strong>Cosmic Shot Magazine</strong>, reach out
                directly below. Submitting this form opens your device’s native mail app ready to send.
              </p>

              <div className="space-y-4 border-t border-[#2C2C2E] pt-6 font-mono text-xs">
                <div>
                  <span className="text-[#8E8E93]">FOUNDER & EDITOR-IN-CHIEF:</span>
                  <div className="mt-1 text-[#F5F5F7]">David David Zagabe</div>
                </div>
                <div>
                  <span className="text-[#8E8E93]">BASE:</span>
                  <div className="mt-1 text-[#F5F5F7]">Bucharest, Romania</div>
                </div>
                <div>
                  <span className="text-[#8E8E93]">INSTAGRAM:</span>
                  <div className="mt-1">
                    <a
                      href="https://www.instagram.com/cosmicshotmagazine"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#8C1D24] hover:underline"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      @cosmicshotmagazine
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Native Mailto Form */}
            <div className="border border-[#2C2C2E] bg-[#080808] p-8 sm:p-10 lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Artist / Manager Name"
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="contact@artist.com"
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={contactRole}
                      onChange={(e) => setContactRole(e.target.value)}
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] focus:border-[#8C1D24] focus:outline-none"
                    >
                      <option value="Artist / Management Shoot Inquiry">
                        Artist / Management Shoot Inquiry
                      </option>
                      <option value="The Icons Series Feature Pitch">
                        The Icons Series Feature Pitch
                      </option>
                      <option value="Press & Media Collaboration">
                        Press & Media Collaboration
                      </option>
                      <option value="General Editorial Inquiry">
                        General Editorial Inquiry
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="Feature Shoot / Press Inquiry"
                      className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] px-4 py-3.5 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] tracking-[0.2em] text-[#8E8E93]">
                    MESSAGE / PROJECT DETAILS *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell us about the artist, project timeline, location, and creative vision..."
                    className="mt-2 w-full border border-[#2C2C2E] bg-[#000000] p-4 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/50 focus:border-[#8C1D24] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 border border-[#8C1D24] bg-[#74131A] px-8 py-4 font-mono text-xs font-semibold tracking-[0.22em] text-[#F5F5F7] uppercase transition-all hover:bg-[#8C1D24] hover:shadow-[0_0_30px_rgba(140,29,36,0.5)] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  CONTACT US — OPEN MAIL APP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2C2C2E] bg-[#000000] text-[#8E8E93]">
        <div className="mx-auto max-w-[1440px] px-8 py-14 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <img
                src="/cosmicshot-logo.png"
                alt="Cosmic Shot Magazine Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <div className="text-base font-bold tracking-[0.28em] text-[#F5F5F7]">
                  COSMIC SHOT MAGAZINE
                </div>
                <p className="mt-1 text-xs text-[#8E8E93]">
                  Artists. Creativity. Culture. — Documenting the people behind the culture.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs tracking-widest">
              <a
                href="https://www.instagram.com/cosmicshotmagazine"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F5F5F7] hover:text-[#8C1D24]"
              >
                <InstagramIcon className="h-4 w-4 text-[#8C1D24]" />
                INSTAGRAM
              </a>
              <span>•</span>
              <span>BUCHAREST, ROMANIA — 2026</span>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX FOR FULL-SCREEN PORTRAIT VIEWING */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/95 p-6 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl border border-[#8C1D24] bg-[#080808] p-4"
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="max-h-[80vh] w-auto object-contain mx-auto"
            />
            <div className="mt-4 flex items-center justify-between border-t border-[#2C2C2E] pt-3 font-mono text-xs text-[#8E8E93]">
              <span>{lightboxImage.caption}</span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="border border-[#8C1D24] bg-[#74131A] px-3 py-1 text-[#F5F5F7] cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
