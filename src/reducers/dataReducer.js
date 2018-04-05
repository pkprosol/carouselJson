function dataReducer(state = {data: []}, action){
	switch(action.type){
		case "GET_DATA":
			return Object.assign({}, state, {data: action.payload})
		default:
		return state
	}
}

export default dataReducer