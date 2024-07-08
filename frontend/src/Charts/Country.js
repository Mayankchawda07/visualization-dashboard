import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Country = ({data}) => {
  const [barOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001],
    },
  });

  const [barSeries] = useState([
    {
      name: 'series-1',
      data: [10, 20, 30, 40, 50, 60, 40, 30, 20, 100],
    },
  ]);
  return (
    <div>
      <h4 className='text-center text-bold text-capitalize'>City Chart</h4>
      <Chart options={barOptions} series={barSeries} type="bar" height="350" />
    </div>
  )
}

export default Country