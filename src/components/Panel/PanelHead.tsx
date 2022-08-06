import React from "react";
import clsx from "clsx";

export interface IPanelHeadProps {
    type?: "gray" | "default"
}

const PanelHead: React.FC<IPanelHeadProps> = ({children, type = "default"}) => {
    return <div className={`panel__head ${clsx({'panel__head--gray': type === "gray"})}`}>
        {children}
    </div>
}

export default PanelHead;