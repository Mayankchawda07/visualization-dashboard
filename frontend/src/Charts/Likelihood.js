import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Likelihood = ({ data }) => {
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
    const likelihoods = [];

    data.forEach(item => {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
    });

    countries.forEach(country => {
      const countryData = data.filter(item => item.country === country);
      const totalLikelihood = countryData.reduce((acc, item) => acc + item.likelihood, 0);
      likelihoods.push(totalLikelihood);
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
        name: 'Likelihood',
        data: likelihoods,
      },
    ]);
  }, [data]);

  return (
    <div>
      <h4 className='text-center text-bold text-capitalize'>Likelihood Chart</h4>
      <Chart options={barOptions} series={barSeries} type="bar" height="350" />
    </div>
  );
}

export default Likelihood;
