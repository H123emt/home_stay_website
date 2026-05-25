"use client";

import { FC } from "react";
import { Users, Minus, Plus } from "lucide-react";

interface GuestSelectorProps {
  adults: number;
  children: number;
  infants: number;
  onAdultsChange: (value: number) => void;
  onChildrenChange: (value: number) => void;
  onInfantsChange: (value: number) => void;
}

interface CounterProps {
  label: string;
  sub: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Counter: FC<CounterProps> = ({
  label,
  sub,
  value,
  min,
  max,
  onChange,
}) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-[#112211]">{label}</p>
      <p className="text-xs text-[#6B7A52]">{sub}</p>
    </div>

    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#112211]/20 text-[#112211] transition-colors hover:bg-[#112211] hover:text-white disabled:opacity-30"
      >
        <Minus className="h-3 w-3" />
      </button>

      <span className="w-6 text-center text-sm font-semibold text-[#112211]">
        {value}
      </span>

      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#112211]/20 text-[#112211] transition-colors hover:bg-[#112211] hover:text-white disabled:opacity-30"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  </div>
);

const GuestSelector: FC<GuestSelectorProps> = ({
  adults,
  children,
  infants,
  onAdultsChange,
  onChildrenChange,
  onInfantsChange,
}) => {
  const totalGuests = adults + children;

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#112211]">
        Guests
      </label>

      <div className="space-y-4 rounded-xl border border-[#112211]/15 p-5">
        <div className="mb-4 flex items-center gap-2">
          <Users className="h-4 w-4 text-[#6B7A52]" />
          <span className="text-sm text-[#2D3748]">
            {totalGuests} Guest{totalGuests !== 1 ? "s" : ""}
            {infants > 0 && ` + ${infants} Infant${infants !== 1 ? "s" : ""}`}
          </span>
        </div>

        <Counter
          label="Adults"
          sub="Age 13+"
          value={adults}
          min={1}
          max={8}
          onChange={onAdultsChange}
        />

        <div className="border-t border-[#112211]/8" />

        <Counter
          label="Children"
          sub="Ages 2–12"
          value={children}
          min={0}
          max={4}
          onChange={onChildrenChange}
        />

        <div className="border-t border-[#112211]/8" />

        <Counter
          label="Infants"
          sub="Under 2 years"
          value={infants}
          min={0}
          max={2}
          onChange={onInfantsChange}
        />
      </div>
    </div>
  );
};

export default GuestSelector;