"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface MasterDialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

const MasterDialog: React.FC<MasterDialogProps> = ({
    open,
    onClose,
    title,
    description,
    children,
}) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md sm:max-w-lg rounded-2xl p-6">
                {(title || description) && (
                    <DialogHeader>
                        {title && <DialogTitle>{title}</DialogTitle>}
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                )}
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default MasterDialog;
