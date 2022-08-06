import React from "react";

const useClickTrigger = (fn: Function) => {
    const onClick: { (event: React.MouseEvent<HTMLButtonElement>): void } = (event) => {
        event.stopPropagation();
        fn(event)
    };

    return [{onClick}]
}

export default useClickTrigger;