import React, {createRef, useContext, useEffect} from "react";
import {DropdownContext, DropdownProvider} from "./DropdownContext";
import "./style.scss"


const DropdownWrap: React.FC<{
    className?: string
}> = ({children, className}) => {
    const {show, hidden} = useContext(DropdownContext);
    const dropdownRef = createRef<HTMLDivElement>()


    useEffect(() => {

        const handleDomClick = (event: MouseEvent) => {
            const currentTarget = (event.target as HTMLElement);
            if (dropdownRef.current&&(!dropdownRef.current.contains(currentTarget.closest(".dropdown")))&& show) {
                hidden()
            }
        }
        window.addEventListener("click", handleDomClick, true)

        return () => {
            window.removeEventListener("click", handleDomClick, true)
        }

    }, [show])

    return <div className={`dropdown ${className}`} ref={dropdownRef}>
        {children}
    </div>
}

const Dropdown: React.FC<{
    className?: string
}> = ({children, className = ""}) => {


    return <DropdownProvider>
        <DropdownWrap className={className}>
            {children}
        </DropdownWrap>
    </DropdownProvider>
}

export default Dropdown;