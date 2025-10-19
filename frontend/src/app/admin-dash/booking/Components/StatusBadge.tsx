import React from "react";
import clsx from "clsx";

const StatusBadge = ({ status }: { status: string }) => {
    const normalized = status?.toLowerCase()?.trim();

    const badgeClasses = clsx(
        "inline-flex w-full justify-center items-center px-3 py-1 rounded-full text-xs font-semibold capitalize",
        {
            "bg-yellow-100 text-yellow-800": normalized === "pending",
            "bg-blue-100 text-blue-800": normalized === "confirmed",
            "bg-green-100 text-green-800": normalized === "completed",
            "bg-red-100 text-red-800": normalized === "cancelled",
        }
    );

    return (
        <div className={badgeClasses}>
            {normalized || "unknown"}
        </div>
    );
};

export default StatusBadge;
