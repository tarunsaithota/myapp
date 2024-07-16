import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AboutUS from "./Pages/AboutUS";
import ContactUS from "./Pages/ContactUS";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantMenu from "./Pages/RestaurantMenu";

const App = () => {
  return (
    <>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/aboutus',
        element: <AboutUS />
      },
      {
        path: '/contactus',
        element: <ContactUS />
      },
      {
        path: '/restaurant/:resID',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter} />)

export default App;
