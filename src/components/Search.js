import React from "react";

export default class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      search: 'avatar',
      type: 'all'
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (e) =>{
    if(e.key === 'Enter'){
      this.props.searchMovies(this.state.search, this.state.type)
      this.state.search = ''
    }
  }

  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }

  render(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
            placeholder="Search" 
            type="search" 
            className="validate" 
            onChange={this.onChange}
            value={this.state.search}
            name="search"
            onKeyDown={this.handleClick}
            />
            <button className="button" 
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
          </div>
          <div>
          <label>
            <input className="with-gap" name="type" type="radio" data-type='all' onChange={this.handleFilter} checked={this.state.type === 'all'}/>
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
            <span>Movies only</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.handleFilter} checked={this.state.type === 'series'}/>
            <span>Series only</span>
          </label>
          <label>
            <input className="with-gap" name="type" type="radio" data-type='games' onChange={this.handleFilter} checked={this.state.type === 'games'}/>
            <span>Games only</span>
          </label>
          </div>
        </div>
      </div>
    )
  }
}