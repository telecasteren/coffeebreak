import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  if (!locale) {
    throw new Error("Locale is undefined in getRequestConfig.");
  }

  return {
    locale,
    messages: (await import(`../data/texts/${locale}.json`)).default,
  };
});
