import "./style.scss";
import React, {useContext} from "react";
import {selectItem} from "./Select";
import clsx from "clsx";
import {DropdownContext} from "../Dropdown/DropdownContext";

type selectedCallback = { (selected: selectItem): void }

interface ISelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected: selectItem | null,
    val: selectItem,
    onItemClick?:selectedCallback,
    className?:string
}

const SelectItem: React.FC<ISelectProps> = ({children, val, selected, onItemClick,className}) => {

    const {hidden} = useContext(DropdownContext)

    const handleClick = (_selected:selectItem) => {
        hidden();
        if(onItemClick){
            onItemClick(_selected)
        }
    }

    return <button className={clsx("select__item ", {active: selected ? val.key === selected.key : null},className)}
                   onClick={()=>handleClick(val)}>
        {children}
    </button>
}

export default SelectItem;