import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {val: 0};
    }
    ToUpperChange = () => {
        this.setState((prevState)=>{
            return {val: ++prevState.val};
        });
        console.log(this.state.val);
    };
    ToLowerChange = () => {
        this.setState((prevState)=>{
            return {val: --prevState.val};
        });
        console.log(this.state.val);
    };
    render(){
        return(
            <div>
                <input type='button' value='-' onClick={this.ToLowerChange}/>
                <label>
                    {this.state.val}
                </label>
                <input type='button' value='+' onClick={this.ToUpperChange}/>
            </div>
        );
    }
}
export default Counter;