import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";

// const About = lazy(() => import("./components/About"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = function App() {
  // console.log(<Body />);
  const [userName, setUserName] = useState();

  //let's assume that We doing Authentication

  useEffect(() => {
    // make an api call and send userName and Password
    const data = {
      name: "Akshay Saini",
    };

    setUserName(data.name);
  }, []);

  return (
    //  Come Default Value
    <userContext.Provider value={{ userLoggedIn: userName, setUserName }}>
      {/* //! Akshay Saini */}
      <div>
        {/* <userContext.Provider value={{ userLoggedIn: "Elon Musk" }}> */}
        {/* //! Elon Musk */}
        <Header />
        {/* </userContext.Provider> */}
        <Outlet />
        {/* if "/"  */}
        {/* <Body /> */}
        {/* if "/about"  */}
        {/* <About /> */}
        {/* if "/contact"  */}
        {/* <Contact /> */}
      </div>
    </userContext.Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
console.log(appRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
