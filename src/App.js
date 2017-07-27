import React, { Component } from 'react';
import Core from './Pages/Core'
import Overlay from './Pages/Overlay'
import Action from './Pages/Action'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      toggle: false,
      query: false,
      search: '',
      play: false,
      action: false,
      toggleSearch: false,
    }
  }
  update = (e) =>{
    const value = e.target.value
    this.setState({search: value})
  }
  toggle = () =>{
    this.setState({toggle: this.state.toggle ? false : true})
  }
  enter = (e) =>{
      if(e.charCode === 13){
        const search = this.state.search
        this.setState({query: search})
      }
      else if(e.target.dataset.id){
        const search = this.state.search
        this.setState({query: search})
      }
  }
  play = () =>{
    this.setState({play: this.state.play ? 'false': true})
  }
  action = (data) =>{
    if(this.state.action){
      this.setState({action:false})
    }
    else{
      this.setState({action:data})
    }
  }
  toggleSearch = () =>{
    this.setState({toggleSearch: this.state.toggleSearch ? false:true})
  }
  render() {
    const toggleDiv = <div className="animated flipInY menu">
      <ul>
        <li onClick={this.toggle}>Home</li>
        <li onClick={this.toggle}>My Favorites</li>
        <li onClick={this.toggle}>Sign Out</li>
      </ul>
    </div>
    const MobSearch =<div className="searchMob animated tada">
                    <input className="sendThis" placeholder="Search Media" onChange={this.update} onKeyPress={this.enter.bind(this)} value={this.state.search}/>
                    <button data-id='send' onClick={this.enter}></button>
                </div>
    return (
      <div className="wrapper">
        <div className="header">
          <div className="searchBox">
            <input className="sendThis" placeholder="Search Media" onChange={this.update} onKeyPress={this.enter.bind(this)} value={this.state.search}/>
            <button data-id='send' onClick={this.enter}></button>
          </div>
          <div className='searchBoxMob animated fadeIn'>
            {!this.state.toggleSearch && <button onClick={this.toggleSearch}><i className="fa fa-search" aria-hidden="true"></i></button>}
            {this.state.toggleSearch && <button onClick={this.toggleSearch}><i className="fa fa-times" aria-hidden="true"></i></button>}
            {this.state.toggleSearch && MobSearch}
          </div>
          <div className="userBox" onClick={this.toggle}>
            <p>Jhon Smith</p>
            {this.state.toggle && toggleDiv}
          </div>
        </div>
        <div className="contentHolder">
          <Core query={this.state.query} play={this.play} action={this.action}/>
        </div>
        {this.state.play && <Overlay close={this.play}/>}
        {this.state.action && <Action waring={this.state.action} action={this.action}/>}
        <div className="footer">
          <p>Copyright 2017, Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    );
  }
}

export default App;
