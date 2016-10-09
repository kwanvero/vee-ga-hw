import React from 'react';
// import ReactDOM from 'react-dom';

class Ex07 extends React.Component {
  constructor(){
    super()
    this.state = {
      txt: "this is the state txt",
      cat: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}
//Refs wont work with stateless function components
const Widget = (props) => {
  return (
    <div>
      <input type = "text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}

export default Ex07
