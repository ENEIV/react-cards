import React, { Component } from 'react'

export class InfoCard extends Component {
  render() {
     return (
      <div style={shellStyle}>
        <h1 style={{
          borderBottom: '2px solid lightblue',
          padding: '5px 10px',
        }}>{this.props.cardItem.title}</h1>
        <p style={{
          padding: '15px',
        }}>{this.props.cardItem.text}</p>
        <div>{this.props.cardItem.subcontent.map((content) =>
          <div style={{
              margin: '10px 20px',
              borderBottom: '1px solid lightgrey'
            }}>
            <h3>{content.title}</h3>
            <p style={{
              padding: '5px 10px'
            }}>{content.text}</p>
            <button>Explore ></button>
          </div>
          )}</div>
      </div>
    )
  }
}

const shellStyle = {
  color: 'white',
  margin: '15px',
  border: '2px solid #303030',
  borderRadius: '2px',
  backgroundColor: '#202020',
}

export default InfoCard