import React from "react";

const Shimmer = () => {
    return (
        <>
        <div className="shimmer-container">
            {[...Array(8)].map((_,index) => (
                <div className="shimmer-card" key={index}>
                    <img/>
                    <h3 className="shimmer-card-h3"></h3>
                    <p className="shimmer-card-p"></p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Shimmer;