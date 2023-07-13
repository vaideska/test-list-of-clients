import React from 'react';
import { LOCAL_STORAGE_LANG_KEY, LangContext, Languages, LanguagesType } from './LangContext';

type Props = {
  children: React.ReactNode
};

interface ILangProviderState {
  lang: LanguagesType;
}

const defaultLang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) as LanguagesType || Languages.RU;

class LangProvider extends React.PureComponent<Props, ILangProviderState> {
  constructor(props: Props) {
    super(props);
    this.state = { lang: defaultLang };
  }

  render() {

    const defaultProps = {
      lang: this.state.lang,
      setLang: (newLang: LanguagesType) => this.setState({
        lang: newLang
      }),
    }
    
    return (
      <LangContext.Provider value={defaultProps}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export default LangProvider;
