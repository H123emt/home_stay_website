export type BookingStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed";

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  specialRequests?: string;
}

export interface BookingDates {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}

export interface BookingFormData {
  roomId: string;
  dates: BookingDates;
  guests: GuestCount;
  guestDetails: GuestDetails;
  selectedAddOnIds: string[];
}

export interface BookingAddOn {
  id: string;
  label: string;
  description: string;
  pricePerNight: number;
}

export interface BookingCostSummary {
  roomName: string;
  pricePerNight: number;
  nights: number;
  subtotal: number;
  taxes: number;
  addOnsTotal: number;
  total: number;
}