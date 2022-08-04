import React from "react";
import "./style.scss"

const Button:React.FC = ({children})=>{
    return <button className="btn">{children} <i className="os-icon os-link" /></button>
};

export default Button;