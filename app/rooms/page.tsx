import { Metadata } from "next";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/rooms/RoomCard";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Rooms & Suites | Misthaven",
  description: "Choose your sanctuary — handcrafted rooms blending forest aesthetics with luxury comfort.",
};

export default function RoomsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Your Sanctuary"
            title="Rooms & Suites"
            subtitle="Each space is a careful blend of Khasi craftsmanship, natural materials, and silent luxury — designed to dissolve the boundary between you and the forest."
            align = "center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}