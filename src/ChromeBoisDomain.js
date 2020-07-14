import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    //this way wasn't passing tests but works
    // drawChromeBoiAtCoords(event.screenX, event.screenY)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  handleClick = () => {
    toggleCycling()
  }

  handleKeyPress = (e) => {
    if (e.key === "a") {
      resize("+")
    }
    else {
      resize("-")
    }
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
