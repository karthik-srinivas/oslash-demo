import React from "react";
import {storiesOf} from "@storybook/react";
import AccessSelect from "../components/AccessSelect";


storiesOf("select", module)
    .add("default", () => {
        return <AccessSelect />
    })

