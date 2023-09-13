import React from "react";

const App = () => {
  // header
  // - logo
  // -links
  // body
  // - restaurent container
  // - restaurent card
  // footer

  const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            src="https://designlogo6.files.wordpress.com/2023/03/healthy-food-logo-design-inspiration-8.jpg?w=500"
            alt=""
          />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
