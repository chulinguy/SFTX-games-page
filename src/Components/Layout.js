import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import Video from './Video';
import data from '../data.json';

const doc = doc || document;

class Layout extends Component{
  render(){
    return (
      <Grid fluid={true}>
        <Row>
        {data.map(video => (
          <Col 
            xs={6} 
            key={video.url.slice(video.url.indexOf("=") + 1)}
            className="video-container"
          >
            <p className="video-title">{video.name}</p>
            <p className="video-type">Type: {video.type} &nbsp; &nbsp;<span className="video-pl">Player Limit: {video.playerLimit}</span></p>
            <Video 
              videoId={video.url.slice(video.url.indexOf("=") + 1)}
              width={(doc.body.scrollWidth)/2 - 20}
            />
          </Col>
        ))}
        </Row>
      </Grid>
    )
  }
};

export default Layout;