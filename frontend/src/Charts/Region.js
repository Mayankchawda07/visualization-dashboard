import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Region = ({ data }) => {
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
    const regions = [];
    const intensities = [];

    data.forEach(item => {
      if (!regions.includes(item.region)) {
        regions.push(item.region);
      }
    });

    regions.forEach(region => {
      const regionData = data.filter(item => item.region === region);
      const totalIntensity = regionData.reduce((acc, item) => acc + item.intensity, 0);
      intensities.push(totalIntensity);
    });

    setBarOptions({
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: regions,
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
      <h4 className='text-center text-bold text-capitalize'>Region Chart</h4>
      <Chart options={barOptions} series={barSeries} type="bar" height="350" />
    </div>
  );
}

export default Region;
