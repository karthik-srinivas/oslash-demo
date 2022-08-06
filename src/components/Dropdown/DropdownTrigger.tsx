import React, {useCallback, useContext, useEffect, useRef} from "react";
import Button from "../Button";
import {IButton} from "../Button/Button";
import useClickTrigger from "./hooks/useClickTrigger";
import {DropdownContext} from "./DropdownContext";

interface IDropDownTrigger extends IButton {
    onTrigger?: { (show: boolean): void }
}

const DropdownTrigger: React.FC<IDropDownTrigger> = ({children,onTrigger, ...rest}, ref) => {

    const {show, visible, hidden} = useContext(DropdownContext);

    const toggleFn = useCallback(() => {
        if (show) {
            hidden()
        } else {
            visible();
        }
        if(onTrigger){
            onTrigger(show)
        }
    }, [show])

    const [bind] = useClickTrigger(toggleFn);


    return <Button {...rest} {...bind} >
        {children}
    </Button>
}

export default DropdownTrigger