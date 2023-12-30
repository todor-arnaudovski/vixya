export type DatePart = "day" | "month" | "year";
export type DateOfBirthErrors = Record<DatePart, boolean>;

export interface DateOfBirthFormat {
  day: number | null;
  month: number | null;
  year: number | null;
}
