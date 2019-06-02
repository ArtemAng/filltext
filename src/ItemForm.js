import React from 'react'

class ItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={val: '', val1: ''};
    }
    GetContent = (evt)=>{
        this.setState({val1:evt.target.value});
    };
    FillTextarea = (evt)=> {
        this.setState({val: this.state.val1}) ;
    };
    render() {
        return(
            <div>
                <input type = 'textarea' value={this.state.val}/>
                <input type = 'textarea' onChange={this.GetContent}/>
                <input type = 'button' value = 'Click' onClick={this.FillTextarea}/>
            </div>
        );
    }


}
export default ItemForm;