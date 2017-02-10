import {createStore, applyMiddleware, combineReducers} from 'redux'
import lyricsReducer from './reducers/lyrics-reducer.js'
import playerReducer from './reducers/player-reducer.js'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
}), applyMiddleware(createLogger(), thunkMiddleware));


