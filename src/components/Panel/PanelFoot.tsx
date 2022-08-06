import React from "react";
import clsx from "clsx";
import {IPanelHeadProps} from "./PanelHead";

interface IPanelFootProps extends IPanelHeadProps{

}

const PanelFoot: React.FC<IPanelFootProps> = ({children, type = "default"}) => {
    return <div className={`panel__foot ${clsx({'panel__foot--gray': type === "gray"})}`}>
        {children}
    </div>
}


export default PanelFoot;