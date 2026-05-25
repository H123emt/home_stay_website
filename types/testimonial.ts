export type TestimonialPlatform = "google" | "tripadvisor" | "airbnb" | "direct";

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatarInitials: string;
  rating: number;
  title: string;
  body: string;
  platform: TestimonialPlatform;
  roomStayed: string;
  stayDate: string;
  verified: boolean;
}