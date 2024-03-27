/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
  </div>
</div>;
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//    React.createElement(
//     "div",
//      {id:"child"},
//    React.createElement("h1", {},"I am h1 tag")

//      )
// );
//*************************** */

/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
     <h2>I am h2 tag</h2>
  </div>
</div>;
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//    React.createElement(
//     "div",
//      {id:"child"},[
//    React.createElement("h1", {},"I am h1 tag"),
//    React.createElement("h2", {},"I am h2 tag")
//      ])
// );

//********************************************** */
/*
<div id="parent1">
  <div id="child1">
    <h1>I am h1 tag</h1>
     <h2>I am h2 tag</h2>
  </div>
<div id="child2">
    <h1>I am h1 tag</h1>
     <h2>I am h2 tag</h2>
  </div>

</div>

*/

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "this is namaste react🚀 "),
//     React.createElement("h2", {}, "Atif  tag"),
//   ]),
//     React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am  tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import React from "react";
// import ReactDOM from "react-dom/client";



// //JSX  - HTML -like or XML -like Syntax
// //JSX (code is transpiled before it reaches the JS Engine)- PARCEL-BABEL


// //JSX =>Bable transpile it to React.createElement => ReactElement(object) => HTMLElement(render)

// //transpile=>this code that coverted that code Browser understand that react Understand

// const jsxHeding =(<h1 id ="heading" className="head" tabIndex="1">
//     namste react using JSX🚀
//     </h1>);

// console.log(jsxHeding);

// //React.createElement => ReactElement(object) => HTMLElement(render)
// const Heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React🚀 "
//     );

// console.log(Heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeding);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//React Element
// const heading = ()=> (
//   <h1 className="head" tabIndex="5">
//     namste react using JSX🚀
//   </h1>
// );
//React Component

//class Based component - old way

//function based component - new way of writing code
// const fn = () => true;

// const fn1 = () => {
//   return true;
// };

//**********Component composition**************

// const HeadingComponent1 = () => {
//   return <h1 className="heading">namaste react functional component1</h1>;
// };

// const HeadingComponent = () => (
//   <div id="container">
//     <HeadingComponent1/>
//     <h1 className="heading">namaste react functional component2</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const Title =()=> (
//     <h1 className="head">
//       Namste react by 🚀
//     </h1>
//   );
  
  
  
//   const HeadingComponent = () => (
//     <div id="container">
//     {Title()}
//       <h1 className="heading">namaste react functional component</h1>
//     </div>
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(<HeadingComponent/>);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// const Title =()=> (
//     <h1 className="head">
//       Namste react by 🚀
//     </h1>
//   );
  
  
  
//   const HeadingComponent = () => (
//     <div id="container">
//     {Title()}
//       <h1 className="heading">namaste react functional component</h1>
//     </div>
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(<HeadingComponent/>);