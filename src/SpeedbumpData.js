import React from 'react';

class SpeedbumpData extends React.Component {
	constructor(){
		super();
		this.state = {
			speedbumpData: [],
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/speedbumps_to_json')
		.then(results => results.json())
		.then(json => this.setState({ 
			speedbumpData: json 
		}))
	}

	render(){
		console.log("console from render", this.state.speedbumpData)
		return(
			<div>
				{this.props.callbackFromParent(this.state.speedbumpData)}
			</div>
			)
	}
}

export default SpeedbumpData