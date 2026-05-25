export function formatCurrency(
  amount: number,
  currency: string = "INR",
  locale: string = "en-IN"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }
): string {
  return new Intl.DateTimeFormat("en-IN", options).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatNights(nights: number): string {
  return `${nights} ${nights === 1 ? "night" : "nights"}`;
}

export function formatGuests(adults: number, children: number): string {
  const parts: string[] = [];
  if (adults > 0) parts.push(`${adults} ${adults === 1 ? "adult" : "adults"}`);
  if (children > 0) parts.push(`${children} ${children === 1 ? "child" : "children"}`);
  return parts.join(", ");
}

export function getNightsBetween(checkIn: Date, checkOut: Date): number {
  const diff = checkOut.getTime() - checkIn.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

export function formatTemperature(celsius: number): string {
  return `${Math.round(celsius)}°C`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}