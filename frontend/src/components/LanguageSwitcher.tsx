import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = i18n.language === "nb" ? "NO" : "EN";

  const change = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="lang-wrapper" onClick={() => setOpen(!open)}>
      <span>{current} ▼ 🌍</span>
      {open && (
        <div className="lang-menu">
          <div onClick={() => change("nb")}>🇳🇴 Norsk</div>
          <div onClick={() => change("en")}>🇬🇧 English</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
