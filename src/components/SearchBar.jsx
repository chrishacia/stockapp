import React, { useState } from 'react';
import axios from 'axios';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';
import cfg from '../config';

const SearchBar = (props) => {
  const { callBack } = props;
  const { AV_URL, AV_KEY } = cfg;
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    axios.get(`${AV_URL}/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${AV_KEY}`)
      .then((res) => {
        const options = res.data.bestMatches.map((i) => ({ name: i['2. name'], symbol: i['1. symbol'] }));
        setOptions(options);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <div className="container container-padding-top">
      <div className="row">
        <div className="col col-20">
          <AsyncTypeahead
            filterBy={filterBy}
            id="async-chart"
            isLoading={isLoading}
            labelKey="name"
            minLength={2}
            onSearch={handleSearch}
            options={options}
            placeholder="Start typing to search stocks..."
            renderMenuItemChildren={(option) => (
              <>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    callBack(option.symbol);
                  }}
                  onKeyDown={() => {
                    callBack(option.symbol);
                  }}
                >
                  <i
                    className="fa fa-bookmark-o space"
                    aria-label="Compare"
                    style={{ color: '#fff', pointer: 'cursor' }}
                  />
                  {' '}
                  <strong style={{ color: '#fff' }}>{ option.symbol }</strong>
                  {' '}
                  { option.name }
                </div>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  callBack: null,
};

SearchBar.propTypes = {
  callBack: PropTypes.func,
};

export default SearchBar;
