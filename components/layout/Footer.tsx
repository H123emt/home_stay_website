import Link from "next/link";

import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/constants";

import { footerNav } from "@/data/navigation";
import Container from "@/components/common/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#112211] text-white">
      <Container size="xl" className="pt-20 pb-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" blur delay={0}>
              <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
                <div>
                  <p className="font-serif text-4xl font-light tracking-[0.1em] text-white">
                    {SITE_NAME}
                  </p>

                  <p className="mt-2 text-xs font-light uppercase tracking-[0.4em] text-white">
                    {SITE_TAGLINE}
                  </p>
                </div>

                <p className="max-w-sm text-base font-light leading-relaxed text-white mx-auto md:mx-0">
                  A private retreat suspended in the mist of the Khasi Hills.
                  Where ancient forest, living architecture, and the art of deep
                  rest converge.
                </p>

                <div className="flex items-center justify-center gap-5 md:justify-start">
                  <Link
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white transition-colors duration-300 hover:text-[#B08D57]"
                    aria-label="Instagram"
                  >Instagram

                  </Link>

                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white transition-colors duration-300 hover:text-[#B08D57]"
                    aria-label="Facebook"
                  >
                    Facebook
                  </Link>

                  <Link
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white transition-colors duration-300 hover:text-[#B08D57]"
                    aria-label="YouTube"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-center md:text-left lg:col-span-5 lg:grid-cols-3">
            {footerNav.map((section, sectionIdx) => (
              <ScrollReveal
                key={section.title}
                direction="up"
                blur
                delay={0.1 + sectionIdx * 0.05}
              >
                <div className="flex flex-col gap-4 items-center md:items-start">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-white">
                    {section.title}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm font-light text-white transition-colors duration-300 hover:text-[#B08D57]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal direction="up" blur delay={0.3}>
              <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left w-full">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-white">
                  Contact
                </p>

                <ul className="flex flex-col gap-4 items-center md:items-start w-full">
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group flex items-start justify-center gap-3 md:justify-start"
                    >
                      <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-white transition-colors duration-300 group-hover:text-[#B08D57]" />
                      <span className="text-sm font-light text-white transition-colors duration-300 group-hover:text-[#B08D57]">
                        {CONTACT_EMAIL}
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="group flex items-start justify-center gap-3 md:justify-start"
                    >
                      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-white transition-colors duration-300 group-hover:text-[#B08D57]" />
                      <span className="text-sm font-light text-white transition-colors duration-300 group-hover:text-[#B08D57]">
                        {CONTACT_PHONE}
                      </span>
                    </a>
                  </li>

                  <li>
                    <div className="flex items-start justify-center gap-2 md:justify-start ">
                      <MapPin className="mt-0.5 h-4 w-4  flex-shrink-0 text-white" />
                      <span className="text-sm font-light leading-relaxed text-white">
                        {CONTACT_ADDRESS}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20" />
      <Container size="xl" className="py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-light tracking-wider text-white">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cancellation Policy",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-light tracking-wider text-white transition-colors duration-300 hover:text-[#B08D57]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="h-1 bg-gradient-to-r from-[#112211] via-[#B08D57]/40 to-[#112211]" />
    </footer>
  );
}