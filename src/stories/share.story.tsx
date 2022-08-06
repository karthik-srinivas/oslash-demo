import React from "react";
import {storiesOf} from "@storybook/react";
import ShareSearch, {SharePanel} from "../components/SharePanel";
import Dropdown, {DropdownContainer, DropdownTrigger} from "../components/Dropdown";


storiesOf("share", module)
    .add("panel", () => {
        return <Dropdown>
            <DropdownTrigger theme="primary" icon="share">Share</DropdownTrigger>
            <DropdownContainer className="rounded-2x">
                <SharePanel/>
            </DropdownContainer>
        </Dropdown>
    })
    .add("share with search", () => {
        return <ShareSearch/>
    })

