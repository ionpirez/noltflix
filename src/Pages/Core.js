import React, { Component } from 'react'
import Favorites from './Favorites'
import SearchPage from './Search'
import {Search, Add, Get, Delete} from '../Libs/Tools'
class Core extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: false,
      serach:true
    }
  }
  componentDidMount(){
    Get().then((data)=>{
      data.json().then((json)=>{
        const items = json.data
        this.setState({items})
      })
    })
  }
  componentWillReceiveProps(){
    const query = this.props.query
    const type = typeof query
    if(type === 'string'){
      Search(query).then((data)=>{
        data.json().then((json)=>{
          if(json.errorcode){
            this.setState({items:json})
          }
          else{
            let response = []
            response[0] = json
            this.setState({search:true})
            this.setState({items:response})
          }
        })
      })
    }
    else{
    }
  }
  add  = () =>{
    const value = this.state.items
    Add(value).then((data)=>{
      data.json().then((json)=>{
        const items = json.data
        this.setState({items})
        const type = {
          type:'add'
        }
        this.props.action(type)
      })
    })
  }
  delete = (e) =>{
    const id = e.target.dataset
    Delete(id).then((data)=>{
      data.json().then((json)=>{
        const items = json.data
        this.setState({items})
        const type = {
          type:'delete'
        }
        this.props.action(type)
      })
    })
  }
  back = () =>{
    Get().then((data)=>{
      data.json().then((json)=>{
        const items = json.data
        this.setState({items})
        this.setState({search:false})
      })
    })
  }
  render(){
    const state = this.state
    if(state.items === false){
      return(
        <p>Cargando ... .. .</p>
      )
    }
    else{
      if(state.items.errorcode){
        return(
          <div className="noContent">
            <div className="inner animated tada">
              <h1>{this.state.items.message}</h1>
            </div>
          </div>
        )
      }
      else{
        if(this.state.search === true){
          return(
            <SearchPage items={this.state.items} add={this.add} play={this.props.play} back={this.back}/>
          )
        }
        else{
          return(
            <Favorites items={this.state.items} delete={this.delete}/>
          )
        }
      }
    }
  }
}
export default Core
