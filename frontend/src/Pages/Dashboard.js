import React, { useEffect, useState } from 'react';
import Sidenav from '../Template/Sidenav';
import Header from '../Template/Header';
import City from '../Charts/City';
import Intensity from '../Charts/Intensity';
import Country from '../Charts/Country';
import Likelihood from '../Charts/Likelihood';
import Relevance from '../Charts/Relevance';
import Topic from '../Charts/Topic';
import Region from '../Charts/Region';


const Dashboard = () => {
    const [showTable, setShowTable] = useState(true);
    const [data, setData] = useState();

    const getdata = () => {
        fetch('http://206.189.130.102:8889/api/v1/visual/getData')
            .then((data) => {
                return data.json()
            }).then((res) => {
                setData(res?.data)
            })
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidenav />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className='col-md-12'>
                                    <button onClick={() => setShowTable(!showTable)} className='btn btn-primary mr-2'>{showTable ? 'Show Graphs' : 'Show Table'}</button>
                                </div>
                                <div className="col-md-12">
                                    {showTable ? (
                                        <>
                                            <h4 className='text-center text-bold text-capitalize mb-5'>Table</h4>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>S.no</th>
                                                        <th>Topic</th>
                                                        <th>Country</th>
                                                        <th>Region</th>
                                                        <th>Intensity</th>
                                                        <th>Likelihood</th>
                                                        <th>Relevance</th>
                                                        <th>Start Year</th>
                                                        <th>End Year</th>
                                                        
                                                      
                                                       
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data?.map((val, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>{i + 1}</td>
                                                                <td>{val?.topic}</td>
                                                                <td>{val?.country}</td>
                                                                <td>{val?.region}</td>
                                                                <td>{val?.intensity}</td>
                                                                <td>{val?.likelihood}</td>
                                                                <td>{val?.relevance}</td>
                                                                <td>{val?.start_year}</td>
                                                                <td>{val?.end_year}</td>
                                                               
                                                                
                                                                
                                                            </tr>
                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </>
                                    ) : (
                                        <>
                                            <Intensity data={data} />
                                            <Likelihood data={data} />
                                            <Relevance data={data}/>
                                            <Country data={data} />
                                            <Topic data={data} />
                                            <Region data={data} />
                                            <City data={data} />
                                        </>
                                    )}
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
