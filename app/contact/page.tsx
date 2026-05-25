"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Laitkynsew Village, Cherrapunjee, Meghalaya 793108",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@misthaven.in",
  },
  {
    icon: Clock,
    label: "Concierge Hours",
    value: "6:00 AM – 10:00 PM IST, Daily",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Plan Your Stay"
            subtitle="Our concierge team is ready to craft your perfect Meghalaya escape — reach out and we'll respond within 24 hours."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#6B7A52]/12 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#6B7A52]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A52] uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#112211] text-base font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="w-full h-52 rounded-2xl bg-[#112211]/8 overflow-hidden relative mt-8 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#6B7A52] mx-auto mb-2" />
                  <p className="text-[#2D3748] text-sm">Cherrapunjee, Meghalaya</p>
                  <p className="text-[#6B7A52] text-xs mt-1">25.2720° N, 91.7349° E</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-[#6B7A52]/15 flex items-center justify-center mb-6">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-2xl font-serif text-[#112211] mb-3">Message Received</h3>
                <p className="text-[#2D3748]">
                  Thank you for reaching out. Our concierge will reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Full Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Arjun Sharma"
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="arjun@example.com"
                />
                <Input
                  label="Subject"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="Reservation enquiry"
                />
                <div>
                  <label className="block text-sm font-medium text-[#112211] mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    required
                    placeholder="Tell us about your ideal stay, dates, or any questions…"
                    className="w-full border border-[#112211]/15 rounded-xl px-4 py-3 text-[#112211] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6B7A52]/40 resize-none transition-all"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center py-4 text-base">
                  Send Message
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}