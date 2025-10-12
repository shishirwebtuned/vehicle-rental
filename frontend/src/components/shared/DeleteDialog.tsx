"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteDialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
    open,
    onClose,
    title,
    description,
    onConfirm,
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

                <div className="flex justify-end gap-4 mt-6">
                    <Button variant="secondary" className="cursor-pointer"
                        onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        className="cursor-pointer"
                        variant="destructive" onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteDialog;
