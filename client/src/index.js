import React from "react";
import ReactDOM from "react-dom";
import ToolBar from "./toolbar"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <ToolBar />
  </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
