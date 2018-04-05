export function getData(){
	return function(dispatch){
		fetch('http://localhost:3000/api/v1/speedbumps_to_json')
		.then((res) => res.json())
		.then((json) => {
			dispatch({type: "GET_DATA", payload: json})
		})
	}
}