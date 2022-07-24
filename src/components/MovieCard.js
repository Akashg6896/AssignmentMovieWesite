import React, { Component } from 'react'
import styles from './MovieCard.module.css'
class MovieCard extends Component {
  render() {
    const { movie } = this.props
    return (
      <div className={styles.MovieContainer} key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.imdbID} />
        <figcaption>{movie.Title}</figcaption>
      </div>
    )
  }
}

export default MovieCard
