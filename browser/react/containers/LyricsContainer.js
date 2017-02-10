import React, {Component} from 'react';
import Lyrics from '../components/Lyrics.js';
import store from '../store';
import {fetchLyrics} from '../action-creators/lyrics.js';
import axios from 'axios';


export default class LyricsContainer extends Component{
  constructor(){
    super();
    this.state = Object.assign({}, store.getState(), {artistQuery: "", songQuery:""});
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist (name){
    this.setState({artistQuery: name});
  }

  setSong (name){
    this.setState({songQuery: name});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.artistQuery && this.state.songQuery)
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));

  }

  render(){
    const propsToSend = {
      artistQuery: this.state.artistQuery,
      songQuery: this.state.songQuery,
      lyrics: this.state.lyric,
      setArtist: this.setArtist,
      setSong: this.setSong,
      handleSubmit: this.handleSubmit
      }
    return <Lyrics {...propsToSend} />
  }

}
