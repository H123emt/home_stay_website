import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import ExperienceSection from "@/components/home/ExperienceSection";
import Testimonials from "@/components/home/Testimonials";
import BookingPreview from "@/components/home/BookingPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <FeaturedRooms />
      <ExperienceSection />
      <Testimonials />
      <BookingPreview />
      <ContactCTA />
    </>
  );
}