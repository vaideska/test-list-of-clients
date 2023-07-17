import React from "react";
import styles from './ClientList.module.css';
import { connect } from "react-redux";
import { ClientAction, ClientActionTypes, ClientState } from "../../types/clients";
import { ThunkDispatch } from "redux-thunk";
import data from "../../data.json";
import { LangContext, LanguagesType } from "../../lang/LangContext";

const limit = 10;

type DispatchProps = {
  fetch: () => void
}

type StateProps = {
  page: number;
}

type Props = ClientState & DispatchProps;

class ClientList extends React.Component<Props, StateProps> {

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

  setTodoPage(page: number) {
    this.setState({ page });
  }

  
  render() {
    const {clients, error, loading} = this.props;
    if (loading) {
      return <div className={styles.list}>Идет загрузка</div>
    }
  
    if (error) {
      return <div className={styles.list}>{error}</div>
    }


    const clientsWithLang = clients.filter(
      client => client.lang === this.context.lang
      );

    const pages = [...Array(Math.ceil(clientsWithLang.length / limit))].map((v, index) => index + 1);
    
    const renderClients = clientsWithLang.filter(
      (value, index) => index <= this.state.page * limit && index >= (this.state.page-1) * limit);
  
    return (
      <div>
        <div className={styles.list}>
          {renderClients.map(client =>
            <div key={client.id + this.context.lang}>{client.name}</div>)}
        </div>
        <div style={{display: 'flex'}}>
          {pages.map(p => 
            <div
            onClick={() => this.setTodoPage(p)}
            style={{border:p === this.state.page ? '2px solid green' : '1px solid grey', padding: 10}}
            >
              {p}
            </div>
            )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state: ClientState): ClientState {
  const clients = state.clients;
  const loading = state.loading;
  const error = state.error;

  return {
    clients,
    loading,
    error
  };
}


type dataUserType = Record<string, Record<string, string>>;

type responseType = Record<string, dataUserType>;

const getArray = (dataUser: dataUserType, lang: string) => {
  const result = Object.entries(dataUser)
    .map(([id, data]) => ({lang, id, name: data.name, rewiew: data.rewiew, date: data.date}));
    return result;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, ClientAction>): DispatchProps => {
  return {
    fetch: async () => {
      try {
          dispatch({type: ClientActionTypes.FETCH_CLIENTS});
          const response: responseType = data;
          const array = Object.keys(response).map((lang) => getArray(response[lang], lang)).flat();
          setTimeout(() => {
              dispatch({type: ClientActionTypes.FETCH_CLIENTS_SUCCESS, payload: array})
          }, 500)
      } catch (e) {
          dispatch({
              type: ClientActionTypes.FETCH_CLIENTS_ERROR,
              payload: 'Произошла ошибка при загрузке пользователей'
          })
      }
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
