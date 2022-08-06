import React, {createRef, useEffect, useRef} from "react";
import "./style.scss"
import {Group, Person} from "../SharePanel/ShareContext";


//use generics to reuse

const Tag: React.FC<{
    text: string,
    onRemove: { (): void }
}> = ({text, onRemove}) => {
    return <div className={"tag"}>
       <span className={"text"}>{text}</span>
        <span className={"close"} onClick={onRemove}>X</span>
    </div>
}

const TagInput: React.FC<{
    onInputChange: { (event: React.ChangeEvent<HTMLInputElement>): void },
    selectedItems: Array<Person | Group>
}> = ({onInputChange, selectedItems}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (selectedItems.length) {
            // console.log(inputRef.current)
        }
    }, [selectedItems,inputRef])

    return <div className="tag-input">
        {selectedItems.length > 0 && <div className={"tag-group"}>
            {selectedItems.map(item => {
                return <Tag key={item.id} text={item.name} onRemove={() => {
                    // console.log(item)
                }}/>
            })}
        </div>}
        {selectedItems.length === 0 &&
        <input className="form-control" type="text" placeholder="Search emails, names or groups"
               onChange={onInputChange} ref={inputRef} />}
    </div>
}

export default TagInput;