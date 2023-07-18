import React from "react";
import styles from './Main.module.css';
import { connect } from "react-redux";
import { ClientAction, ClientState } from "../../types/clients";
import { ThunkDispatch } from "redux-thunk";
import { LangContext, LanguagesType } from "../../lang/LangContext";
import { limit } from "../../utils/utils";
import { fetchClient } from "../../store/fetchAction";
import ClientList from "../ClientList/ClientList";
import ClientPagination from "../ClientPagination/ClientPagination";

type DispatchProps = {
  fetch: () => void
}

type StateProps = {
  page: number;
}

type Props = ClientState & DispatchProps;

class Main extends React.Component<Props, StateProps> {

  constructor(props: Props) {
    super(props);
    this.state = { page: 1 };
  }

  componentDidMount() {
    this.props.fetch();
  }

  static contextType = LangContext;
  context!: {
    lang: LanguagesType;
    };

  setActivePage(page: number) {
    this.setState({ page });
  }

  render() {
    const {clients, error, loading} = this.props;

    if (loading) {
      return <div className={styles.list}>Идет загрузка...</div>
    }
  
    if (error) {
      return <div className={styles.list}>{error}</div>
    }

    const clientsWithLang = clients.filter(
      client => client.lang === this.context.lang
      );

    const pages = [...Array(Math.ceil(clientsWithLang.length / limit))].map((v, index) => index + 1);
    
    return (
      <div>
        <ClientList 
          page={this.state.page}
          clientsWithLang={clientsWithLang}
          limit={limit}
        />
        <ClientPagination
          activePage={this.state.page}
          pages={pages}
          setActivePage={(p) => this.setActivePage(p)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ClientState): ClientState => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, ClientAction>): DispatchProps => {
  return {
    fetch: fetchClient(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
