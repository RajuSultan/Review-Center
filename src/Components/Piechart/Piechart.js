import React from 'react';
import { Pie, PieChart } from 'recharts';
import './Piechart.css';

const Piechart = ({ data }) => {
    return (
        <div>
            <PieChart width={530} height={350}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>

        </div>
    );
};

export default Piechart;