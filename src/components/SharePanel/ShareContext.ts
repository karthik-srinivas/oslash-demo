import {selectItem} from "../Select/Select";
import create from "zustand";
import Avatar from '../../assets/images/Avatar.svg';
import produce from 'immer';
import { nanoid } from 'nanoid'

export type Person = {
    name: string,
    email: string,
    avatar?: string | null | undefined,
    id:string
}

export type withAccess = {
    access?: selectItem | null,
}

export type PersonWithAccess = Person & withAccess;

export type Group = Omit<Person, "email"> & {
    members: number
}

export type GroupWithAccess = Group & withAccess;


type shareStateType = {
    search: {
        selectedItems: Array<PersonWithAccess | GroupWithAccess>
        accessType: selectItem | null
    },
    share: {
        listOfInvites: Array<PersonWithAccess | GroupWithAccess>,
        oslashAccess: selectItem | null
    }
}

type stateWithCallbacks = {
    listOfPerson: Array<Person>,
    listOfGroup: Array<Group>,
    search: {
        selectedItems: Array<PersonWithAccess | GroupWithAccess>,
    },
    setSelectedSearch: { (items: Array<PersonWithAccess | GroupWithAccess>): void }
}


export const useStore = create<stateWithCallbacks>((set) => ({
    listOfPerson: [
        {name: "Wade Cooper", email: "wc@gmail.com", avatar: Avatar,id:nanoid()},
        {name: "Arlene Mccoy", email: "am@gmail.com", avatar: Avatar,id:nanoid()},
        {name: "Koushik Shetty", email: "ks@gmail.com", avatar: Avatar,id:nanoid()},
    ],
    listOfGroup: [
        {name: "Product", members: 25,id:nanoid()},
        {name: "Engineering", members: 25,id:nanoid()},
        {name: "Infra", members: 25,id:nanoid()},
        {name: "HR Team", members: 25,id:nanoid()},
    ],
    search: {
        selectedItems: [],
        access: null
    },
    setSelectedSearch: (items) => {
        set(produce((draft) => {
            draft.search.selectedItems.push(...items)
        }))
    }
}))

/*
const State: shareStateType = {
    search: {
        selectedItems: [],
        accessType: null
    },
    share: {
        listOfInvites: [],
        oslashAccess: null
    }
}

const defaultCtxState: stateWithCallbacks = {
    state: {
        search: {
            selectedItems: [],
            accessType: null
        },
        share: {
            listOfInvites: [],
            oslashAccess: null
        }
    },
    setPanel: () => {
    },
    setSearchText: () => {
    },
    updateSelectedSearchItem: () => {
    },
    updateSelectedSearchAccess: () => {
    },
    setInvites: () => {
    },
    setOslashAccess: () => {
    },
}

export const ShareContext = createContext<stateWithCallbacks>(defaultCtxState)
*/
