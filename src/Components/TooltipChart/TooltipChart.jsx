import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Rahim", "physics": 85, "chemistry": 78, "math": 90 },
    { "id": 2, "name": "Karim", "physics": 75, "chemistry": 70, "math": 80 },
    { "id": 3, "name": "Ayesha", "physics": 92, "chemistry": 88, "math": 94 },
    { "id": 4, "name": "Rafi", "physics": 68, "chemistry": 72, "math": 65 },
    { "id": 5, "name": "Tania", "physics": 77, "chemistry": 81, "math": 74 },
    { "id": 6, "name": "Hasan", "physics": 89, "chemistry": 84, "math": 91 },
    { "id": 7, "name": "Sadia", "physics": 95, "chemistry": 90, "math": 97 },
    { "id": 8, "name": "Imran", "physics": 80, "chemistry": 76, "math": 83 },
    { "id": 9, "name": "Mitu", "physics": 70, "chemistry": 65, "math": 78 },
    { "id": 10, "name": "Farhan", "physics": 88, "chemistry": 82, "math": 86 }
]


const TooltipChart = () => {
    return (
        <div>
            <LineChart
                width={900}
                height={500}
                data={resultData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <CartesianGrid stroke='#aaa' strokeDasharray={'5 5'} ></CartesianGrid>

                <Line
                    type={'monotone'}
                    stroke='red'
                    dataKey={'physics'}
                    strokeWidth={3}
                    name='Physics'

                ></Line>
                <Line
                    type={'monotone'}
                    stroke='green'
                    dataKey={'chemistry'}
                    strokeWidth={3}
                    name='Chemistry'
                ></Line>

                <Line
                    type={'monotone'}
                    stroke='blue'
                    dataKey={'math'}
                    strokeWidth={3}
                    name='Math'
                ></Line>

                <Legend></Legend>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default TooltipChart;





