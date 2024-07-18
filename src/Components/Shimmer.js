import React from "react";

const Shimmer = () => {
    return (
        <>
        <div className="shimmer-container">
            {[...Array(8)].map((_,index) => (
                <div className="shimmer-card" key={index}>
                    <img alt=""/>
                    <p className="shimmer-card-h3"></p>
                    <p className="shimmer-card-p"></p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Shimmer;