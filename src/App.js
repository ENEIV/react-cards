import React, { Component } from 'react';
import Header from './components/Header'
import Cards from './components/Cards'
import './App.css';

class App extends Component {
/*
   content = {
    base: [
      {
        id: 1,
        title: 'Brief',
        text: 'Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design/Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline.'
      },
      {
        id:2,
        title: 'Bio',
        text: 'Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design/Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline.'
      }
    ],
    info: [
      {
        id: 1,
        title: 'Services',
        text: 'These systems serve as a foundation for clients and their businesses. Creating an ecosystem that gives a compelling direction towards their desired outcome and a framework that scales and growes with them.',
        subcontent: [
          {
            title: 'Brand Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          },
          {
            title: 'Digital Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          },
          {
            title: 'Print Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          }
        ],
      }
    ]
   }
*/

  state = {
    cards: [
      {
      id: 1,
      type: 'Base',
      title: 'Brief',
      text: 'Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design/Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline.'
      },
      {
      id: 2,
      type: 'Base',
      title: 'Bio',
      text: 'Enudi N. Enuenwosu is a freelance/contract for hire based in Chicago, IL (the best city ever). He specializes in the creation and implementation of Design/Development Systems to help companies scale efficiently. His most dangerous skillset, his unrelenting pursuit of excellence through knowledge and discipline.'
      },
      {
        id: 3,
        type: 'Info',
        title: 'Services',
        text: 'These systems serve as a foundation for clients and their businesses. Creating an ecosystem that gives a compelling direction towards their desired outcome and a framework that scales and growes with them.',
        subcontent: [
          {
            title: 'Brand Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          },
          {
            title: 'Digital Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          },
          {
            title: 'Print Systems',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          },
          {
            title: 'Sprint / Strategy',
            text: 'Brand systems provide a cohesive ecosystem. For users to implement a consistent brand language and motif for all material and digital needs.',
          }
        ]
      },
      {
      id: 4,
      type: 'Icon',
      title: 'Current Dev loadout',
      images: [
          {
            link: '/static/media/illustrator.8670d30b.svg',
            alt: 'cool-stuff1'
          },
          {
            link: '',
            alt: 'cool-stuff2'
          },
          {
            link: '"link"',
            alt: 'cool-stuff3'
          },
          {
            link: '"link"',
            alt: 'cool-stuff4'
          },
          {
            link: '"link"',
            alt: 'cool-stuff5'
          }
       ]
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
