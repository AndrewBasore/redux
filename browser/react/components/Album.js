import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {

  componentDidMount () {
    const selectAlbum = this.props.selectAlbum;
    const albumId = this.props.routeParams.albumId;

    selectAlbum(albumId);
  }

  render () {
    const album = this.props.album.selectedAlbum;
    const currentSong = this.props.player.currentSong;
    const isPlaying = this.props.player.isPlaying;
    const toggleOne = this.props.toggleOne;

    console.log("This is the  props of the album we're rendinger! ", this.props);

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}

export default Album;
