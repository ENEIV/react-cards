import React, { Component } from 'react'

class Cards extends Component {
 
  render() {
    return this.props.cards.map((card) => {
      if ( card.type == 'Base' ) {
        return <h1>Its the Base type, broowh</h1>
      } else {
        return <h1>Its the Info type, broowh</h1>
      }
    });
  }
}

export default Cards
