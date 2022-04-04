import React from 'react';
import { LineChart, Tooltip, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

const Linechart = ({ data }) => {
    return (
        <LineChart width={530} height={350} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
    );
};

export default Linechart;