

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1B331B]/70 py-32 sm:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/home/home_stay2.png"
          alt="Misty valley at Aranya retreat"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#112211]/60 via-[#112211]/40 to-[#112211]/90" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B08D57]/20 to-transparent" />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <div className="flex flex-col items-center gap-8">
          <ScrollReveal direction="up" blur delay={0}>
            <span className="text-[20px] font-normal uppercase tracking-[0.4em] text-[#F9FBF9]">
              Begin Your Stay
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" blur delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.05] text-[#F9FBF9]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              The forest
              <br />
              is{" "}
              <em className="not-italic text-[#B08D57]">
                listening
              </em>
              <br />
              for you.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" blur delay={0.2}>
            <p className="max-w-lg text-base font-light leading-relaxed text-[#F9FBF9]">
              Every stay at Aranya begins with a conversation. Tell us when
              you'd like to arrive and what you're seeking — we'll take care
              of everything else.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" blur delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/booking">
                <Button
                  variant="ochre"
                  size="xl"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Reserve a Stay
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="xl"
                  className="border border-[#F9FBF9]/20 text-[#F9FBF9] hover:border-[#F9FBF9]/40 hover:bg-[#F9FBF9]/8"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" blur delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-2"
              >
                <Mail className="h-3.5 w-3.5 text-[#6B7A52] transition-colors duration-300 group-hover:text-[#B08D57]" />
                <span className="text-md font-light text-[#F9FBF9] transition-colors duration-300 group-hover:text-[#F9FBF9]/70">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <span className="h-4 w-px bg-[#F9FBF9]/10" />

              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="group flex items-center gap-2"
              >
                <Phone className="h-3.5 w-3.5 text-[#6B7A52] transition-colors duration-300 group-hover:text-[#B08D57]" />
                <span className="text-md font-light text-[#F9FBF9] transition-colors duration-300 group-hover:text-[#F9FBF9]/70">
                  {CONTACT_PHONE}
                </span>
              </a>
            </div>
          </ScrollReveal>         
        </div>
      </Container>
    </section>
  );
}