import React from 'react';
import './Barchart.css';
import { Tooltip, Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

const Barchart = ({ data }) => {
    return (
        <BarChart width={530} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
    );
};

export default Barchart;