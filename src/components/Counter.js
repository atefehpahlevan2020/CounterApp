import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    increment = () => {
        this.props.dispatch({
            type : 'INCREMENT'
        })
    }
    decrement = () => {
        this.props.dispatch({
            type : 'DECREMENT'
        })
    }
    render() {
        return (
            <div className="jumbotron" style={{textAlign:'center'}}>
                <h3 className="display-6">Counter</h3>
                <hr className="my-4" />
                <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                &nbsp;&nbsp;&nbsp;
                <span>{this.props.count}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement} type="button" className="btn btn-primary">-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count : state.count
    }
} 
export default connect(mapStateToProps)(Counter);
