import { BookingFormData } from "@/types/booking";

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  return /^[+]?[\d\s\-().]{8,20}$/.test(phone.trim());
}

export function isValidName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

export function validateBookingForm(
  form: BookingFormData,
  step: 1 | 2
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!form.roomId) {
      errors.roomId = "Please select a room.";
    }

    if (!form.dates.checkIn) {
      errors.checkIn = "Check-in date is required.";
    }

    if (!form.dates.checkOut) {
      errors.checkOut = "Check-out date is required.";
    }

    if (
      form.dates.checkIn &&
      form.dates.checkOut &&
      form.dates.checkIn >= form.dates.checkOut
    ) {
      errors.checkOut = "Check-out must be after check-in.";
    }

    if (form.guests.adults < 1) {
      errors.adults = "At least 1 adult is required.";
    }
  }

  if (step === 2) {
    if (!isValidName(form.guestDetails.firstName)) {
      errors.firstName = "First name must be 2–100 characters.";
    }

    if (!isValidName(form.guestDetails.lastName)) {
      errors.lastName = "Last name must be 2–100 characters.";
    }

    if (!isValidEmail(form.guestDetails.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!isValidPhone(form.guestDetails.phone)) {
      errors.phone = "Enter a valid phone number.";
    }

    if (!form.guestDetails.countryCode.trim()) {
      errors.countryCode = "Country code is required.";
    }
  }

  return errors;
}

export function validateContactForm(input: {
  name: string;
  email: string;
  message: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!isValidName(input.name)) {
    errors.name = "Name must be 2–100 characters.";
  }

  if (!isValidEmail(input.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (input.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}