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
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading);

//JSX Code
// JSX Code => React.createElement => ReactElement = JS Object => render into HTML element
// const jsxHeading = <h1 id="jsxHeading">Namaste React Using JSX</h1>;

// const boot = ReactDOM.createRoot(document.getElementById("boot"));
// boot.render(jsxHeading);

// console.log(jsxHeading);

////////////////////////////////////////////////////////
// React Element
// const heading = <h1 className="heading">Namste React Using JSX</h1>;
// const boot = ReactDOM.createRoot(document.getElementById("boot"));

// //* React Element Rendering
// boot.render(heading);

// Functional Component

// const HeadingComponent = () => {
//   return <h1 id="heading">Namaste React Functional Component</h1>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<HeadingComponent />);

//? Component Composition :- put one component to another component is called component compositions.

// const Title = () => {
//   return <h1 id="title">Namaste React Title Functional Component</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {/* Component Composition */}
//       <Title />
//       <h1 id="heading">Namaste React HeadingComponent Functional Component</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<HeadingComponent />);

//! Cross Side Scripting => JSX Prevent us

// const title = <h1>Data</h1>;

// const data = api.getData("comes malicious data from attacker, send by API");

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       // Malicious Data
//       {title}
//       {data}// this curley braces to prevent us from Malicious Data. this is the
//       beauty of the JSX
//       <h1 id="heading">Namaste React HeadingComponent Functional Component</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<HeadingComponent />);

////////////////////////////////////////////////////////
//* We put title component three types inside HeadingComponent
// const Title = () => {
//   return <h1 id="title">Namaste React Title Functional Component</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {/* Component Composition */}
//       <Title />
//       <Title></Title>
//       {Title()}
//       {/* these are three same things */}
//       <h1 id="heading" style={{ color: "red" }}>
//         Namaste React HeadingComponent Functional Component
//       </h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<HeadingComponent />);

////////////////////////////////////////////////////////

//! React Fragment
// const Title = () => {
//   return (
//     //* this parent div to show in my console so we use React Fragment instead of using div tag as a JSX parent
//     // <div>
//     //   <div id="container-1">
//     //     <h1 id="title">Namaste React Title Functional Component</h1>
//     //   </div>
//     //   <div id="container-2"></div>
//     // </div>
//     //? For making JSX parent we use React Fragment which comes from importing React and importing React comes from "react" node_modules.
//     // <React.Fragment>
//     //   <div id="container-1">
//     //     <h1 id="title">Namaste React Title Functional Component</h1>
//     //   </div>
//     //   <div id="container-2"></div>
//     // </React.Fragment>
//     //? This is the Empety Tag (<></>). It's also react fragment.
//     <>
//       <div id="container-1">
//         <h1 id="title">Namaste React Title Functional Component</h1>
//       </div>
//       <div id="container-2"></div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<Title />);

////////////////////////////////////////////////////////
//! Can We Do Multiple Rendering inside one root ?
//* Yes we can do multiple rendering using array[]
//*React Element
// const heading = <h1 className="heading">Namste React Using JSX</h1>;
// // const boot = ReactDOM.createRoot(document.getElementById("boot"));

// //* React Element Rendering
// // boot.render(heading);

// //*Functional Component

// const HeadingComponent = () => {
//   return <h1 id="heading-2">Namaste React Functional Component</h1>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Multiple Rendering
// root.render([heading, <HeadingComponent />, heading, <HeadingComponent />]);

// const root1 = ReactDOM.createRoot(document.getElementById("boot"));

// //* Multiple Rendering
// root1.render(
//   <>
//     <h1>Boot</h1>
//     {heading}
//     {heading}
//     <HeadingComponent />
//     <HeadingComponent />
//     <h1>Boot</h1>
//   </>
// );
////////////////////////////////////////////////////////
const Title = () => (
  <>
    <h1>nesting react fragment - 01</h1>
    <React.Fragment>
      <h2>nesting react fragment - 02</h2>
      <React.Fragment>
        <h3>nesting react fragment - 01</h3>
        <h3>nesting react fragment - 02</h3>
        <h3>nesting react fragment - 03</h3>
      </React.Fragment>
    </React.Fragment>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
root.render(<Title />);
