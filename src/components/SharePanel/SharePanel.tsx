import React, {useCallback, useEffect, useState} from "react";
import Panel, {PanelBody, PanelFoot, PanelHead} from "../Panel";
import "./style.scss";
import Button from "../Button";
import OslashIcon from '../../assets/images/oslash.svg';
import Avatar from '../../assets/images/Avatar.svg';
import AccessSelect from "../AccessSelect";
import TagInput from "../TagInput";
import clsx from "clsx";
import {Group, GroupWithAccess, Person, PersonWithAccess} from "../SharePanel/ShareContext";
import Dropdown, {DropdownContainer, DropdownTrigger} from "../Dropdown";
import {useStore} from './ShareContext';
import {selectItem} from "components/Select/Select";

export const ShareHeader = () => {
    return <PanelHead>
        <div className="flex align-center">
            <i className="os-icon os-web"/>
            <div className="head-group">
                <p>Share to web</p>
                <p>Publish and share link with anyone</p>
            </div>
        </div>
        <button className="toggle">
            <span/>
        </button>
    </PanelHead>
}


export const ShareFooter: React.FC = ({children}) => {
    return <div className={"flex w-full"}>
        <a href={"https://google.co.in"} target={"_blank"}><i className={"os-icon os-question"}/>learn about sharing</a>
        {children}
    </div>

}

const InputGroup: React.FC<{
    onFocus?: { (event: React.FocusEvent<HTMLInputElement>): void }
}> = ({onFocus}) => {


    return <div className="search-bar">
        <input type="text" placeholder="People, emails, groups" onFocus={onFocus}/>
        <Button>Invite</Button>
    </div>
}


const ShareGroup: React.FC<{
    avatar?: string | null,
    text: string
    subtext: string,
    access?: selectItem | null
}> = ({avatar, text, subtext, access}) => {
    return <div className="oslash-group">
        <div className={"flex align-center mt-1"}>
            {avatar && <img className={"rounded-full"} src={avatar} alt={"avatar"}/>}
            {!avatar&& <span className="text-avatar">{text[0].toUpperCase()}</span>}
            <div className="os-text-group">
                <p>{text}</p>
                <p>{subtext}</p>
            </div>
            <AccessSelect value={access} rightAligned={true}/>
        </div>
    </div>
}

export const SharePanel: React.FC<{
    onSearchFocus?: { (event: React.FocusEvent<HTMLInputElement>): void }
}> = ({onSearchFocus}) => {

    const {search} = useStore();

    return <Panel className={"share"}>
        <ShareHeader/>
        <PanelBody>
            <InputGroup onFocus={onSearchFocus}/>

            {/*TODO: make all dropdown as portal */}
            <ShareGroup avatar={OslashIcon} text={"Everyone at OSlash"} subtext={"25 workspace members"}/>
            {search.selectedItems.map((item,index) => {
                return <ShareGroup key={`${item.id}__${index}`} access={item.access} avatar={item.avatar} text={item.name}
                                   subtext={"some@gmail"}/>
            })}

        </PanelBody>
        <PanelFoot>
            <ShareFooter>
                <Button isSmall={true} theme={"ghost"} preIcon={"link"} className={"ml-auto"}>
                    copy link
                </Button>
            </ShareFooter>
        </PanelFoot>
    </Panel>
}

type searchGroupType = "person" | "group";


const ListItem: React.FC<{
    avatar?: string | null | undefined,
    title: string
    type: "person" | "group",
    item: Person | Group,
    onItemClick: { (item: Person | Group): void }
}> = ({onItemClick, item, title, avatar = undefined, type}) => {
    return <div className={"list__item"} onClick={() => onItemClick(item)}>
        <div className={clsx({"group_avatar": type === "group", "avatar": type === "person"})}>
            {avatar ? <img src={avatar} alt={"avatar"}/> : <span>{title[0].toUpperCase()}</span>}
        </div>
        <div>
            {title}
        </div>
    </div>
}

const ListGroup: React.FC<{
    type: searchGroupType,
    listOfGroup: Array<Person | Group>,
    filterTarget: string | null,
    onSelectItem: { (item: Person | Group): void }
}> = ({onSelectItem, type, listOfGroup, filterTarget}) => {

    const [list, setList] = useState<Array<Person | Group>>([])

    useEffect(() => {
        setList(listOfGroup)
    }, [listOfGroup])


    useEffect(() => {
        if (filterTarget) {
            let _filtered = listOfGroup.filter(item => item.name.toLowerCase().indexOf(filterTarget.toLowerCase()) > -1)
            setList(_filtered)
        } else {
            setList(listOfGroup)
        }
    }, [filterTarget])

    /*TODO: useDebounce */
    return <>
        {!!list.length && <div className={"list__wrap"}>
            <div className="list__heading">Select a {type}</div>
            <div className="list__group">
                {list.map((item) => <ListItem onItemClick={onSelectItem} item={item} key={item.id} type={type}
                                              title={item.name}
                                              avatar={item.avatar}/>)}
            </div>

        </div>}
    </>
}

export const SearchPanel: React.FC<{
    onBackClick?: { (event: React.MouseEvent<HTMLButtonElement>): void },
    onSelectItem?: { (item: Array<PersonWithAccess | GroupWithAccess>): void }
}> = ({onSelectItem, onBackClick}) => {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<Array<Person | Group>>([]);
    const [access, setAccess] = useState<selectItem | null>(null);
    const {listOfPerson, listOfGroup} = useStore();

    const handleSelect = (item: Person | Group) => {
        if (onSelectItem) {
            setSelectedItems([...selectedItems, item])
        }
    }

    return <Panel className={"search"}>
        <PanelHead type={"gray"}>
            <div className="flex">
                <TagInput selectedItems={selectedItems} onInputChange={(event) => {
                    setSearchText(event.target.value)
                }}/>
                <fieldset disabled={selectedItems.length === 0} className={"ml-auto flex field-set"}>
                    <AccessSelect onSelect={(item) => setAccess(item)} rightAligned={true}/>
                    <Button onClick={() => {
                        if (onSelectItem && access && selectedItems.length > 0) {
                            const itemsWithAccess = selectedItems.map(item => {
                                return {
                                    ...item,
                                    access: access,
                                }
                            })

                            onSelectItem(itemsWithAccess)
                        }
                    }} isSmall>Invite</Button>
                </fieldset>
            </div>
        </PanelHead>
        <PanelBody>
            <ListGroup onSelectItem={(item) => handleSelect(item)} filterTarget={searchText} type={"person"}
                       listOfGroup={listOfPerson}/>

            <ListGroup onSelectItem={(item) => handleSelect(item)} filterTarget={searchText} type={"group"}
                       listOfGroup={listOfGroup}/>
        </PanelBody>
        <PanelFoot type={"gray"}>
            <ShareFooter>
                <Button onClick={onBackClick} isSmall={true} theme={"ghost"} className={"ml-auto"}>Back</Button>
            </ShareFooter>
        </PanelFoot>
    </Panel>
}

export const ShareSearch = () => {
    const [panelState, setPanelState] = useState<"share" | "search">("share")
    const {setSelectedSearch} = useStore();
    const focusHandlerCallback = useCallback(() => {
        setPanelState("search")
    }, [])

    return <Dropdown>
        <DropdownTrigger onTrigger={(show) => {
            if (!show) {
                setPanelState("share")
            }
        }} theme="primary" icon="share">Share</DropdownTrigger>
        <DropdownContainer className="rounded-2x">
            {panelState === "share" ? <SharePanel onSearchFocus={focusHandlerCallback}/> :
                <SearchPanel onSelectItem={(items) => {
                    setSelectedSearch(items);
                    setPanelState("share")
                }} onBackClick={() => setPanelState("share")}/>}
        </DropdownContainer>
    </Dropdown>
}


export default ShareSearch;