import React , {useState} from 'react';

class IncrementNumber extends React.Component {
constructor(props){
    super(props);
    this.state = {
    count: 0
    };
}
    render(){
        return (
            <div className="contain">
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrementer<span className = "buttoncolor"> - </span></button>
                <button onClick={() => this.setState({count: this.state.count + 1})}><span className = "buttoncolor"> + </span> Incrementer</button>
              </div>
        );
    }
}
export default IncrementNumber;


