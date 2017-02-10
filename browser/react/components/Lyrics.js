import React from 'react';

export default function Lyrics(props) {
  //props lyrics, artistQuery, songQuery, setArtist, setSong, handleSubmit
  const setArtist = props.setArtist;
  const setSong = props.setSong;
  const handleSubmit = props.handleSubmit;
  const lyrics = props.lyrics;
  const artistQuery = props.artistQuery;
  const songQuery = props.songQuery;

  const artistChange = e => {
    setArtist(e.target.value);
  };

  const songChange = e => {
    setSong(e.target.value)
  }

  return (
     <div className="well">
      <form className="form-horizontal" noValidate name="lyrics-select" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add to Playlist</legend>
          <div className="form-group">
            <label htmlFor="artist" className="col-xs-2 control-label">Artist</label>
            <input
              onChange={artistChange}
              value={artistQuery}
              type="text"
              className='form-control'
              placeholder="Enter artist name"
              name="artist"
            />
            <label htmlFor="song" className="col-xs-2 control-label">Song</label>
            <input
              onChange={songChange}
              value={songQuery}
              type="text"
              className='form-control'
              placeholder="Enter song name"
              name="song"
            />
            <hr/>
            <pre>{lyrics || 'Search above!'}</pre>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-default">Find Lyrics</button>
            </div>
          </div>
        </fieldset>
      </form>

    </div>
  )
}
