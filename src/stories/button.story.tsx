import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button";


storiesOf("Button", module)
  .add("with text", () => <Button>Working</Button>)
  .add("with emoji", () => (
    <button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
