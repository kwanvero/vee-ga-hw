import React from 'react';
import ReactDOM from 'react-dom';

class Ex05 extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

// Pass through a single value / method
Ex05.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

Ex05.defaultProps = {
  txt: "this is the default type"
}

// Props a.k.a. properties
ReactDOM.render(
  // <Ex05 cat={5} txt="this is the props value" />,
  <Ex05 cat={5}/>,
  document.querySelector('#app')
)

export default Ex05
