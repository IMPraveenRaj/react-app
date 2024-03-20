import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    This is JSX heading
  </h1>
);

//React Component
//class based component  : class based react component are old way of writing code
//fucntional react component : new way of writing code

const HeadingComponent = () => {
  return <h1>Spring Heaven Functional Component</h1>;
};

const Title = () => <h1>Spring Heaven Solutions Pvt Ltd</h1>;

const HeadingComponent1 = () => (
  <div id="container">
    {jsxHeading}
    <h1 className="heading">Spring heaven Functional Component</h1>
  </div>
);

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
