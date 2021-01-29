import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import StockCards from '../components/StockCards';

describe('Search Bar Unit Tests', () => {
  configure({ adapter: new Adapter() });
  test('is full card component found on page', async () => {
    const symbolArr = ['FB'];
    const wrapper = mount(<StockCards stockSymbols={symbolArr} />);
    expect(wrapper.find('.card-hasDetails').length).toBe(1);
    expect(wrapper.find('.card-isEmpty').length).toBe(0);
  });
});
