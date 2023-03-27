//1:-->// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     class: "heading",
//   },
//   "Hello World From React!"
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//2:-->// Ctreate single Nested Element inside the parent div

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "i'm h1 tag")
//   )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// //3:-->// Ctreate Nested Siblings Element inside the parent div

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i'm h1 tag"),
//     React.createElement("h2", {}, "i'm h2 tag"),
//   ])
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//4:-->// Ctreate Nested Siblings Child Element inside the parent div

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "i'm h1 tag"),
    React.createElement("h2", {}, "i'm h2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "i'm h1 tag"),
    React.createElement("h2", {}, "i'm h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
