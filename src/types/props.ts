import React from "react";

export type Props = {
    type?: string;
    heading: string;
    children: React.ReactNode,
    closable?: boolean,
    onClose?: () => void
}

export type IdValue = string | number 
