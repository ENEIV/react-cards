import React, { Component } from 'react'

export class BaseCard extends Component {
  render() {
    return (
      <div style={shellStyle}>
        <h1 style={{
          borderBottom: '2px solid crimson',
          padding: '10px',
        }}>{this.props.cardItem.title}</h1>
        <p style={{
          padding: '15px',
        }}>{this.props.cardItem.text}</p> 
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

export default BaseCard
