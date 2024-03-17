import React from "react";
import ReactDOM from "react-dom/client";
/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "helloworld from react inside the dom !"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

 */
const heading1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "spring heaven"),
    React.createElement("h2", {}, "i am h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "parcell is a beast"),
    React.createElement("h2", {}, "i am h2"),
  ]),
]);
console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
