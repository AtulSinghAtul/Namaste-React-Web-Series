# Episode - 03

Instead of using `npx parcel index.html`, first go to package.json and change the scripts object property to using normal start script.

```
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }
```

So now we can use `start script`,

```
npm run start
or
npm start
```

## What is JSX?

JSX is a javascript syntax which is easier to create react element.

**Note:** React is different and JSX is different. We can write react without JSX also but JSX make developer life easier to code.
**Note:** JSX is HTML-like syntax or XML-like.
**Note:** JSX is not HTML inside js.

**Note:** JSX (transpiled-Parcel-Babel before it reaches the JS Engine). transpiled means this code converetd to the code that browser can understand and browser only understand EcmaScript.

## How core react work?

- React.createElement => ReactElement-Js Object => HTMLElement(render)

## How JSX work?

- JSX => Babel transpiles it to React.createElement => ReactElement-Js Object => HTMLElement(render)

**Note:** In JSX we write attribute in camel case.

```
// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

<!--! React Component -->

- Class Based Component - OLD
- Functional Component - NEW

## Functional Component

**Functional Component is just normal js function and
it's just return react element / JSX.**

## Component Composition

Put one component function to inside another function called component composition.

```
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
//! React.createElement => ReactElement= JS Object => render into HTML element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading);

//* JSX Code
//! JSX Code => React.createElement => ReactElement = JS Object => render into HTML element
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

// ? Component Composition :- put one component to another component is called component compositions.

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
//       {data}//^ this curley braces to prevent us from Malicious Data. this is the
//       beauty of the JSX
//       <h1 id="heading">Namaste React HeadingComponent Functional Component</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //* Functional Rendering
// root.render(<HeadingComponent />);

////////////////////////////////////////////////////////

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

 //! Functional Rendering
root.render(<Title />);
```

## Cross Site Scripting?

- JSX me curly {} braces k andar ham jo bhi likhate hain
  ye jsx usko senitize kar deta hai. man lo ham koi api se deta le kar aa rahe hain aur su data me virus hai to wo hamare broser ko control kar sakta hai, token ko access kar sakta hai, local storage aadi ko access kar sakta hai.

  **Note:**

  ```
  const Title = ()=>( <h3 className="head" tabIndex="5">nesting react fragment - 01</h3>)

   const HeadingComponent = ()=>(
  <div id="container">
  {Title()}
  <Title/>
  <Title><Title/>
   <h3 className="head" tabIndex="5">nesting react
       fragment - 01</h3>
   </div> )
  ```

  {Title()}
  <Title/>
  <Title><Title/>
  - these three are same.
