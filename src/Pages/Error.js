import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Components/Header";

const Error = () => {
    const err = useRouteError();
    return(
        <>
        <Header/>
        <center>
        <div>
            <h1>Oopps.....</h1>
            <h2>{err.status}: {err.statusText}</h2>
            <h2>Something went worng..please check the URL to redirect to correct page</h2>
        </div>
        </center>
        </>
    )
}

export default Error;