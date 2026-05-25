"use client";

import { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { rooms } from "@/data/rooms";
import DatePicker from "./DataPicker";
import GuestSelector from "./GuestSelector";
import BookingSummary from ".//BookingSummary";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { BookingFormData } from "@/types/booking";
import { validateBookingForm } from "@/lib/validation";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INITIAL_FORM: BookingFormData = {
  roomId: "",
  dates: {
    checkIn: null,
    checkOut: null,
  },
  guests: {
    adults: 2,
    children: 0,
    infants: 0,
  },
  guestDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    specialRequests: "",
  },
  selectedAddOnIds: [],
};

const BookingForm: FC = () => {
  const [form, setForm] = useState<BookingFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateRoom = (roomId: string) => {
    setForm((prev) => ({
      ...prev,
      roomId,
    }));
  };

  const updateDates = (
    key: "checkIn" | "checkOut",
    value: Date | null
  ) => {
    setForm((prev) => ({
      ...prev,
      dates: {
        ...prev.dates,
        [key]: value,
      },
    }));
  };

  const updateGuests = (
    key: "adults" | "children" | "infants",
    value: number
  ) => {
    setForm((prev) => ({
      ...prev,
      guests: {
        ...prev.guests,
        [key]: value,
      },
    }));
  };

  const updateGuestDetails = (
    key:
      | "firstName"
      | "lastName"
      | "email"
      | "phone"
      | "countryCode"
      | "specialRequests",
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      guestDetails: {
        ...prev.guestDetails,
        [key]: value,
      },
    }));
  };

  const handleNext = () => {
    const validationErrors = validateBookingForm(form, 1);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateBookingForm(form, 2);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: EASE,
        }}
        className="py-20 text-center"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#6B7A52]/15">
          <span className="text-4xl">🌿</span>
        </div>

        <h2 className="mb-3 font-serif text-3xl text-[#112211]">
          Reservation Confirmed
        </h2>

        <p className="mx-auto max-w-md text-[#2D3748]">
          Thank you, {form.guestDetails.firstName}. We&apos;ve sent a confirmation
          to {form.guestDetails.email}. We look forward to welcoming you to Meghalaya.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-10 flex items-center gap-4">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${step >= s
                    ? "bg-[#112211] text-white"
                    : "bg-[#112211]/10 text-[#112211]/40"
                  }`}
              >
                {s}
              </div>

              <span
                className={`text-sm ${step >= s ? "text-[#112211]" : "text-[#2D3748]/40"
                  }`}
              >
                {s === 1 ? "Stay Details" : "Guest Info"}
              </span>

              {s < 2 && <div className="h-px w-12 bg-[#112211]/15" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: EASE,
              }}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-[#112211]">
                  Select Room
                </label>

                <select
                  value={form.roomId}
                  onChange={(e) => updateRoom(e.target.value)}
                  className="w-full rounded-xl border border-[#112211]/15 bg-white px-4 py-3 text-sm text-[#112211] focus:outline-none focus:ring-2 focus:ring-[#6B7A52]/40"
                >
                  <option value="">Choose your sanctuary…</option>

                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — ₹
                      {room.pricing[0].pricePerNight.toLocaleString()}/night
                    </option>
                  ))}
                </select>

                {errors.roomId && (
                  <p className="mt-1 text-xs text-red-500">{errors.roomId}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <DatePicker
                  label="Check-in"
                  value={form.dates.checkIn}
                  onChange={(date) => updateDates("checkIn", date)}
                  error={errors.checkIn}
                />

                <DatePicker
                  label="Check-out"
                  value={form.dates.checkOut}
                  onChange={(date) => updateDates("checkOut", date)}
                  error={errors.checkOut}
                />
              </div>

              <GuestSelector
                adults={form.guests.adults}
                children={form.guests.children}
                infants={form.guests.infants}
                onAdultsChange={(value) => updateGuests("adults", value)}
                onChildrenChange={(value) => updateGuests("children", value)}
                onInfantsChange={(value) => updateGuests("infants", value)}
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#112211]">
                  Special Requests
                </label>

                <textarea
                  rows={4}
                  value={form.guestDetails.specialRequests}
                  onChange={(e) =>
                    updateGuestDetails("specialRequests", e.target.value)
                  }
                  placeholder="Dietary preferences, anniversary arrangements..."
                  className="w-full resize-none rounded-xl border border-[#112211]/15 bg-white px-4 py-3 text-sm text-[#112211] focus:outline-none focus:ring-2 focus:ring-[#6B7A52]/40"
                />
              </div>

              <Button
                type="button"
                onClick={handleNext}
                variant="primary"
                className="w-full justify-center py-4 text-base"
              >
                Continue to Guest Details
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: EASE,
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="First Name"
                  value={form.guestDetails.firstName}
                  onChange={(e) =>
                    updateGuestDetails("firstName", e.target.value)
                  }
                  error={errors.firstName}
                />

                <Input
                  label="Last Name"
                  value={form.guestDetails.lastName}
                  onChange={(e) =>
                    updateGuestDetails("lastName", e.target.value)
                  }
                  error={errors.lastName}
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                value={form.guestDetails.email}
                onChange={(e) =>
                  updateGuestDetails("email", e.target.value)
                }
                error={errors.email}
              />

              <Input
                label="Phone Number"
                type="tel"
                value={form.guestDetails.phone}
                onChange={(e) =>
                  updateGuestDetails("phone", e.target.value)
                }
                error={errors.phone}
              />

              <Input
                label="Country Code"
                value={form.guestDetails.countryCode}
                onChange={(e) =>
                  updateGuestDetails("countryCode", e.target.value)
                }
                error={errors.countryCode}
                placeholder="IN"
              />

              <div className="flex gap-4 pt-2">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 justify-center py-4"
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 justify-center py-4 text-base"
                >
                  Confirm Reservation
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </div>

      <div className="lg:col-span-1">
        <BookingSummary form={form} />
      </div>
    </div>
  );
};

export default BookingForm;