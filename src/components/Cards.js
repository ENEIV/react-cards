import React, { Component } from 'react'
import BaseCard from './BaseCard'
import InfoCard from './InfoCard'
import IconCard from './IconCard'

class Cards extends Component {


  render() {
    return this.props.cards.map((card) => {
      switch ( card.type ) {
        case 'Info':
          return <InfoCard key={card.id} cardItem={card} />
        case 'Icon':
          return <IconCard key={card.id} cardItem={card} />
        default:
          return <BaseCard key={card.id} cardItem={card} />
      }
    });
  }
}


export default Cards
