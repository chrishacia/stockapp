import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import StockCards from './components/StockCards';

import './assets/styles.css';

function App() {
  const [symbolArr, setSymbolArr] = useState([]);

  const addStockSymbol = (selectedSymbol) => {
    if (!symbolArr.includes(selectedSymbol) && symbolArr.length < 3) {
      setSymbolArr([...symbolArr, selectedSymbol]);
    }
  };

  const rmStockSymbol = (selectedSymbol) => {
    if (symbolArr.includes(selectedSymbol) && symbolArr.length > 0) {
      setSymbolArr(symbolArr.filter((s) => (s !== selectedSymbol)));
    }
  };

  return (
    <>
      <Header />
      <SearchBar
        callBack={(selectedSymbol) => addStockSymbol(selectedSymbol)}
      />
      <StockCards
        stockSymbols={symbolArr}
        callBack={(selectedSymbol) => rmStockSymbol(selectedSymbol)}
      />
    </>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="fa fa-bank" />
          {' '}
          Nottingham Trades
        </span>
      </div>
    </nav>
  );
}

export default App;
