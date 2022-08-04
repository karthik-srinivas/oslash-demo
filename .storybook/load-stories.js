const req = require.context("../src", true, /\.story.tsx?$/);

export function loadStories() {
    req.keys().forEach(filename => req(filename));
}
