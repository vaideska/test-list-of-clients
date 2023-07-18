import React from "react";
import styles from './ClientPagination.module.css';

type Props = {
  pages: number[];
  activePage: number;
  setActivePage: (page: number) => void;
};

class ClientPagination extends React.Component<Props> {

  render() {
    const {pages, activePage, setActivePage} = this.props;

    return (
      <div className={styles.pagination}>
        {pages.map(p => 
          <div
            key={`page-${p}`}
            className={`${p === activePage ? styles.activePage : ''} ${styles.page}` }
            onClick={() => setActivePage(p)}
          >
            {p}
          </div>
          )}
      </div>
    )
  }
}

export default ClientPagination;
