import React, { Component } from 'react'
class SearchPage extends Component{
  render(){
    const items = this.props.items
    var movie = []
    var series = []
    for(var i = 0; i <= items.length-1; i++){
      let v = items[i]
      let cont = false
      let style ={
        image:{
          background: 'url("'+v.poster+'")'
        },
        rank:(number) =>{
          var html = []
          for(var i = 0; i <= parseInt(number,10)-1; i++){
            html.push(<span className="star" key={'star-'+i}><i className="fa fa-star" aria-hidden="true"></i></span>)
          }
          if (number !== Math.floor(number)) {
            const float = number.toString().split('.')[1]
            if(float > 5){
              html.push(<span className="halfStar" key={'start-half-'+float}><i className="fa fa-star-half-o" aria-hidden="true"></i></span>)
            }
            if(html.length+1 <= 5){
                while(html.length+1 <= 5){
                  html.push(<span className="halfStar" key={'empty-star-'+html.length}><i className="fa fa-star-o" aria-hidden="true"></i></span>)
                }
            }
          }
          return html
        }
      }
      switch (v.mediatype) {
        case 0:
        cont = <div className="thumbnail" key={i}>
                   <div className="img" style={style.image}></div>
                   <div className="description">
                     <h3>{v.show_title}</h3>
                     <div className="specs">
                       <span>{v.category}</span>
                       <span>{v.runtime}</span>
                     </div>
                     <div className="cal">
                       <span>{v.mediatype? 'TV show' : 'Movie'} / {v.release_year}</span>
                       <div className="rank">
                         {style.rank(v.rating)}
                       </div>
                     </div>
                   </div>
                   <div className="hover animated fadeIn">
                     <div className="half">
                       <i className="fa fa-play-circle" aria-hidden="true" onClick={this.props.play}></i>
                     </div>
                     <div className="half">
                      <i className="fa fa-plus-circle" aria-hidden="true" onClick={this.props.add}></i>
                     </div>
                   </div>
                 </div>
          movie.push(cont)
          break;
        case 1:
          cont = <div className="thumbnail" key={i}>
                     <div className="img" style={style.image}></div>
                     <div className="description">
                       <h3>{v.show_title}</h3>
                       <div className="specs">
                         <span>{v.category}</span>
                         <span>{v.runtime}</span>
                       </div>
                       <div className="cal">
                         <span>{v.mediatype? 'TV show' : 'Movie'} / {v.release_year}</span>
                         <div className="rank">
                           {style.rank(v.rating)}
                         </div>
                       </div>
                     </div>
                     <div className="hover animated fadeIn">
                       <div className="half">
                         <i className="fa fa-play-circle" aria-hidden="true" onClick={this.props.play}></i>
                       </div>
                       <div className="half">
                        <i className="fa fa-plus-circle" aria-hidden="true" onClick={this.props.add}></i>
                       </div>
                     </div>
                   </div>
            series.push(cont)
            break;
        default:
      }
      const lengMov = movie.length
      if(lengMov !== 0){
        movie.unshift(<span className="element" key='mov-cumber'>{"Movies ("+lengMov+")"}</span>)
      }
      const lengSer = series.length
      if(lengSer !== 0){
        series.unshift(<span className="element" key='tv-cumber'>{"TV shows ("+lengSer+")"}</span>)
      }
    }
    return(
      <div className="scrollSuit">
        <div className="breadcumber">
          <span>
            <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.props.back}></i>
          </span>
          <h3>Serach</h3>
        </div>
        <div className="movie">
          {movie}
        </div>
        <div className="series">
          {series}
        </div>
      </div>
    )
  }
}
export default SearchPage
