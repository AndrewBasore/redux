import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants'
import axios from 'axios';
import { convertAlbum, convertAlbums } from '../utils';
export const receiveAlbum = function(album){
  return {
    type: RECEIVE_ALBUM,
    selectedAlbum: album
  }
}

export const fetchAlbum = function(albumId) {
  return function(dispatch){
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => dispatch(receiveAlbum(convertAlbum(album))));
  }
}
