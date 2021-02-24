import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "darkslategrey", color: "antiquewhite", marginBottom: "10px"}}>Search</button>
    )
}