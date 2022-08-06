import React from "react";
import {storiesOf} from "@storybook/react";
import Dropdown, {DropdownContainer, DropdownTrigger} from "../components/Dropdown";

storiesOf("Dropdown", module)
    .add("dropdown trigger", () => {
        return <div>
            <Dropdown>
                <DropdownTrigger theme="primary" icon="share">Share</DropdownTrigger>
                <DropdownContainer>
                    <div style={{width: "200px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem excepturi facilis hic iure optio
                        pariatur sapiente? Aspernatur cum debitis, doloremque expedita, hic labore magnam officia
                        provident qui tempore, veniam voluptatibus?
                    </div>
                </DropdownContainer>
            </Dropdown>
            <p>Working...</p>
        </div>
    })