import { createContext } from "react";

export type LanguagesType = 'ru' | 'en';

export const Languages = {
  RU: 'ru',
  EN: 'en'
}

export interface LangContextProps {
  lang?: LanguagesType;
  setLang?: (lang: LanguagesType) => void;
}

export const LangContext = createContext<LangContextProps>({});

export const LOCAL_STORAGE_LANG_KEY = 'lang';

