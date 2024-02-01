import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";

const About = lazy(() => import("./components/About"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = function App() {
  // console.log(<Body />);

  return (
    <div>
      <Header />
      <Outlet />
      {/* if "/"  */}
      {/* <Body /> */}
      {/* if "/about"  */}
      {/* <About /> */}
      {/* if "/contact"  */}
      {/* <Contact /> */}
    </div>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
