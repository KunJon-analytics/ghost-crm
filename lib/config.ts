import { env } from "@/env.mjs";

export const siteConfig = {
  adminEmail: env.NEXT_PUBLIC_ADMIN_EMAIL,
  name: "Venture Volts",
  description: "Add momentum to your mission - View your tasks",
  url: env.NEXT_PUBLIC_APP_URL,
};
