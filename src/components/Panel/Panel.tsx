import React from "react";
import "./style.scss";
import clsx from "clsx";

const Panel: React.FC<{
    className?: string
}> = ({children, className=""}) => {
    return <div className={`panel ${clsx(className)}`}>
        {children}
    </div>
}

export default Panel;