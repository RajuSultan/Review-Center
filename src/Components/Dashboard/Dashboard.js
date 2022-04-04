import React from 'react';
import './Dashboard.css';
import Linechart from '../Linechart/Linechart';
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Areachart from '../Areachart/Areachart';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='charts'>
            <div className='chart-1'>
                <h1>LineChart</h1>
                <Linechart key={data.sell} data={data}></Linechart>

            </div>
            <div className='chart-2'>
                <h1>Barchart</h1>
                <Barchart key={data.sell} data={data}></Barchart>
            </div>
            <div className='chart-3'>
                <h1>Piechart</h1>
                <Piechart key={data.sell} data={data}></Piechart>
            </div>
            <div className='chart-4'>
                <h1>Areachart</h1>
                <Areachart key={data.sell} data={data}></Areachart>
            </div>
        </div>
    );
};

export default Dashboard;