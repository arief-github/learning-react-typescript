import React from "react";

type Props = {
    type?: string;
    heading: string;
    children: React.ReactNode,
    closable?: boolean,
    onClose?: () => void
}

export default Props