import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Relevance = ({ data }) => {
  const [barOptions, setBarOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [],
    },
  });

  const [barSeries, setBarSeries] = useState([]);

  useEffect(() => {
    const countries = [];
    const relevances = [];

    data.forEach(item => {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
    });

    countries.forEach(country => {
      const countryData = data.filter(item => item.country === country);
      const totalRelevance = countryData.reduce((acc, item) => acc + parseInt(item.relevance, 10), 0);
      relevances.push(totalRelevance);
    });

    setBarOptions({
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: countries,
      },
    });

    setBarSeries([
      {
        name: 'Relevance',
        data: relevances,
      },
    ]);
  }, [data]);

  return (
    <div>
      <h4 className='text-center text-bold text-capitalize'>Relevance Chart</h4>
      <Chart options={barOptions} series={barSeries} type="bar" height="350" />
    </div>
  );
}

export default Relevance;
