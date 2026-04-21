"use client";

import { useState } from "react";
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

interface CastMember {
  name: string;
  role: string;
  bio: string;
}

// Data
const events: Event[] = [
  {
    id: "1",
    title: "Los Angeles Premiere + Q&A with Directors",
    location: "Laemmle Royal Theatre, West Hollywood",
    date: "June 8, 2025",
    time: "7:30 PM PT",
    ticketUrl: "#tickets",
  },
  {
    id: "2",
    title: "Special Screening + Filmmaker Discussion",
    location: "AFI Docs Film Festival, Washington DC",
    date: "June 15, 2025",
    time: "6:00 PM ET",
    ticketUrl: "#tickets",
  },
  {
    id: "3",
    title: "Frameline Film Festival Screening",
    location: "Castro Theatre, San Francisco",
    date: "June 22, 2025",
    time: "5:30 PM PT",
    ticketUrl: "#tickets",
  },
  {
    id: "4",
    title: "Outfest Los Angeles Screening",
    location: "DGA Theater, Los Angeles",
    date: "July 12, 2025",
    time: "8:00 PM PT",
    ticketUrl: "#tickets",
    soldOut: true,
  },
  {
    id: "5",
    title: "New York Premiere + Q&A",
    location: "Film Forum, New York City",
    date: "July 18, 2025",
    time: "7:00 PM ET",
    ticketUrl: "#tickets",
  },
];

const cast: CastMember[] = [
  {
    name: "Tony Powell",
    role: "Himself",
    bio: "A former British soccer star who played for Norwich City Football Club in the 1970s, Tony mysteriously disappeared from public life only to resurface decades later as the sole resident and manager of the Holloway Motel in West Hollywood.",
  },
];

const filmmakers = [
  {
    name: "Ramiel Petros",
    role: "Director / Producer",
    bio: "Ramiel Petros is a documentary filmmaker whose work explores hidden histories and untold stories at the intersection of sports, identity, and culture.",
  },
  {
    name: "Nicholas Freeman",
    role: "Director / Producer",
    bio: "Nicholas Freeman brings a keen eye for intimate character studies and a background in investigative journalism to his documentary work.",
  },
];

const producers = [
  "Pete Shilaimon",
  "Mickey Liddell",
  "Robbie Rogers",
  "Andrew Corkin",
  "Beau Ward",
];

// Components
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="The Last Guest of the Holloway Motel"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] text-neutral-400 mb-6 uppercase">
          A Documentary
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8">
          <span className="block">THE LAST</span>
          <span className="block">GUEST OF</span>
          <span className="block">THE HOLLOWAY</span>
          <span className="block text-red-600">MOTEL</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12">
          The untold story of a football legend who vanished — and the motel where he finally stopped running
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tickets"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-wide transition-all duration-300 text-sm uppercase"
          >
            Get Tickets
          </a>
          <a
            href="#trailer"
            className="px-8 py-4 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-semibold tracking-wide transition-all duration-300 text-sm uppercase"
          >
            Watch Trailer
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-neutral-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function Synopsis() {
  return (
    <section className="py-24 md:py-32 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/still.png"
              alt="Tony Powell at the Holloway Motel"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              A STORY HIDING IN PLAIN SIGHT
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
              The film follows <span className="text-white font-semibold">Tony Powell</span>, a former British soccer star who played for Norwich City Football Club in the 1970s before mysteriously disappearing from public life.
            </p>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
              Decades later, Powell now manages the <span className="text-white font-semibold">Holloway Motel</span> in West Hollywood, where he lives as its sole resident with his dog Samantha.
            </p>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              When the motel faces closure and Powell faces eviction, he must confront long-buried truths and reconcile his past and present — exploring themes of identity, loss, chosen family, and whether it&apos;s ever too late to seek forgiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketSection() {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const filteredEvents = filter === "upcoming"
    ? events.filter((_, i) => i < 4)
    : events.slice(2);

  return (
    <section className="py-24 md:py-32 px-4 bg-neutral-900" id="tickets">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            BUY TICKETS
          </h2>
          <p className="text-neutral-400 text-lg">
            Select a screening near you
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setFilter("upcoming")}
            className={`text-sm uppercase tracking-wider pb-2 border-b-2 transition-all ${
              filter === "upcoming"
                ? "border-red-600 text-white"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            Upcoming {events.filter((_, i) => i < 4).length}
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`text-sm uppercase tracking-wider pb-2 border-b-2 transition-all ${
              filter === "past"
                ? "border-red-600 text-white"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            Past {events.slice(2).length}
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-neutral-800 hover:border-neutral-700 bg-neutral-950/50 transition-all"
            >
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  {event.soldOut && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                      Sold Out
                    </span>
                  )}
                </div>
                <p className="text-neutral-400 text-sm">
                  {event.location}
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                  {event.date} • {event.time}
                </p>
              </div>
              <a
                href={event.ticketUrl}
                className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  event.soldOut
                    ? "bg-neutral-800 text-neutral-500 cursor-not-allowed pointer-events-none"
                    : "bg-transparent border border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {event.soldOut ? "Sold Out" : "Get Tickets"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cast() {
  return (
    <section className="py-24 md:py-32 px-4" id="cast">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight text-center">
          CAST & FILMMAKERS
        </h2>

        {/* Featured Subject */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-8 text-center">
            Featured Subject
          </p>
          {cast.map((person) => (
            <div key={person.name} className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {person.name}
              </h3>
              <p className="text-red-600 font-semibold uppercase tracking-wider text-sm mb-6">
                {person.role}
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Directors */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-8 text-center">
            Directors
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {filmmakers.map((person) => (
              <div key={person.name} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {person.name}
                </h3>
                <p className="text-red-600 font-semibold uppercase tracking-wider text-sm mb-4">
                  {person.role}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Producers */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-6">
            Producers
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {producers.map((producer) => (
              <span key={producer} className="text-neutral-300">
                {producer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-24 md:py-32 px-4 bg-red-950/20">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white leading-relaxed mb-8">
          &ldquo;An important entry in the queer canon that portrays a beloved closeted sports figure who survived the only way he knew how at a time when it was career- (and often life-) destroying to be labeled gay.&rdquo;
        </blockquote>
        <cite className="text-neutral-400 not-italic text-lg">
          — Critical Review
        </cite>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 px-4" id="newsletter">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          JOIN THE MAILING LIST
        </h2>
        <p className="text-neutral-400 mb-8">
          Sign up for special events, screening announcements, and more!
        </p>

        {status === "success" ? (
          <div className="p-6 bg-green-900/30 border border-green-800">
            <p className="text-green-400 font-semibold">Thank you!</p>
            <p className="text-green-300/70 text-sm mt-1">
              You have successfully joined our newsletter.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase tracking-wider text-sm transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight">
              THE LAST GUEST OF THE HOLLOWAY MOTEL
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              A Documentary • 2025
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#tickets" className="text-neutral-400 hover:text-white transition-colors">
              Tickets
            </a>
            <a href="#cast" className="text-neutral-400 hover:text-white transition-colors">
              Cast
            </a>
            <a href="#newsletter" className="text-neutral-400 hover:text-white transition-colors">
              Newsletter
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 text-center">
          <p className="text-sm text-neutral-600">
            © 2025 The Last Guest of the Holloway Motel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="flex-1">
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
