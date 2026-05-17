"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "interest",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "", type: "interest" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-foreground/5">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted">
            Interested? Let us know. We&apos;re building something that matters.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-accent/10 border border-accent rounded-lg text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-serif font-bold mb-2">Message Received</h3>
            <p className="text-muted">
              We appreciate your interest. Someone from the Gurumbé team will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-background border border-border rounded-lg">
            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-2">
                What brings you here?
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="interest">Show Interest</option>
                <option value="investor">Investor Inquiry</option>
                <option value="partner">Partnership</option>
                <option value="press">Press/Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interest..."
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted"
              />
            </div>

            <button type="submit" className="primary w-full">
              Send Message
            </button>

            <p className="text-xs text-muted text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </form>
        )}

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="font-serif font-bold mb-2">Email</h4>
            <a href="mailto:hello@gurumbe.capital" className="text-primary hover:opacity-80">
              hello@gurumbe.capital
            </a>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-2">Connect</h4>
            <a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
              Essays & Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
