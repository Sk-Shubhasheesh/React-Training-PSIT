import { Component } from "react";

class ClassBasedComponent extends Component{
    // State
    state = {
        showText : false
    }

    handleClick = ()=>{
        console.log("button clicked");
        
    }

    render(){
        // access the state
        console.log(this.state);
        
        return <div>
            <h3>Class Based component</h3>
            <button onClick={this.handleClick}>Toggle Text</button>
        </div>
    }
}

export default ClassBasedComponent;