import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import data from './data.json';
import SpeedbumpData from './SpeedbumpData.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        realdata: []
    }
  }

  myCallback = (dataFromChild) => {
    if (this.state.realdata !== dataFromChild) {
      this.setState({
      realdata: dataFromChild
      })
    }

  }

  render() {
    console.log("realdata", this.state.realdata)

    const speedBumpList = this.state.realdata.map((list,i) => {
      return (
        <Carousel.Item key={i}>
          <img width={'100%'} height={'100%'} alt="900x500" src="https://images.pexels.com/photos/775416/pexels-photo-775416.jpeg" />
          <div className="date">
            <h4>{list.title}</h4>
          </div>
          <Carousel.Caption>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <Button bsStyle="primary" href={"https://app.quizzify.com/speedbumps/" + list.slug} target="_parent" style={{ marginBottom: 30 }}>
              Read More
				  </Button>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <div>
      <Carousel>
       {speedBumpList}
      </Carousel>
      <SpeedbumpData callbackFromParent={this.myCallback} />
      </div>
    );
  }
}

export default App;
