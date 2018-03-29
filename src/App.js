import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import data from './data.json';
import SpeedbumpData from './SpeedbumpData.js'
import './App.css';
import speedbump from './speedbump.png'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        speedbumpList: []
    }
  }

  myCallback = (dataFromChild) => {
    if (this.state.speedbumpList !== dataFromChild) {
      this.setState({
      speedbumpList: dataFromChild
      })
    }

  }

  removeTags = (string, array) => {
  return array ? string.split("<").filter(function(val){ return f(array, val); }).map(function(val){ return f(array, val); }).join("") : string.split("<").map(function(d){ return d.split(">").pop(); }).join("");
    function f(array, value){
      return array.map(function(d){ return value.includes(d + ">"); }).indexOf(true) != -1 ? "<" + value : value.split(">")[1];
    }
}


  render() {
    console.log("speedbumpList", this.state.speedbumpList[0])
    if (this.state.speedbumpList[0]) {
    console.log("done", this.removeTags(this.state.speedbumpList[0].speedbump_sections[0].body));

    }

    const speedBumpList = this.state.speedbumpList.map((list,i) => {
      return (
        <Carousel.Item key={i}>
          <img width={'100%'} height={'80%'} alt="900x500" src={speedbump} />
          <div className="title">
            <h4>{list.title}</h4>
          </div>
          <Carousel.Caption className="carousel-caption">
            <p className="caption">{this.removeTags(list.speedbump_sections[0].body.split(" ").splice(0,20).join(" ")) + "..."}</p>
            <Button bsStyle="primary" href={"https://app.quizzify.com/speedbumps/" + list.slug} target="_blank" style={{ marginBottom: 30 }}>
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
