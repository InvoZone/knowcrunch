import React from "react";
import { useTranslations } from "next-intl";

function page() {
  const t = useTranslations("HomePage");
  return <div>{t("Dashboards")}</div>;
}

export default page;
