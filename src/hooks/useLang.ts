import { useTranslations } from "next-intl";

function useLang() : "en" | "fa" {
    const config = useTranslations("config");

    return config("language") as "en" | "fa";
}

export default useLang;