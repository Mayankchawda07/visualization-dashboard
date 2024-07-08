import React, { useState } from 'react';
import Sidenav from '../Template/Sidenav';
import Header from '../Template/Header';
import Chart from 'react-apexcharts';

const Dashboard = () => {
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

    const [donutOptions] = useState({
        labels: ['A', 'B', 'C', 'D', 'E'],
    });

    const [donutSeries] = useState([44, 55, 41, 17, 15]);

    return (
        <>
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidenav />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-md-12 grid-margin">
                                    <div className="mixed-chart">
                                        <Chart options={barOptions} series={barSeries} type="bar" width="500" />
                                    </div>
                                    <div className="donut">
                                        <Chart options={donutOptions} series={donutSeries} type="donut" width="380" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
