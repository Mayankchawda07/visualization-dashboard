import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const City = ({ data }) => {
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
    const intensities = [];

    data.forEach(item => {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
    });

    countries.forEach(country => {
      const countryData = data.filter(item => item.country === country);
      const totalIntensity = countryData.reduce((acc, item) => acc + item.intensity, 0);
      intensities.push(totalIntensity);
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
        name: 'Intensity',
        data: intensities,
      },
    ]);
  }, [data]);

  return (
    <div>
      <h4 className='text-center text-bold text-capitalize'>City Chart</h4>
      <Chart options={barOptions} series={barSeries} type="bar" height="350" />
    </div>
  );
}

export default City;
