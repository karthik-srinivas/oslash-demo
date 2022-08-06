import Dropdown, {DropdownContainer, DropdownTrigger} from "../Dropdown";
import React, {useEffect, useState} from "react";
import "./style.scss";
import SelectItem from "./SelectItem";
import clsx from "clsx";

export type selectItem = {
    key: string,
    value: string,
    className?:string
};


export type listOfSelectItem = Array<selectItem>;


interface ISelectProp {
    defaultVal: string,
    items: listOfSelectItem,
    rightAligned?:boolean,
    value:string,
    onSelect?: { (select: selectItem): void }
}

const Select: React.FC<ISelectProp> = (props) => {
    const {defaultVal, items, onSelect,rightAligned=false,value} = props;

    const [selectedVal, setSelectedVal] = useState<selectItem | null>(null);
    useEffect(() => {
        if (!selectedVal) {
            const selectedObj = items.find((obj) => obj.value === defaultVal);
            if (selectedObj) {
                setSelectedVal(selectedObj)
            }
        }
    }, [])
    useEffect(()=>{
        const selectedObj = items.find((obj) => obj.value === value);
        if(selectedObj){
            setSelectedVal(selectedObj)
        }
    },[value])

    return <Dropdown className="select">
        <DropdownTrigger isSmall icon={"dropDown"} theme={"ghost"}>
            {selectedVal ? selectedVal.key : "NA"}
        </DropdownTrigger>
        <DropdownContainer className={clsx({"right-aligned":rightAligned})}>
            <div className="select__group">
                {items.map(ItemObj => {
                    return <SelectItem className={ItemObj.className} onItemClick={(selectedData) => {
                        setSelectedVal(selectedData);
                        if (onSelect) {
                            onSelect(selectedData)
                        }
                    }} key={ItemObj.key} selected={selectedVal} val={ItemObj}>
                        {ItemObj.key}
                    </SelectItem>
                })}
            </div>
        </DropdownContainer>
    </Dropdown>
}

export default Select;