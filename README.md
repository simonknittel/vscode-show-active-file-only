# vscode-show-active-file-only

Example project to reproduce <https://github.com/microsoft/vscode/issues/195150>

## Steps to reproduce

1. Open this project in VSCode
2. Install the recommended extensions (`dbaeumer.vscode-eslint`)
3. Open the problems pane (`View: Focus Problems (Errors, Warnings, Infos)`)
4. Open `src/App.js` and `src/main.js`
5. You should now see two problems for the `src/App.js` file and one problem for the `src/main.js` file
6. Enable the `Toggle Active File`/`Show Active File Only` option in the problems pane
7. Focus the `src/App.js` file
8. You should now see only the two problems of the `src/App.js` file
9. Restart/reload VSCode (`Developer: Reload Window`)
10. Focus the `src/App.js` file and then focus the `src/main.js` file
11. You are now seeing that the filter is disabled an all problems are shown. The filter hasn't been persisted across the restart/reload.
