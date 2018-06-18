import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {

  onReady(event) {
    console.log("Ready"); // eslint-disable-line
  }

  render() {
    const opts = {
      width: this.props.width, 
      height: Math.ceil(this.props.width / 16 * 9)
    }
    return (
      <YouTube 
        videoId={this.props.videoId} 
        onReady={this.onReady} 
        opts={opts}
      />
    );
  }
}

export default Video;