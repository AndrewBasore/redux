import {START_PLAYING, STOP_PLAYING} from '../constants'

export const startPlaying = function(){
  return {
    type: START_PLAYING,
    isPlaying: true
  }
}

export const stopPlaying = function(){
  return {
    type: START_PLAYING,
    isPlaying: false
  }
}
