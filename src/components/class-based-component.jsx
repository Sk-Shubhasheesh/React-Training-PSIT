import { Component } from "react";

class ClassBasedComponent extends Component{
    // State  
    state = {
        showText : false
    }

    handleClick = ()=>{
        console.log("button clicked");

        this.setState({
            showText: !this.state.showText
        })
        
    }

    render(){
        // access the state
        console.log(this.state);
        
        return (<div>
            {
                this.state.showText ?  <h3>Class Based component</h3> : null
            }
           
            <button onClick={this.handleClick}>Toggle Text</button>
        </div>)
    }
}

export default ClassBasedComponent;