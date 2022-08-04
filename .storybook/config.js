import { loadStories } from "./load-stories";
import { configure } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../src/styles/global.scss';

configure(loadStories, module);
