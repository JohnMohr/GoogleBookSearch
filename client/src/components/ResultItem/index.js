import React, { Component } from 'react';

class ResultItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }

    componentDidMOunt = () => {
        this.setState({
            mounted: true
        })
        console.log("rocky mounted component")
    }

    getStyle = () => {
        if (this.state.text === "save") {
            this.setState({
                bgColor: "darkslategrey",
                color: "antiquewhite",
                text: "Saved"
            })
        } else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }
    }


onClickFunc = () => {
    this.props.saveGoogleBook(this.props)
    this.getStyle();
}
}

render () 
    const {book} = this.props
    return (
        
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={this.props.image} style={{maxwidth: "100px"}} alt="book"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                    <p clasName="card-text" >{this.props.description}</p>
                    <p style={{fontstyle: "italic"}}>Author(s): {this.props.authors}</p>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                    <button onClick={this.onClickFunc} style={{backgroundColor: this.state.bgColor, color: this.state.color}} className="btn">{this.state.text}</button>
                </div>
            </div>
       </div>
    )

    
export default ResultItem;