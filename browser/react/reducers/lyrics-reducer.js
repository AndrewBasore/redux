import {SET_LYRICS} from '../constants'


const initialState = {
	lyric: ''
}

export default function(prevState = initialState, action){

	switch(action.type){
		case SET_LYRICS:
			return Object.assign({}, prevState, {lyric: action.lyric})
		default:
			return prevState

	}

}


