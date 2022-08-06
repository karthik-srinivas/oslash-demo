import React, {memo, forwardRef, RefForwardingComponent} from "react";
import "./style.scss"
import {clsx} from 'clsx';
import {Icon} from "../../utils/icon";


export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "primary" | "default" | "ghost",
    className?: string
    isSmall?: boolean,
    icon?: keyof typeof Icon,
    preIcon?: keyof typeof Icon,
    ref?: React.RefObject<HTMLButtonElement>
}

const Button: RefForwardingComponent<HTMLButtonElement, IButton> = (props, ref) => {
    const {children, theme = "default", isSmall = false, icon,preIcon,className="", ...rest} = props;
    return <button {...rest} ref={ref} className={`btn btn--${theme} ${clsx({small: isSmall})} ${className}`}>
        {preIcon &&
        <i className={`os-icon ${Icon[preIcon]} pre`}/>}
        {children} {icon &&
    <i className={`os-icon ${Icon[icon]}`}/>}
    </button>

};

export default memo(forwardRef(Button));