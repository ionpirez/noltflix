import React, { Component } from 'react'
class Action extends Component{
  render(){
    const type =  this.props.waring.type
    var icon = false
    var text = false
    switch (type) {
      case 'add':
        icon = <i className="fa fa-plus-circle" aria-hidden="true"></i>
        text = <h1>Your selection was succesfully add to favorites.</h1>
        break;
      case 'delete':
        icon = <i className="fa fa-trash" aria-hidden="true"></i>
        text = <h1>Your selection was succesfully delete from your favorites.</h1>
        break;
      default:
    }
    setTimeout(()=>{
      this.props.action(false)
    },1500)
    return(
      <div className="overlay">
        <div className="inner noBack animated jackInTheBox">
          {icon}
          {text}
        </div>
      </div>
    )
  }
}
export default Action
