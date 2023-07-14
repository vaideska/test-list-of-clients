import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ClientList from './components/ClientList/ClientList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ClientList />
      </div>
    );
  }
}

export default App;
