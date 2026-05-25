"use client";

import { FC } from "react";
import { Calendar } from "lucide-react";

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  error?: string;
  min?: string;
}

const DatePicker: FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  error,
  min,
}) => {
  const formattedValue = value
    ? value.toISOString().split("T")[0]
    : "";

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#112211]">
        {label}
      </label>

      <div className="relative">
        <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7A52]" />

        <input
          type="date"
          value={formattedValue}
          min={min}
          onChange={(e) =>
            onChange(e.target.value ? new Date(e.target.value) : null)
          }
          className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-[#112211] focus:outline-none focus:ring-2 focus:ring-[#6B7A52]/40 ${
            error ? "border-red-400" : "border-[#112211]/15"
          }`}
        />
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default DatePicker;