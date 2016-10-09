import React from 'react';
import ReactDOM from 'react-dom';
// Removing component from DOM, is called mounting and unmounting

class Ex11 extends React.Component {
  constructor() {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({ val: this.state.val + 1 })
  }
  componentWillMount(){ //get called once
    console.log('mounting!');
  }
  render(){
    console.log('rendering!');
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log('mounted');
  }
  componentWillUnmount(){
    console.log('bye!');
  }
}

class Wrapper extends React.Component {
  constructor(){
    super()
  }
  mount() {
    ReactDOM.render(<Ex11 />, document.querySelector('#a'))
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
