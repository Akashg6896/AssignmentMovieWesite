import axios from 'axios'
import React, { Component } from 'react'
import MovieCard from './MovieCard'
class MovieCardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MovieList: [],
      filterMovieList: [],
    }
  }
  filterMovies = (searchValue) => {
    const Movies = this.state.MovieList.filter(
      (movie) => movie.Title.toLowerCase().indexOf(searchValue) !== -1
    )
    this.setState({ filterMovieList: Movies })
  }
  componentDidMount() {
    axios
      .get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
      .then((res) => res.data.Search)
      .then((movies) =>
        this.setState({
          MovieList: movies,
          filterMovieList: movies,
        })
      )
      .catch((err) => console.log(err))
    // console.log(this.state.MovieList)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.searchValue !== nextProps.searchValue) {
      //   console.log(nextProps.searchValue)
      this.filterMovies(nextProps.searchValue.toLowerCase())
      //   console.log(nextProps.searchValue)
      return true
    }
    return true
  }
  render() {
    return (
      <div className='Wrapper'>
        {/* <MovieCard /> */}
        {this.state.filterMovieList.map(
          (movie) => (
            <MovieCard movie={movie} />
          )
          //   console.log(movie)
        )}
      </div>
    )
  }
}

export default MovieCardContainer
