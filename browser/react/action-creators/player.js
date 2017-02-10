import {START_PLAYING, STOP_PLAYING,SET_CURRENT_SONG, SET_LIST, SET_PROGRESS} from '../constants'
import AUDIO from '../audio';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

export const startPlaying = function(){
  return {
    type: START_PLAYING
  }
}

export const play = function(){
	return function(dispatch){
		AUDIO.play();
		dispatch(startPlaying());
	};
}

export const stopPlaying = function(){
  return {
    type: STOP_PLAYING
  }
}

export const pause = function(){
	return function(dispatch){
		AUDIO.pause();
		dispatch(stopPlaying());
	}

}

export const setCurrentSong = function(song){
	return {
		type: SET_CURRENT_SONG,
		currentSong: song
	}
}

export const load = function(currentSong, currentSongList){
	return function(dispatch){
		AUDIO.src = currentSong.audioUrl;
		AUDIO.load();
		dispatch(setCurrentSong(currentSong));
		dispatch(setList(currentSongList));
	}
}

export const setList = function(list){
	return {
		type: SET_LIST,
		currentSongList: list
	}
}

export const setProgress = function(progress){
	return {
		type: SET_PROGRESS,
		progress: progress
	}
}

export const startSong = function(song, list){
	return function(dispatch){
		dispatch(pause());
		dispatch(load(song,list));
		dispatch(play());
	}
}

export const toggleOne = function(selectedSong, selectedSongList){
	return function(dispatch, getState){
		const {player} = getState();
		if(selectedSong.id !== player.currentSong.id){
			dispatch(startSong(selectedSong, selectedSongList));
		}
		else dispatch(toggle());
	}
}

export const toggle = function(){
	return function(dispatch, getState){
		const { player } = getState();
		if(player.isPlaying) dispatch(pause());
		else dispatch(play());
	}
}

export const next = function(){
	return function(dispatch, getState){
		const {player} = getState();
		dispatch(startSong(...skip(1, player)));
	}
}

export const prev = function(){
	return function(dispatch, getState){
		const {player} = getState();
		dispatch(startSong(...skip(-1, player)));
	}
}
