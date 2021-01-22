import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cfg from '../config';

const StockCards = (props) => {
  const { stockSymbols, callBack } = props;

  return (
    <div className="container container-padding-top">
      <div className="row">
        {
          stockSymbols.length === 0
            ? <StockEmptyCard />
            : stockSymbols.map((o) => (
              <StockCard key={o} query={o} callBack={callBack} />
            ))
        }
      </div>
    </div>
  );
};

const StockCard = (props) => {
  const { query, callBack } = props;
  const { AV_URL, AV_KEY } = cfg;
  const [symbolData, setSymbolData] = useState([]);
  const [symbolQuote, setSymbolQuote] = useState([]);

  useEffect(async () => {
    axios.get(`${AV_URL}/query?function=OVERVIEW&symbol=${query}&apikey=${AV_KEY}`)
      .then((res) => {
        setSymbolData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(async () => {
    axios.get(`${AV_URL}/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${AV_KEY}`)
      .then((res) => {
        setSymbolQuote(res.data['Global Quote']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const upDown = () => {
    if (!symbolQuote || !symbolQuote['09. change'] || symbolQuote['09. change'] === '0') {
      return 'fa-arrows-h';
    }

    if (parseFloat(symbolQuote['09. change']) < 0) {
      return 'fa-arrow-down';
    }

    return 'fa-arrow-up';
  };

  console.log(symbolQuote);
  return (
    <div className="col col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <strong style={{ color: '#AAA' }}>{ query }</strong>
            {' '}
            {!symbolData.Name ? '-------' : symbolData.Name}
            {' '}
            <button
              className="btn btn-sm pull-right"
              type="button"
              onClick={() => {
                callBack(query);
              }}
              onKeyDown={() => {
                callBack(query);
              }}
            >
              <i
                className="fa fa-times"
              />
            </button>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <i className={(`fa ${upDown()}`)} />
            {' '}
            $
            { !symbolQuote || !symbolQuote['05. price'] ? '-.--' : parseFloat(symbolQuote['05. price']).toFixed(2) }
            {' '}
            (
            { !symbolQuote['10. change percent'] ? '--%' : symbolQuote['10. change percent'] }
            )
          </h6>
          <h5 className="card-title">Stats</h5>
          <div className="row">
            <div className="col">High</div>
            <div className="col">{ !symbolQuote['03. high'] ? '-.--' : parseFloat(symbolQuote['03. high']).toFixed(2) }</div>
          </div>
          <div className="row">
            <div className="col">Low</div>
            <div className="col">{ !symbolQuote['04. low'] ? '-.--' : parseFloat(symbolQuote['04. low']).toFixed(2) }</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StockEmptyCard = () => (
  <div className="col">
    <div className="card">
      <div className="card-body text-center">
        Seach and click &ldquo;
        {' '}
        <i className="fa fa-bookmark-o" style={{ color: '#29ab87' }} />
        {' '}
        &ldquo; to compare up to 3 stocks
      </div>
    </div>
  </div>
);

StockCards.defaultProps = {
  callBack: null,
  stockSymbols: [],
};

StockCards.propTypes = {
  callBack: PropTypes.func,
  stockSymbols: PropTypes.arrayOf(PropTypes.string),
};

StockCard.defaultProps = {
  callBack: null,
  query: '',
};

StockCard.propTypes = {
  callBack: PropTypes.func,
  query: PropTypes.string,
};

export default StockCards;