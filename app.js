import React from "react";
import ReactDOM from "react-dom/client";

const content = React.createElement("h1",{},"I am From App.js");
let root= ReactDOM.createRoot(document.getElementById("root"));

root.render(content)