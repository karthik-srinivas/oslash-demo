import React, {createContext, useReducer} from 'react';


type toggleState = {
    show: boolean,
    visible: Function,
    hidden: Function,
}

const initialState: toggleState = {
    show: false,
    visible: () => {
    },
    hidden: () => {
    }
}

export const DropdownContext = createContext<toggleState>(initialState);

enum ActionKind {
    toggleDrop = "dropdown_toggle"
}


type Action = {
    type: ActionKind,
    payload: boolean
}


const toggleReducer = (state: {show:boolean}, action: Action) => {
    switch (action.type) {
        case ActionKind.toggleDrop:
            return {
                ...state,
                show: action.payload
            }

        default:
            return state
    }
}


export const DropdownProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(toggleReducer, initialState)
    return <DropdownContext.Provider
        value={{
            show: state.show,
            visible: () => dispatch({type: ActionKind.toggleDrop, payload: true}),
            hidden: () => dispatch({type: ActionKind.toggleDrop, payload: false})
        }}>
        {children}
    </DropdownContext.Provider>
}