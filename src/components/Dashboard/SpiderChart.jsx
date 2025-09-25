import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';

export default function  SpiderChart() {

    const data = [
        {
            subject: "Sales",
            Budget: 120,
            Spending: 110,
        },
        {
            subject: "Marketing",
            Budget: 98,
            Spending: 130,
        },
        {
            subject: "Developer",
            Budget: 86,
            Spending: 90,
        },
        {
            subject: "Customer Support",
            Budget: 99,
            Spending: 85,
        },
        {
            subject: "Technology",
            Budget: 85,
            Spending: 70,
        },
        {
            subject: "Administration",
            Budget: 65,
            Spending: 95,
        }
    ]

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm mt-5">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Reports</h3>
            <span className="text-sm text-gray">This Month</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis/>
                <Radar 
                    name='Allocated Budget'
                    dataKey="Budget"
                    stroke='#3b82f6'
                    fill="#3b82f6"
                    fillOpacity={0.6}
                />

                <Radar 
                    name='Actual Spending'
                    dataKey="Spending"
                    stroke='#84cc16'
                    fill="#84cc16"
                    fillOpacity={0.3}
                />
                <Legend/>
            </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}
