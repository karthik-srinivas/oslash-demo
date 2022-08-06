import React, {useContext} from "react";
import {DropdownContext} from "./DropdownContext";
import {clsx} from "clsx";

const DropdownContainer:React.FC<{
    className?:string
}> = ({children,className=""})=>{
    const {show} = useContext(DropdownContext);

    return <div className={clsx("dropdown--container",className,{
        "show":show
    })}>
        {children}
    </div>
}

export default DropdownContainer;