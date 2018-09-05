# Showcase for Chrome `unhandledrejection` in `eval()` bug

In some cases promises rejected inside `eval()` code
(like when webpacked with `devtool` with `eval*` option)
don't trigger `unhandledrejection` event.

Out of 8 presented cases that trigger the event as expected when
the code is written as usual, only 3 cases trigger the event when
code is written inside `eval()`.

(Install dependencies with `npm i`).

For simple Chrome reproduction (without webpack) run `npm run http-server`.
And look in the console for logs when clicking buttons in the first two sections.

For the Webpack case reproduction run `npm run webpack-eval` and click
the buttons in the Webpack section.
Luckily, there is a workaround - using a `devtool` option that does not
result in `eval()`s, see `npm run webpack-noeval`.
