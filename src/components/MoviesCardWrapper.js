import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieCardContainer from './MovieCardContainer'
class MoviesCardWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    }
  }
  getSearchString = (value) => {
    this.setState({
      searchValue: value,
    })
  }
  render() {
    return (
      <>
        <SearchBar getSearchString={this.getSearchString} />
        <MovieCardContainer searchValue={this.state.searchValue} />
      </>
    )
  }
}

export default MoviesCardWrapper
