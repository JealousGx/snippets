import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const appendSearchParams = (path: string, query: string) => {
  return path.includes("?") ? `${path}&${query}` : `${path}?${query}`;
};
