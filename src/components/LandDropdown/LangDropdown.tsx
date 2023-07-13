import React from "react";
import { LOCAL_STORAGE_LANG_KEY, LangContext, Languages, LanguagesType } from "../../lang/LangContext";
import Dropdown from "../UI/Dropdown";


const langs = Object.values(Languages).map((value: string) => ({key: value, value }));

class LangDropdown extends React.Component {

  static contextType = LangContext;
  context!: {
    lang: LanguagesType;
    setLang: (newLang: LanguagesType) => void;
    };


  setLang(newValue: string) {
    this.context.setLang(newValue as LanguagesType);
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, newValue);
  }


  render() {
    return (
      <Dropdown 
        list={langs}
        selectedValue={this.context.lang}
        setValue={(value) => {this.setLang(value)}}
      />
    );
  }
}

export default LangDropdown;
