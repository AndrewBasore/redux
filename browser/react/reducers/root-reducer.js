import {SET_LYRICS} from '../constants'


const initialState = {
	lyric: ''
}

const reducer = function(prevState = initialState, action){

	switch(action.type){
		case SET_LYRICS:
			return Object.assign({}, prevState, {lyric: action.lyric})
		default:
			return prevState

	}

}

export default reducer;
