    import { Metadata } from "next";
import { experiences } from "@/data/experiences";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Experiences | Misthaven",
  description: "Curated immersive experiences in the living forests of Meghalaya.",
};

export default function ExperiencesPage() {
  const [featured, ...rest] = experiences;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Curated Journeys"
            title="Signature Experiences"
            subtitle="Every moment at Misthaven is an invitation — to wander, to witness, to belong to something ancient and alive."
            align="center"
          />
        </ScrollReveal>

        {/* Featured */}
        <ScrollReveal className="mt-14">
          <ExperienceCard experience={featured} featured index={0} />
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {rest.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i + 1} />
          ))}
        </div>
      </Container>
    </div>
  );
}