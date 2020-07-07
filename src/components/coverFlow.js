import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// no reactDOM renders anymore, this is a react component
import Coverflow from 'react-coverflow';

/**
 * Credit for most of this file goes to the creators of react-coverflow
 * I edited parts of this to make it an actual importable react class,
 *  as well as sanity changes like fixing the spelling of "random" and 
 *  other assets, labels and variables 
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
          height={480}
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
          <img src={require('../album_art_test/01.jpg')} alt='Album one' />
          <img src={require('../album_art_test/02.jpg')} alt='Album two' />
          <img src={require('../album_art_test/03.jpg')} alt='Album three'/>
          <img src={require('../album_art_test/04.jpg')} alt='Album four' />
          <img src={require('../album_art_test/05.jpg')} alt='Album five' />
          <img src={require('../album_art_test/06.jpg')} alt='Album six' />
          <img src={require('../album_art_test/07.jpg')} alt='Album seven' />
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