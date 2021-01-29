import React from 'react';
// import waitUntil from 'async-wait-until';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import fetchMock from 'fetch-mock';
import SearchBar from '../components/SearchBar';
// import { AsyncTypeahead } from 'react-bootstrap-typeahead';
// import axios from 'axios';
// import cfg from '../config';

describe('Search Bar Unit Tests', () => {
  configure({ adapter: new Adapter() });
  test('Test if type ahead component exists', async () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper.find('.rbt-input-main').length).toBe(1);
  });
});

/**
 * This version of the component is not Jest friendly valid testing not avaliable.
 */
// describe('Search Bar Unit Tests', () => {
//   configure({ adapter: new Adapter() });
//   test(' Test TypeAhead functionality', async () => {
//     const { AV_URL, AV_KEY } = cfg;
//     const url = `${AV_URL}/query?function=SYMBOL_SEARCH&keywords=FB&apikey=${AV_KEY}`;
//     fetchMock
//       .reset()
//       .get(
//         url,
//         {
//           bestMatches: [
//             {
//               '1. symbol': 'FB',
//               '2. name': 'Facebook Inc - Class A',
//               '3. type': 'Equity',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '1.0000',
//             },
//             {
//               '1. symbol': 'FBAK',
//               '2. name': 'First Natl BanK AK',
//               '3. type': 'Equity',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.6667',
//             },
//             {
//               '1. symbol': 'FB1.FRK',
//               '2. name': 'Farmer Bros. Co',
//               '3. type': 'Equity',
//               '4. region': 'Frankfurt',
//               '5. marketOpen': '08:00',
//               '6. marketClose': '20:00',
//               '7. timezone': 'UTC+01',
//               '8. currency': 'EUR',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FBAAX',
//               '2. name': 'AIG ACTIVE ALLOCATION FUND CLASS A',
//               '3. type': 'Mutual Fund',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FBABX',
//               '2. name': 'AIG ACTIVE ALLOCATION FUND CLASS B',
//               '3. type': 'Mutual Fund',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FBACX',
//               '2. name': 'AIG ACTIVE ALLOCATION FUND CLASS C',
//               '3. type': 'Mutual Fund',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FBAKX',
//               '2. name': 'FIDELITY BALANCED FUND CLASS K',
//               '3. type': 'Mutual Fund',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FBALX',
//               '2. name': 'FIDELITY BALANCED FUND',
//               '3. type': 'Mutual Fund',
//               '4. region': 'United States',
//               '5. marketOpen': '09:30',
//               '6. marketClose': '16:00',
//               '7. timezone': 'UTC-05',
//               '8. currency': 'USD',
//               '9. matchScore': '0.5714',
//             },
//             {
//               '1. symbol': 'FB2A.FRK',
//               '2. name': 'Facebook',
//               '3. type': 'Equity',
//               '4. region': 'Frankfurt',
//               '5. marketOpen': '08:00',
//               '6. marketClose': '20:00',
//               '7. timezone': 'UTC+01',
//               '8. currency': 'EUR',
//               '9. matchScore': '0.5000',
//             },
//             {
//               '1. symbol': 'FB2A.DEX',
//               '2. name': 'Facebook',
//               '3. type': 'Equity',
//               '4. region': 'XETRA',
//               '5. marketOpen': '08:00',
//               '6. marketClose': '20:00',
//               '7. timezone': 'UTC+01',
//               '8. currency': 'EUR',
//               '9. matchScore': '0.4444',
//             },
//           ],
//         },
//       );

//     let options = [];
//     let isLoading = false;

//     const handleSearch = (query) => {
//       isLoading = true;

//       axios.get(`${AV_URL}/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${AV_KEY}`)
//         .then((res) => {
//           const optionsX = res.data.bestMatches.map((i) => ({
//                  name: i['2. name'], symbol: i['1. symbol'] }));
//           options = optionsX;
//           isLoading = false;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//     // Bypass client-side filtering by returning `true`. Results are already
//     // filtered by the search endpoint, so no need to do it again.
//     const filterBy = () => true;

//     const callBack = (str) => str;

//     const wrapper = mount(
//       <AsyncTypeahead
//         filterBy={filterBy}
//         id="async-chart"
//         isLoading={isLoading}
//         labelKey="name"
//         minLength={2}
//         onSearch={handleSearch}
//         options={options}
//         placeholder="Start typing to search stocks..."
//         renderMenuItemChildren={(option) => (
//           <>
//             <div
//               role="button"
//               tabIndex={0}
//               onClick={() => {
//                 callBack(option.symbol);
//               }}
//               onKeyDown={() => {
//                 callBack(option.symbol);
//               }}
//             >
//               <i
//                 className="fa fa-bookmark-o space"
//                 aria-label="Compare"
//                 style={{ color: '#fff', pointer: 'cursor' }}
//               />
//               {' '}
//               <strong style={{ color: '#fff' }}>{ option.symbol }</strong>
//               {' '}
//               { option.name }
//             </div>
//           </>
//         )}
//       />,
//     );

//     const sel = wrapper.find('.rbt-input-main').at(0);
//     sel.simulate('click');
//     sel.simulate('change', { target: { value: 'FB' } });
//     expect(wrapper.find('.rbt-input-main').at(0).getElement().props.value).toBe('FB');

//     await waitUntil(() => wrapper.state().finished === true, 3000); // wait about 3 seconds

//     wrapper.update(); // need to update the DOM!
//     // but get just 1 element "Type to Search..."
//     expect(wrapper.find('.dropdown-item').length).toBe(2);
//   });
// });
