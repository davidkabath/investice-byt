import React from "react";

import { Alert } from "react-bootstrap";

const Legend = (props) => {
  return (
    <Alert variant="danger" className="disclaimer-text">
      <Alert.Heading>Vysvětlivky</Alert.Heading>
      Investice
      <ul>
        <li>
          Délka investice v celých letech - doba od nákupu po prodej
          nemovitosti.
        </li>
      </ul>
      Nemovitost
      <ul>
        <li>Cena nemovitosti - cena nemovitosti v době koupě.</li>
        <li>
          Počáteční investice - náklady na počáteční rekonstrukci nemovitosti.
          Např. rekonstrukce kuchyně, koupelny nebo nová podlaha.
        </li>
        <li>Měsíční nájem (MN) - nájemné požadované po nájemníkovi.</li>
        <li>
          Měsíční výdaje v procentech k nájmu (MV) - měsíční výdaje na daň z
          nemovitosti, pojištění nemovitosti, apod.
        </li>
        <li>
          Počet měsíců v roce, kdy nebude nemovitost pronajata (PM) - výpadek
          příjmů z nájmu v případě, kdy zůstává nemovitost nepronajata. Např.
          při hledání nového nájemníka, apod.
        </li>
        <li>
          Fond na interní opravy (ročně) (FO) - finance na opravy nemovitosti
          během doby investice. Např. při rekonstrukci kuchyně či jiných
          nezbytných opravách.
        </li>
        <li>
          Nárust/pokles hodnoty nemovitosti za dobu investice v procentech -
          procentuální rozdíl hodnoty nemovitosti na začátku a na konci
          investice.
        </li>
      </ul>
      Hypotéka
      <ul>
        <li>Výše (VH) - výše hypotéky.</li>
        <li>Doba splácení v celých letech (DH) - délka hypotéky.</li>
        <li>Úrok p.a. (UH) - roční úrok hypotéky.</li>
      </ul>
      <Alert.Heading>Popis výpočtu</Alert.Heading>
      <ul>
        <li>
          Čistý měsíční příjem z nájmu (CM) = (MN x (12 - PM) - FO - MN x 12 x
          MV - (MN x (12 - PM) - MN x 12 x MV - FO - 30840) x 0.15) / 12; (0.15
          = 15% = daň z příjmu; 12 = počet měsíců v roce; 30840 Kč = sleva na
          dani na poplatníka (2022)).
        </li>
        <li>
          Měsíční splátka hypotéky (MH) = VH x (1 + UH/12) <sup>DH x 12</sup> x
          ((UH/12) / ((1 + UH/12) <sup>DH x 12</sup> - 1)); (12 = počet měsíců v
          roce).
        </li>
        <li>
          Měsíční doplatek na hypotéku = Měsíční splátka hypotéky - Čistý
          měsíční příjem z nájmu.
        </li>
        <li>
          Čistý výnos investice p.a. = výpočet vnitřní míry návratnosti (ročně).
          Anglicky: Internal Rate of Return (IRR) - více informací např.{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.investopedia.com/terms/i/irr.asp"
          >
            zde
          </a>
          .
        </li>
      </ul>
      <div style={{ textAlign: "center" }}>
        Aplikace má pouze orientační charakter a její autor nenese za správnost
        výpočtu odpovědnost.
      </div>
    </Alert>
  );
};

export default Legend;
