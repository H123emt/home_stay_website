"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Calendar,
  CalendarDays,
  Users,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

const TIME_SLOTS = [
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const OCCASIONS = [
  "None",
  "Anniversary",
  "Birthday",
  "Honeymoon",
  "Business Dinner",
  "Family Gathering",
  "Other",
];

export default function TableReservation() {
  const [form, setForm] = useState<ReservationForm>({
    name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    guests: "2",
    occasion: "None",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.time) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full h-[50px] rounded-xl border border-[#112211]/30 bg-[#F9FBF9] px-4 py-3 text-sm text-black placeholder-[#112211]/35 transition-all duration-200 focus:outline-none  focus:ring-2 focus:ring-[#112211]/10";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-widest text-[#112211]";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
        <div className="mb-4 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#112211]/10">
          <CheckCircle size={32} className="text-[#112211]" />
        </div>

        <h3 className="text-2xl font-bold text-black">
          Reservation Confirmed
        </h3>

        <p className="max-w-sm leading-relaxed text-[#112211]/70">
          Thank you,{" "}
          <span className="font-semibold text-[#112211]">{form.name}</span>. We
          will reach out to {form.email} to confirm your table for{" "}
          {form.guests} guests on{" "}
          {form.date?.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          at {form.time}.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-[#112211]/30 px-6 py-2.5 text-sm text-[#112211] transition-all duration-200 hover:border-[#112211]/50 hover:bg-[#112211]/5"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-2">
        <div>
          <h3 className="mb-2 text-xl font-bold text-black">
            Reserve Your Table
          </h3>

          <p className="text-sm leading-relaxed text-[#112211]/70">
            Secure your spot for an unforgettable dining experience above the
            clouds. We recommend booking at least 24 hours in advance.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              icon: Calendar,
              title: "Advance Booking",
              desc: "Book up to 30 days ahead",
            },
            {
              icon: Users,
              title: "Groups Welcome",
              desc: "Up to 20 guests — contact us for larger parties",
            },
            {
              icon: Clock,
              title: "Flexible Timings",
              desc: "Three meal services daily",
            },
            {
              icon: MessageSquare,
              title: "Special Requests",
              desc: "Dietary needs, celebrations, and more",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#112211]/8">
                <Icon size={17} className="text-[#112211]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-black">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#112211]/60">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 rounded-2xl border border-[#112211]/40 bg-[#FCFDFC] p-8 shadow-sm lg:col-span-3">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Phone</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Guests</label>

            <div className="relative">
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer pr-12`}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  className="h-4 w-4 text-[#112211]/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Date</label>

            <div className="relative">
              <DatePicker
                selected={form.date}
                onChange={(date: Date | null) =>
                  setForm((prev) => ({
                    ...prev,
                    date,
                  }))
                }
                minDate={new Date()}
                dateFormat="dd MMM yyyy"
                placeholderText="Select a date"
                popperPlacement="bottom-start"
                wrapperClassName="w-full"
                className={`${inputClass} cursor-pointer pr-12`}
              />

              <CalendarDays
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#112211]/60"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Time</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Occasion</label>
          <select
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            className={inputClass}
          >
            {OCCASIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Special Requests</label>
          <textarea
            name="requests"
            value={form.requests}
            onChange={handleChange}
            placeholder="Dietary requirements, allergies, seating preferences..."
            rows={4}
            className="w-full rounded-xl border border-[#112211]/30 bg-[#F9FBF9] px-4 py-3 text-sm text-black placeholder-[#112211]/35 transition-all duration-200 focus:outline-none focus:border-[#112211]/50 focus:ring-2 focus:ring-[#112211]/10 resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !form.name || !form.date || !form.time}
          className="w-full rounded-xl bg-[#112211] py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B331B] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeOpacity="0.25"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Reserving...
            </span>
          ) : (
            "Reserve My Table"
          )}
        </button>
      </div>
    </div>
  );
}