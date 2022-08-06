import React from "react";
import {storiesOf} from "@storybook/react";
import Panel, {PanelHead, PanelFoot, PanelBody} from "../components/Panel";
import Dropdown, {DropdownContainer, DropdownTrigger} from "../components/Dropdown";

storiesOf("panel", module)
    .add("panel", () => {
        return <Panel>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur eveniet in ipsum nisi quas
            rerum sequi tempore voluptate! Accusantium at aut cum fugiat hic nostrum quas. Numquam, pariatur, suscipit?
        </Panel>
    })

    .add("panel with head, body and foot", () => {
        return <Panel>
            <PanelHead>
                this is head
            </PanelHead>
            <PanelBody>
                this is body
            </PanelBody>
            <PanelFoot>
                this is foot
            </PanelFoot>
        </Panel>
    })

    .add("gray panel with head, body and foot", () => {
        return <Panel>
            <PanelHead type="gray">
                this is head
            </PanelHead>
            <PanelBody>
                this is body
            </PanelBody>
            <PanelFoot type="gray">
                this is foot
            </PanelFoot>
        </Panel>
    })

    .add("dropdown with panel", () => {
        return <Dropdown>
            <DropdownTrigger theme="primary" icon="share">Share</DropdownTrigger>
            <DropdownContainer>
                <Panel>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur eveniet in ipsum
                    nisi quas rerum sequi tempore voluptate! Accusantium at aut cum fugiat hic nostrum quas. Numquam,
                    pariatur, suscipit?
                </Panel>
            </DropdownContainer>
        </Dropdown>
    })

    .add("dropdown with panel body", () => {
        return <Dropdown>
            <DropdownTrigger theme="primary" icon="share">Share</DropdownTrigger>
            <DropdownContainer>
                <Panel>
                    <PanelHead type="gray">
                        this is head
                    </PanelHead>
                    <PanelBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque hic, iste laboriosam non
                        quaerat sed ut voluptatibus? Alias distinctio doloribus ea eaque explicabo in labore minus, quam
                        quos velit voluptate.
                    </PanelBody>
                    <PanelFoot type="gray">
                        this is foot
                    </PanelFoot>
                </Panel>
            </DropdownContainer>
        </Dropdown>
    })