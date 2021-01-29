import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';
import StockCards from './components/StockCards';
import Settings from './components/Settings';
import cfg from './config';

import './assets/styles.css';

function App() {
  const [symbolArr, setSymbolArr] = useState([]);
  const [showModal, toggleModal] = useState(false);
  const { AV_KEY } = cfg;
  const sAvKey = !sessionStorage.getItem('avKey') ? AV_KEY : sessionStorage.getItem('avKey');
  const [avKey, setAvKey] = useState(sAvKey);

  const saveAvKeyChange = (str) => {
    if (!avKey) {
      setAvKey('');
      sessionStorage.removeItem('avKey');
      return;
    }
    setAvKey(str);
    sessionStorage.setItem('avKey', avKey);
  };

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

  const toggleSettings = (v) => {
    toggleModal(v);
  };

  return (
    <>
      <Header callBack={(v) => { toggleSettings(v); }} />
      <SearchBar
        callBack={(selectedSymbol) => addStockSymbol(selectedSymbol)}
        avKey={avKey}
      />
      <StockCards
        stockSymbols={symbolArr}
        callBack={(selectedSymbol) => rmStockSymbol(selectedSymbol)}
        avKey={avKey}
      />
      {
        !showModal
          ? <></>
          : (
            <Settings
              callBack={(v) => { toggleSettings(v); }}
              avKey={avKey}
              avCallBack={(str) => { saveAvKeyChange(str); }}
            />
          )
      }
    </>
  );
}

const Header = (props) => {
  const { callBack } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="fa fa-bank" />
          {' '}
          Nottingham Trades
        </span>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/#"
                onClick={(e) => { e.preventDefault(); callBack(true); }}
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default App;
