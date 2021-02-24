import React from "react";

export function container({fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


export function Row({ fluid, children}) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children}) {
    return (
        <div 
         className={size
            .split("")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}

        </div>
    );
}