import React from 'react';
// import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor(){
    super()
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMounth(){//life cycle method
    console.log('will mount');
  }
  render(){
    return <InnerComponent
    update={this.update}
    {...this.state}
    {...this.props} />
  }
  componentDidMounth(){//life cycle method
    console.log('mounted');
  }
}

const Button = (props) => <button
                          onClick={props.update}>
                          {props.txt} - {props.val}
                          </button>

const Label = (props) => <label
                          onMouseMove={props.update}>
                          {props.txt} - {props.val}
                          </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class Ex14 extends React.Component {
  constructor(){
    super()
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMounth(){//life cycle method
    console.log('will mount');
  }
  render(){
    return (
      <div>
        <LabelMixed txt='Label' />
        <ButtonMixed txt='Button' />
      </div>)
  }
  componentDidMounth(){//life cycle method
    console.log('mounted');
  }
}

// Ex14.defaultProps = { txt: 'button' } // init prop

export default Ex14
