import React from 'react';
import ReactDOM from 'react-dom';
// Removing component from DOM, is called mounting and unmounting

class Ex12 extends React.Component {
  constructor() {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({ val: this.state.val + 1 })
  }
  componentWillMount(){ //We don't have access to dom, but we can access state and prompts
    this.setState({m: 2}) // change state before componenet did mounted
  }
  render(){
    console.log('rendering!');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }
  componentDidMount(){
    this.inc = setInterval(this.update, 500) //this will continue to set state even after unmounting
    // console.log(ReactDOM.findDOMNode(this));
  }
  componentWillUnmount(){
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  constructor(){
    super()
  }
  mount() {
    ReactDOM.render(<Ex12 />, document.querySelector('#a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.querySelector('#a'))
  }
  render() {
    return (
      <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>UnMount</button>
          <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
