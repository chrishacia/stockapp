import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import cfg from '../config';

const Chart = (props) => {
  const { query, avKey } = props;
  const { AV_URL } = cfg;
  const [annualEarnings, setAnnualEarnings] = useState([]);

  // get EPS data
  useEffect(async () => {
    axios.get(`${AV_URL}/query?function=EARNINGS&symbol=${query}&apikey=${avKey}`)
      .then((res) => {
        setAnnualEarnings(res.data.annualEarnings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(annualEarnings);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={annualEarnings}
      >
        <CartesianGrid strokeDasharray="3 3" fill="transparent" />
        <XAxis dataKey="reportedEPS" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="reportedEPS" stroke="#FFF" label="Reported EPS" />
      </LineChart>
    </ResponsiveContainer>
  );
};

Chart.defaultProps = {
  query: '',
  avKey: '',
};

Chart.propTypes = {
  query: PropTypes.string,
  avKey: PropTypes.string,
};

export default Chart;
