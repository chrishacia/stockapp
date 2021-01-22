const dev = {
  API_DOMAIN: 'http://localhost:3030',
  AV_KEY: 'LTPXUS10R5CPEQ6I',
  AV_URL: 'https://www.alphavantage.co',
};

const prod = {
  // prod enviroment n/a
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  ...config,
};
