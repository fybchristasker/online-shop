import { useRouter } from "next/router";
import en from "../locales/en";
import zh from "../locales/zh";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : zh;
  return { t, locale };
};
