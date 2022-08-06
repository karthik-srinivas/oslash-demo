import React from "react";
import {storiesOf} from "@storybook/react";
import Button from "../components/Button";


storiesOf("Button", module)
    .add("default", () => <Button>Share</Button>)
    .add("default with icon", () => <Button icon={"link"}>Share</Button>)
    .add("primary", () => <Button theme="primary">Share</Button>)
    .add("primary with icon", () => <Button theme="primary" icon={"share"}>Share</Button>)
    .add("ghost with icon", () => <Button theme="ghost" icon="dropDown">Share</Button>)
    .add("small button", () => <Button isSmall icon="dropDown">Share</Button>)
