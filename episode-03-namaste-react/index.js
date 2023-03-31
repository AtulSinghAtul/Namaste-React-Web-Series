import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading-01" }, "heading first"),
//     React.createElement("h2", { id: "heading-02" }, "heading second"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading-01" }, "heading first"),
//     React.createElement("h2", { id: "heading-02" }, "heading second"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// this is core react
//React.createElement => ReactElement= JS Object => render into HTML element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);

//JSX Code
// JSX Code => React.createElement => ReactElement = JS Object => render into HTML element
const jsxHeading = <h1 id="jsxHeading">Namaste React Using JSX</h1>;

const boot = ReactDOM.createRoot(document.getElementById("boot"));
boot.render(jsxHeading);

console.log(jsxHeading);
