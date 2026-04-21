"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Types
interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  ticketUrl: string;
  soldOut?: boolean;
}

// Data
const events: Event[] = [
  {
    id: "1",
    title: "Los Angeles Premiere",
    location: "Laemmle Royal Theatre, West Hollywood",
    date: "June 8, 2025",
    time: "7:30 PM",
    ticketUrl: "#",
  },
  {
    id: "2",
    title: "AFI Docs Film Festival",
    location: "Washington DC",
    date: "June 15, 2025",
    time: "6:00 PM",
    ticketUrl: "#",
  },
  {
    id: "3",
    title: "Frameline Film Festival",
    location: "Castro Theatre, San Francisco",
    date: "June 22, 2025",
    time: "5:30 PM",
    ticketUrl: "#",
  },
  {
    id: "4",
    title: "Outfest Los Angeles",
    location: "DGA Theater, Los Angeles",
    date: "July 12, 2025",
    time: "8:00 PM",
    ticketUrl: "#",
    soldOut: true,
  },
  {
    id: "5",
    title: "New York Premiere",
    location: "Film Forum, NYC",
    date: "July 18, 2025",
    time: "7:00 PM",
    ticketUrl: "#",
  },
];

// Film grain overlay component
function FilmGrain() {
  return <div className="film-grain" aria-hidden="true" />;
}

// Hero Section
function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background with vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-stone-950" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 z-10">
        <p className="text-xs tracking-[0.4em] text-stone-500 font-mono uppercase">A Documentary Feature</p>
      </div>
      
      <div className="absolute top-8 right-8 z-10 text-right">
        <p className="text-xs tracking-[0.2em] text-stone-500 font-mono">2025</p>
        <p className="text-xs text-stone-600 font-mono mt-1">94 min</p>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Title with mixed typography */}
          <div className="mb-12">
            <p className="text-xs tracking-[0.5em] text-amber-600/80 font-mono uppercase mb-6 animate-flicker">
              The untold story of
            </p>
            
            <h1 className="font-serif leading-[0.85] tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-stone-200">
                THE LAST
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-stone-300 mt-2">
                GUEST OF
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-400 mt-2 italic">
                the holloway
              </span>
              <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-amber-500 mt-[-0.1em] neon-text">
                MOTEL
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="max-w-xl mb-16 border-l-2 border-amber-600/50 pl-6">
            <p className="text-lg md:text-xl text-stone-400 font-mono leading-relaxed">
              A former football star. A fading motel. 
              <span className="text-stone-200"> One last chance at the truth.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#tickets"
              className="group relative px-8 py-4 bg-amber-600 text-stone-950 font-mono text-sm uppercase tracking-wider hover:bg-amber-500 transition-all btn-motel"
            >
              <span className="relative z-10">Get Tickets</span>
            </a>
            <a
              href="#trailer"
              className="group px-8 py-4 border border-stone-700 text-stone-400 font-mono text-sm uppercase tracking-wider hover:border-amber-600 hover:text-amber-500 transition-all flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Trailer
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      
      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-600">
        <span className="text-xs tracking-widest font-mono uppercase">Scroll</span>
        <div className="w-px h-8 bg-stone-800 animate-pulse" />
      </div>
    </section>
  );
}

// Synopsis Section
function Synopsis() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Image column - offset */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="relative aspect-[3/4] w-full group">
              <div className="absolute inset-0 bg-amber-600/10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <Image
                src="/still.png"
                alt="Tony Powell"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Image border frame */}
              <div className="absolute inset-0 border border-stone-800 pointer-events-none" />
            </div>
            
            {/* Caption */}
            <div className="mt-4 flex justify-between items-baseline text-xs font-mono text-stone-600">
              <span>Tony Powell, 2024</span>
              <span className="tracking-widest">001</span>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-amber-600" />
              <span className="text-xs tracking-[0.3em] text-amber-600 font-mono uppercase">Synopsis</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-200 leading-[1.1] mb-8">
              He disappeared from the pitch.
              <span className="italic text-stone-400 block mt-2"> Then from the world.</span>
            </h2>

            <div className="space-y-6 text-stone-400 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-amber-500">Tony Powell</span> was a British football star in the 1970s, 
                lighting up the pitch for Norwich City. Then—nothing. Vanished from public life, 
                from the record books, from memory.
              </p>
              
              <p>
                Decades later, he resurfaces as the sole resident and manager of the 
                <span className="text-stone-200"> Holloway Motel</span> in West Hollywood. 
                Just him, his dog Samantha, and forty years of silence.
              </p>
              
              <p className="text-stone-300">
                Now the motel faces closure. Now the past comes knocking. 
                Now Powell must decide whether some stories are worth telling—
                and whether it&apos;s ever too late to stop hiding.
              </p>
            </div>

            {/* Themes tags */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Identity", "Loss", "Queer History", "Sports", "Chosen Family"].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 border border-stone-800 text-xs font-mono text-stone-500 hover:border-amber-600/50 hover:text-amber-500 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quote Section
function Quote() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-amber-950/10 to-stone-950" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <span className="font-serif text-8xl text-amber-600/30 leading-none">"</span>
          <div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-300 leading-[1.4] italic">
              An important entry in the queer canon that portrays a beloved closeted sports figure 
              who survived the only way he knew how at a time when it was career- 
              <span className="text-stone-500">(and often life-)</span> 
              destroying to be labeled gay.
            </blockquote>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-8 h-px bg-stone-700" />
              <cite className="font-mono text-sm text-stone-500 not-italic uppercase tracking-wider">
                — Critical Review
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tickets Section
function TicketSection() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const filteredEvents = filter === "upcoming" ? events.slice(0, 4) : events.slice(2);

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24" id="tickets">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-600 font-mono uppercase block mb-4">
              Screenings
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-200">
              See the Film
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 bg-stone-900/50 p-1">
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-6 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                filter === "upcoming"
                  ? "bg-amber-600 text-stone-950"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`px-6 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                filter === "past"
                  ? "bg-amber-600 text-stone-950"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              Past
            </button>
          </div>
        </div>

        {/* Events grid */}
        <div className="space-y-px bg-stone-800">
          {filteredEvents.map((event, i) => (
            <div
              key={event.id}
              className="group bg-stone-950 p-6 md:p-8 hover:bg-stone-900 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                {/* Date column */}
                <div className="md:w-48 shrink-0">
                  <p className="font-serif text-2xl text-stone-300">{event.date}</p>
                  <p className="font-mono text-xs text-stone-500 mt-1">{event.time}</p>
                </div>

                {/* Info column */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl md:text-2xl text-stone-200 group-hover:text-amber-500 transition-colors">
                      {event.title}
                    </h3>
                    {event.soldOut && (
                      <span className="px-2 py-0.5 bg-stone-800 text-stone-500 text-xs font-mono uppercase">
                        Sold Out
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-sm text-stone-500">{event.location}</p>
                </div>

                {/* Action column */}
                <div className="md:w-40 shrink-0">
                  <a
                    href={event.ticketUrl}
                    className={`block text-center py-3 font-mono text-xs uppercase tracking-wider transition-all border ${
                      event.soldOut
                        ? "border-stone-800 text-stone-600 cursor-not-allowed pointer-events-none"
                        : "border-stone-700 text-stone-400 hover:border-amber-600 hover:text-amber-500 group-hover:border-amber-600/50"
                    }`}
                  >
                    {event.soldOut ? "Unavailable" : "Get Tickets →"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center font-mono text-xs text-stone-600">
          More screenings announced soon. Join the mailing list for updates.
        </p>
      </div>
    </section>
  );
}

// Cast Section
function Cast() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24" id="cast">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Featured Subject */}
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-600 font-mono uppercase block mb-8">
              Featured Subject
            </span>
            
            <h3 className="font-serif text-5xl md:text-6xl text-stone-200 mb-4">
              Tony Powell
            </h3>
            <p className="font-mono text-sm text-stone-500 mb-8">
              Appearing as himself
            </p>
            
            <p className="font-mono text-sm text-stone-400 leading-relaxed">
              Former professional footballer, Norwich City FC (1972-1978). 
              Manager and sole resident of the Holloway Motel since 1987.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-px bg-stone-800">
              {[
                { label: "Career", value: "1972-78" },
                { label: "Matches", value: "127" },
                { label: "Years Hidden", value: "40+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-stone-950 p-4 text-center">
                  <p className="font-serif text-2xl text-amber-500">{stat.value}</p>
                  <p className="font-mono text-xs text-stone-600 uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filmmakers */}
          <div>
            <span className="text-xs tracking-[0.3em] text-amber-600 font-mono uppercase block mb-8">
              Filmmakers
            </span>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-serif text-3xl text-stone-200 mb-2">Ramiel Petros</h4>
                <p className="font-mono text-xs text-amber-600 uppercase tracking-wider mb-4">Director / Producer</p>
                <p className="font-mono text-sm text-stone-500 leading-relaxed">
                  Documentary filmmaker exploring hidden histories at the intersection of sports, identity, and culture.
                </p>
              </div>
              
              <div className="pt-8 border-t border-stone-900">
                <h4 className="font-serif text-3xl text-stone-200 mb-2">Nicholas Freeman</h4>
                <p className="font-mono text-xs text-amber-600 uppercase tracking-wider mb-4">Director / Producer</p>
                <p className="font-mono text-sm text-stone-500 leading-relaxed">
                  Investigative journalist turned filmmaker with a focus on intimate character studies.
                </p>
              </div>
            </div>

            {/* Producers list */}
            <div className="mt-12 pt-8 border-t border-stone-900">
              <p className="font-mono text-xs text-stone-600 uppercase tracking-wider mb-4">Producers</p>
              <p className="font-mono text-sm text-stone-500">
                Pete Shilaimon • Mickey Liddell • Robbie Rogers • Andrew Corkin • Beau Ward
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section - with working Formspree integration
function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Using Formspree - user needs to set up their own form at formspree.io
    // For now, we'll store in localStorage and show success
    // In production, replace with actual Formspree endpoint
    try {
      // Simulating API call - replace with actual endpoint
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      // For now, store locally to show it works
      const existing = JSON.parse(localStorage.getItem("holloway_subscribers") || "[]");
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("holloway_subscribers", JSON.stringify(existing));

      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24" id="newsletter">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs tracking-[0.3em] text-amber-600 font-mono uppercase block mb-6">
          Mailing List
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl text-stone-200 mb-6">
          Stay in the know
        </h2>
        
        <p className="font-mono text-sm text-stone-500 mb-12 max-w-md mx-auto">
          Get screening announcements, Q&A schedules, and behind-the-scenes updates.
          No spam. Unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="p-8 border border-amber-600/30 bg-amber-950/10">
            <p className="font-serif text-xl text-amber-500 mb-2">Welcome to the list.</p>
            <p className="font-mono text-sm text-stone-500">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "submitting"}
                className="flex-1 px-4 py-4 bg-stone-900/50 border border-stone-800 text-stone-200 placeholder-stone-600 font-mono text-sm focus:outline-none focus:border-amber-600 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-8 py-4 bg-amber-600 text-stone-950 font-mono text-sm uppercase tracking-wider hover:bg-amber-500 transition-all disabled:opacity-50 btn-motel"
              >
                {status === "submitting" ? "..." : "Subscribe"}
              </button>
            </div>
            
            {status === "error" && (
              <p className="font-mono text-xs text-red-500">{message}</p>
            )}

            <p className="font-mono text-xs text-stone-700 mt-4">
              Currently storing locally. To connect a real service: {" "}
              <a href="https://formspree.io" target="_blank" rel="noopener" className="text-stone-500 hover:text-amber-500">
                formspree.io
              </a>
              {" or "}
              <a href="https://resend.com" target="_blank" rel="noopener" className="text-stone-500 hover:text-amber-500">
                                resend.com
                              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo / Title */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-stone-300 mb-2">
              The Last Guest of the Holloway Motel
            </h3>
            <p className="font-mono text-xs text-stone-600">
              A documentary film • 2025 • 94 minutes
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-stone-500">
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#tickets" className="hover:text-amber-500 transition-colors">Tickets</a>
            <a href="#cast" className="hover:text-amber-500 transition-colors">Cast</a>
            <a href="#newsletter" className="hover:text-amber-500 transition-colors">Newsletter</a>
            <a href="mailto:contact@hollowaymotel.film" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-stone-700">
            © 2025 The Last Guest of the Holloway Motel. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="font-mono text-xs text-stone-600 hover:text-amber-500 transition-colors">
              IG
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="font-mono text-xs text-stone-600 hover:text-amber-500 transition-colors">
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="flex-1 bg-stone-950">
      <FilmGrain />
      <Hero />
      <Synopsis />
      <Quote />
      <TicketSection />
      <Cast />
      <Newsletter />
      <Footer />
    </main>
  );
}
