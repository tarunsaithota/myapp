import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ContactUS from "./Pages/ContactUS";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantMenu from "./Pages/RestaurantMenu";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";

const AboutUS = React.lazy(()=>import('./Pages/AboutUS'));

const App = () => {
  return (
    <>
    <Provider store={AppStore}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
      </Provider>
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
        element: <Suspense fallback={<h1>🔃Loading....</h1>}><AboutUS /></Suspense>
      },
      {
        path: '/contactus',
        element: <ContactUS />
      },
      {
        path: '/restaurant/:resID',
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter} />)

export default App;
