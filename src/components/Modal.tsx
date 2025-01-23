import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    className = "",
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);
    if (!isOpen) return null;
    return createPortal(
        <dialog
            ref={dialogRef}
            className={`bg-transparent p-0 m-0 backdrop:bg-black/50 ${className}`}
            onClick={(e) => {
                if (e.target === dialogRef.current) {
                    onClose();
                }
            }}
        >
            {children}
        </dialog>,
        document.body,
    );
};
