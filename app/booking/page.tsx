import { Metadata } from "next";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import BookingForm from "@/components/booking/BookingForm";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Book Your Stay | Misthaven",
  description: "Reserve your luxury sanctuary in the mist-covered hills of Meghalaya.",
};

export default function BookingPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        <ScrollReveal>
          <SectionTitle
            eyebrow="Reserve Your Escape"
            title="Book Your Stay"
            subtitle="A few details and your sanctuary in the clouds awaits. All bookings include complimentary breakfast and a personal concierge."
            align = "center"
          />
        </ScrollReveal>

        <div className="mt-14 max-w-5xl mx-auto">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
}