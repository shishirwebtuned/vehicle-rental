"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    FontSpec,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardBarChart = ({
    vehiclesData = [],
    categoriesData = [],
    careersData = [],
    bookingsData = [],
}: {
    vehiclesData?: any[];
    categoriesData?: any[];
    careersData?: any[];
    bookingsData?: any[];
}) => {

    // Compute counts dynamically
    const counts = useMemo(() => {
        return {
            Vehicles: vehiclesData.length,
            Categories: categoriesData.length,
            Careers: careersData.length,
            Bookings: bookingsData.length,
        };
    }, [vehiclesData, categoriesData, careersData, bookingsData]);

    const labels = Object.keys(counts);
    const values = Object.values(counts);

    const colors = [
        "rgba(99, 102, 241, 0.6)",  // soft indigo
        "rgba(16, 185, 129, 0.6)",  // soft emerald
        "rgba(245, 158, 11, 0.6)", // soft amber
        "rgb(255 ,107 ,138, 0.6)",
    ];

    const hoverColors = colors.map(c => c.replace("0.6", "0.8"));

    const data = {
        labels,
        datasets: [
            {
                label: "Total Count",
                data: values,
                backgroundColor: colors,
                borderColor: "#fff",
                borderWidth: 2,
                hoverBackgroundColor: hoverColors,
                borderRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Dashboard Overview",
                font: {
                    size: 17,
                    family: "Nunito",
                    weight: "bold",
                } as Partial<FontSpec>,
                color: "#111827",
            },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `${ctx.label}: ${ctx.parsed.y}`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 },
            },
        },
    };

    return (
        <div className="bg-white p-2 md:p-4 border border-gray-200 rounded-md shadow-sm w-full max-w-3xl mx-auto">
            <Bar data={data} options={options} />
        </div>
    );
};

export default DashboardBarChart;
