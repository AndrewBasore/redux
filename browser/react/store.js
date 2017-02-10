import {createStore, applyMiddleware, combineReducers} from 'redux'
import lyricsReducer from './reducers/lyrics-reducer.js'
import playerReducer from './reducers/player-reducer.js'
import albumReducer from './reducers/album-reducer.js'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  album: albumReducer
}), applyMiddleware(createLogger(), thunkMiddleware));


