import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import speedbump from './speedbump.png'
import { connect } from 'react-redux'
import { getData } from './actions/data'

class App extends Component {

  componentDidMount = () => {
    this.props.getData()
  }

  removeTags = (string, array) => {
  return array ? string.split("<").filter(function(val){ return f(array, val); }).map(function(val){ return f(array, val); }).join("") : string.split("<").map(function(d){ return d.split(">").pop(); }).join("");
    function f(array, value){
      return array.map(function(d){ return value.includes(d + ">"); }).indexOf(true) !== -1 ? "<" + value : value.split(">")[1];
    }
}


  render() {

    const speedBumpList = this.props.data.map((list,i) => {
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
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.data.data
  }
}

function mapDispatchToProps(dispatch){
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
