import React from 'react';
import ReactDOM from 'react-dom';

class Ex16 extends React.Component {
  constructor(){
    super()
    this.state = {data:[
      {id: 1, name: "Bruce Wayne"},
      {id: 2, name: "Luke Cage"},
      {id: 3, name: "Peter Parker"},
      {id: 4, name: "Charles Francis Xavier"},
      {id: 5, name: "Edward Nygma"},
      {id: 6, name: "Reed Richard"},
      {id: 7, name: "Loki Laufeyson"},
      {id: 8, name: "Matthew Michael Murdock"},
      {id: 9, name: "Steven Rogers"},
      {id: 10, name: "Barbara Gordon"},
      {id: 11, name: "Robert Bruce Banner"},
      {id: 12, name: "Barry Allen"},
      {id: 13, name: "Harvey Dent"},
      {id: 14, name: "Garfield Logan"},
      {id: 15, name: "Dick Grayson"},
      {id: 16, name: "Jason Todd"},
      {id: 17, name: "Tim Drake"},
      {id: 18, name: "Stephanie Brown"}
    ]}
  }

  render() {
    let rows = this.state.data.map (person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default Ex16
