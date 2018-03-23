import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import data from './data.json';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const speedBumpList = data.map((list,i) => {
      return (
        <Carousel.Item key={i}>
          <img width={'100%'} height={'100%'} alt="900x500" src={list.img} />
          <div className="date">
            <h4>{list.date}</h4>
          </div>
          <Carousel.Caption>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <Button bsStyle="primary" href={list.link} target="_parent" style={{ marginBottom: 30 }}>
              Try It Now
				  </Button>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <Carousel>
       {speedBumpList}
      </Carousel>
    );
  }
}

export default App;
