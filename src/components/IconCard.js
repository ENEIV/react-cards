import React, { Component } from 'react'
//import illustrator from './illustrator/illustrator.svg'

export class IconCard extends Component {
  render() {
     return (
      <div style={shellStyle}>
        <h1 style={{
          borderBottom: '2px solid limegreen',
          padding: '5px 10px',
        }}>
        {this.props.cardItem.title}
        </h1>
        <p style={{
          padding: '15px',
        }}>
        {this.props.cardItem.text}
        </p>
        <div>{this.props.cardItem.images.map((image) =>
            <img style={{
              width: '50px',
              
            }} src={image.link} alt={image.alt}/>
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

export default IconCard