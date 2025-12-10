import usFlag from "./assets/us.svg";
import arabicFlag from "./assets/arabic-flag-svg.svg";
import spain from "./assets/spain.png";
import bangladesh from "./assets/bangladesh.png";
import nlFlag from "./assets/nl.png";
export const languageList = [
  {
    languageName: "Spanish",
    languageCode: "es",
    countryCode: "ES",
    countryFlag: spain.src,
  },
  {
    languageName: "English",
    languageCode: "en",
    countryCode: "US",
    countryFlag: usFlag.src,
  },
  {
    languageName: "Dutch",
    languageCode: "nl",
    countryCode: "NL",
    countryFlag: nlFlag.src,
  },
  {
    languageName: "Arabic",
    languageCode: "ar",
    countryCode: "SA",
    countryFlag: arabicFlag.src,
  },
  // {
  //   languageName: "Bengali",
  //   languageCode: "bn",
  //   countryCode: "BN",
  //   countryFlag: bangladesh.src,
  // },
];
