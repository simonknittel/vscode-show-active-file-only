# vscode-show-active-file-only

Example project to reproduce <https://github.com/microsoft/vscode/issues/195150>

## Steps to reproduce

1. Open this project in VSCode
2. Open the problems pane (`View: Focus Problems (Errors, Warnings, Infos)`)
3. Open `src/App.js` and `src/main.js`
4. You should now see one problem for each file
5. Enable the `Toggle Active File`/`Show Active File Only` option in the problems pane
6. Focus the `src/App.js` file
7. You should now see only the problem of the `src/App.js` file
8. Restart/reload VSCode (`Developer: Reload Window`)
9. Focus the `src/App.js` file and then focus the `src/main.js` file
10. You are now seeing that the filter is disabled and all problems are shown again. The filter hasn't been persisted across the restart/reload.

_There is no need to run npm install._
