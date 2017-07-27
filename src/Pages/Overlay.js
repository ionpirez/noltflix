import React, { Component } from 'react'
class Overlay extends Component{
  render(){
    return(
      <div className="overlay">
        <div className="inner animated jackInTheBox">
          <p>sorry, this is a demo :( </p>
            <button onClick={this.props.close}>Close</button>
        </div>
      </div>
    )
  }
}
export default Overlay
