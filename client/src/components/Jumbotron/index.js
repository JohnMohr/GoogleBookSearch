import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 text-center titleText">Google Book Shelf</h1>
                <br/>
                <h2 className="text-center titleText">Search for books and add them to the Shelf.</h2>
            </div>
        </div>
    )
}

export default Jumbotron;