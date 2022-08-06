import React from "react";
import {storiesOf} from "@storybook/react";
import {SearchPanel} from "../components/SharePanel/SharePanel";
import Dropdown, {DropdownContainer, DropdownTrigger} from "../components/Dropdown";


storiesOf("search", module)
    .add("panel", () => {
        return <Dropdown>
            <DropdownTrigger theme="primary" icon="share">Share</DropdownTrigger>
            <DropdownContainer className="rounded-2x">
                <SearchPanel/>
            </DropdownContainer>
        </Dropdown>
    })

