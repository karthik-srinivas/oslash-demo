import React, {useEffect, useState} from "react";
import {listOfSelectItem, selectItem} from "../Select/Select";
import Select from "../Select";
import "./style.scss"

const AccessSelect: React.FC<{
    rightAligned?: boolean
    value?: selectItem | null,
    onSelect?: { (selectedAccess: selectItem): void }
}> = ({rightAligned = false, onSelect, value = null}) => {
    const [selectedVal, setValue] = useState<string>("no");
    useEffect(() => {
        if (value === null) {
            setValue("no")
        } else {
            setValue(value.value)
        }
    }, [value])
    const items: listOfSelectItem =
        [{key: "Full Access", value: "full"},
            {key: "Can edit", value: "edit"},
            {key: "Can view", value: "view"},
            {key: "No Access", value: "no", className: "error"}]

    return <div className="access-drop">
        <Select onSelect={onSelect} defaultVal={"no"} value={selectedVal} items={items} rightAligned={rightAligned}/>
    </div>
}

export default AccessSelect;