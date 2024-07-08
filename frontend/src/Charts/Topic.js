import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Topic = ({ data }) => {
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
    const topics = [];
    const intensities = [];

    data.forEach(item => {
      if (!topics.includes(item.topic)) {
        topics.push(item.topic);
      }
    });

    topics.forEach(topic => {
      const topicData = data.filter(item => item.topic === topic);
      const totalIntensity = topicData.reduce((acc, item) => acc + item.intensity, 0);
      intensities.push(totalIntensity);
    });

    setBarOptions({
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: topics,
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
      <h4 className='text-center text-bold text-capitalize'>Topic Chart</h4>
      <Chart options={barOptions} series={barSeries} type="line" height="350" />
    </div>
  );
}

export default Topic;
