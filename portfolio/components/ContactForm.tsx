"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-neutral-600">
          Thank you — I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs tracking-[0.1em] uppercase text-neutral-400 mb-2">
          Name
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors placeholder:text-neutral-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-xs tracking-[0.1em] uppercase text-neutral-400 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors placeholder:text-neutral-300"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-xs tracking-[0.1em] uppercase text-neutral-400 mb-2">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors resize-none placeholder:text-neutral-300"
          placeholder="Tell me about your project…"
        />
      </div>
      <button
        type="submit"
        className="text-xs tracking-[0.15em] uppercase bg-neutral-900 text-white px-8 py-3.5 hover:bg-neutral-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
