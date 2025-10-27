"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale,
    FontSpec,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, RadialLinearScale);

const BookingStatusChart = ({ bookingsData = [] }: { bookingsData?: any[] }) => {
    // Count bookings by status
    const statusCount = useMemo(() => {
        const counts: Record<string, number> = {};
        bookingsData.forEach((b) => {
            const status = b.status || "Unknown";
            counts[status] = (counts[status] || 0) + 1;
        });
        return counts;
    }, [bookingsData]);

    const labels = Object.keys(statusCount);
    const values = Object.values(statusCount);

    // Map each status to a specific soft color
    const statusColorMap: Record<string, string> = {
        pending: "rgba(245, 158, 11, 0.5)",     // soft amber
        cancelled: "rgba(239, 68, 68, 0.5)",    // soft red
        confirmed: "rgba(99, 102, 241, 0.5)",   // soft indigo
        completed: "rgba(16, 185, 129, 0.5)",   // soft green
        Unknown: "rgba(107, 114, 128, 0.5)",    // fallback grey
    };

    const colors = labels.map((label) => statusColorMap[label] || statusColorMap["Unknown"]);
    const hoverColors = colors.map((c) => c.replace("0.5", "0.8"));

    const data = {
        labels,
        datasets: [
            {
                label: "Booking Status",
                data: values,
                backgroundColor: colors,
                borderColor: hoverColors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // control height
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: { color: "#374151", font: { size: 14, family: "Nunito" } as Partial<FontSpec> },
            },
            title: {
                display: true,
                text: "Bookings by Status",
                color: "#111827",
                font: { size: 17, family: "Nunito", weight: "bold" } as Partial<FontSpec>,
            },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `${ctx.label}: ${ctx.raw} bookings`,
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 border border-gray-200 rounded-md shadow-sm w-full max-w-3xl mx-auto h-72 md:h-80">
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default BookingStatusChart;
