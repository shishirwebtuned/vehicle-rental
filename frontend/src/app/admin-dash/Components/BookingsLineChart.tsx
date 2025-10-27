"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    FontSpec,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BookingsLineChart = ({ bookingsData = [] }: { bookingsData?: any[] }) => {
    // Group bookings by pickupDate
    const bookingsByDate = useMemo(() => {
        const counts: Record<string, number> = {};
        bookingsData.forEach((b) => {
            const date = new Date(b.pickupDate).toLocaleDateString("en-GB"); // format: DD/MM/YYYY
            counts[date] = (counts[date] || 0) + 1;
        });
        // Sort by date
        return Object.keys(counts)
            .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
            .reduce((acc, key) => {
                acc[key] = counts[key];
                return acc;
            }, {} as Record<string, number>);
    }, [bookingsData]);

    const labels = Object.keys(bookingsByDate);
    const values = Object.values(bookingsByDate);

    const data = {
        labels,
        datasets: [
            {
                label: "Daily Bookings",
                data: values,
                fill: true,
                backgroundColor: "rgb(255 ,107 ,138, 0.2)", // soft indigo fill
                borderColor: "rgb(255 107 138)", // solid line
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                labels: { color: "#374151", font: { size: 14, family: "Nunito" } as Partial<FontSpec> },
            },
            title: {
                display: true,
                text: "Daily Bookings Trend",
                color: "#111827",
                font: { size: 17, family: "Nunito", weight: "bold" } as Partial<FontSpec>,
            },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `${ctx.parsed.y} bookings`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 },
            },
            x: {
                ticks: { color: "#374151", font: { family: "Nunito" } },
            },
        },
    };

    return (
        <div className="bg-white p-2 md:p-4 border border-gray-200 rounded-md shadow-sm w-full max-w-3xl mx-auto">
            <Line data={data} options={options} />
        </div>
    );
};

export default BookingsLineChart;
