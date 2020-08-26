import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import urlGenerator from "./downloader";

/**
 * Credit for most of this file goes to the creators of react-coverflow
 * I edited parts of this to make it an actual importable react class,
 *   as well as sanity changes like fixing the spelling of "random" and 
 *   other assets, labels and variables 
 */

class CoverFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        {/* <button onClick={this._handleClick.bind(this)}>Random</button> */}
        <Coverflow
          width={960}
          height={700}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            // onClick={() => fn()}
            // onClick should start playing the track, possibly
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            
          </div>
          <img src={urlGenerator("music/air/cover.jpg")} alt='Album art - Air' />
          <img src={urlGenerator("music/cb/cover.jpg")} alt='Album art - The Seatbelts' />
          <img src={urlGenerator("music/fred/cover.jpg")} alt='Album art - Fred Hersch' />
          <img src={urlGenerator("music/greg/cover.jpg")} alt='Album art - Gregory Privat' />
          <img src={urlGenerator("music/jim/cover.jpg")} alt='Album art - Jim Lang' />
          <img src={urlGenerator("music/kat/cover.jpg")} alt='Album art - Kat Epple' />
          <img src={urlGenerator("music/max/cover.jpg")} alt='Album art - Maxis' />
          <img src={urlGenerator("music/mic/cover.jpg")} alt='Album art - Michael Naura' />
          <img src={urlGenerator("music/mod/cover.jpg")} alt='Album art - Modern Jazz Quartet' />
          <img src={urlGenerator("music/ryo/cover.jpg")} alt='Album art - Ryo Fukui' />
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

export default CoverFlow;