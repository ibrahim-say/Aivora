export const API_URL =
  typeof window === "undefined"
    ? process.env.BACKEND_INTERNAL_URL
    : process.env.NEXT_PUBLIC_API_URL;