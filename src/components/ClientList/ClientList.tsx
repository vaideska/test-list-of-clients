import React from "react";
import styles from './ClientList.module.css';
import { IClients } from "../../types/clients";
import { getNameClient } from "../../utils/utils";
import { LangContext, LanguagesType } from "../../lang/LangContext";

type Props = {
  clientsWithLang: IClients[];
  page: number;
  limit: number;
};

class ClientList extends React.Component<Props> {

  static contextType = LangContext;
  context!: {
    lang: LanguagesType;
    };
  
  render() {
    const {clientsWithLang, page, limit} = this.props;

    const renderClients = clientsWithLang.filter(
      (value, index) => index+1 <= page * limit && index >= (page-1) * limit);
  
    return (
      <div className={styles.list}>
        {renderClients.map(client =>
          <div
            className={styles.clientItem}
            key={client.id + this.context.lang}
          >
            <h3>{getNameClient(client.name)}</h3>
            <p>{client.review}</p>
            <b>{client.date}</b>
          </div>
        )}
      </div>
    )
  }
}

export default ClientList;
