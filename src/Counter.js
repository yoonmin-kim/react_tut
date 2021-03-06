import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타남'));
    return(
        <div></div>
    );
};

class Counter extends Component {
    state = {
        number : 0,
        error : false
    }    
    
    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState){
        //5의 배수라면 리랜더링 하지 않음
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        //shouldComponentUpdate에서 true일 경우만 호출
        console.log('componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState){

        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) return (<h1>에러발생!</h1>);
        return (
            <div>
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                {this.state.number === 4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;