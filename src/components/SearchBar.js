import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.searchValue !== nextState.searchValue) {
      this.props.getSearchString(nextState.searchValue)
      //   console.log(this.state.searchValue)
      return true
    }
    return false
  }
  render() {
    return (
      <>
        <input
          type='text'
          placeholder='Search for a Movie Title ...'
          id='searchbar'
          value={this.state.searchValue}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
      </>
    )
  }
}

export default SearchBar
