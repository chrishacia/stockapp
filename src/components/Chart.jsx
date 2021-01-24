import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import cfg from '../config';

const Chart = (props) => {
  const { query } = props;
  const { AV_URL, AV_KEY } = cfg;
  const [annualEarnings, setAnnualEarnings] = useState([]);

  // get EPS data
  useEffect(async () => {
    axios.get(`${AV_URL}/query?function=EARNINGS&symbol=${query}&apikey=${AV_KEY}`)
      .then((res) => {
        setAnnualEarnings(res.data.annualEarnings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(annualEarnings);

  return (
    <ResponsiveContainer width="95%" height={250}>
      <LineChart
        data={annualEarnings}
      >
        <CartesianGrid strokeDasharray="3 3" fill="#FFF" />
        <XAxis dataKey="reportedEPS" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="reportedEPS" stroke="#82ca9d" label="Reported EPS" />
      </LineChart>
    </ResponsiveContainer>
  );
};

Chart.defaultProps = {
  query: '',
};

Chart.propTypes = {
  query: PropTypes.string,
};

export default Chart;
