"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    type FontSpec,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const VehicleCategoryDoughnutChart = ({ vehiclesData }: { vehiclesData: any[] }) => {
    // 🧮 Count vehicles by category
    const categoryCount = useMemo(() => {
        const counts: Record<string, number> = {};
        vehiclesData.forEach((v) => {
            const name = v?.category?.name || "Unknown";
            counts[name] = (counts[name] || 0) + 1;
        });
        return counts;
    }, [vehiclesData]);

    const labels = Object.keys(categoryCount);
    const values = Object.values(categoryCount);

    const colors = [
        "rgba(99, 102, 241, 0.6)",   // soft indigo
        "rgba(16, 185, 129, 0.6)",   // soft emerald
        "rgba(245, 158, 11, 0.6)",   // soft amber
        "rgba(255, 107, 138, 0.6)",  // soft red
        "rgba(59, 130, 246, 0.6)",   // soft blue
        "rgba(139, 92, 246, 0.6)",   // soft violet
        "rgba(236, 72, 153, 0.6)",   // soft pink
    ].slice(0, labels.length);

    const data = {
        labels,
        datasets: [
            {
                label: "Vehicles by Category",
                data: values,
                backgroundColor: colors,
                borderColor: "#fff",
                borderWidth: 2,
                hoverBackgroundColor: colors.map(c => c.replace("0.6", "0.8")),
                hoverOffset: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // important to control height
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: {
                    color: "#374151",
                    font: { size: 14, family: "Nunito" } as Partial<FontSpec>,
                },
            },
            title: {
                display: true,
                text: "Vehicles by Category",
                color: "#111827",
                font: { size: 17, family: "Nunito", weight: "bold" } as Partial<FontSpec>,
            },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `${ctx.label}: ${ctx.parsed} vehicles`,
                },
            },
        },
        cutout: "65%",
    };

    return (
        <div className="bg-white p-2 md:p-4 border border-gray-200 rounded-md shadow-sm w-full max-w-3xl mx-auto h-64 md:h-80">
            {/* h-80 sets a smaller fixed height */}
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default VehicleCategoryDoughnutChart;
