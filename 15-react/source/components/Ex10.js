import React from 'react';
// import ReactDOM from 'react-dom';

class Ex10 extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default Ex10
