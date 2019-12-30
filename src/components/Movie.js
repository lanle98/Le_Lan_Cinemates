import React, { Component } from "react";

export class Movie extends Component {
  state = {
    overview: this.props.movie.overview,
    backdrop_path: this.props.movie.backdrop_path
  };

  info = (overview, backdrop_path) => {
    this.setState({ overview, backdrop_path });
  };
  render() {
    const { title, poster_path } = this.props.movie;
    return (
      <div
        className="col-lg-2 col-md-3 col-12 movie p-0 shadow-lg"
        onMouseEnter={this.props.mouseEnter.bind(this)}
        onMouseLeave={this.props.mouseLeave.bind(this)}
        onClick={this.props.showInfo.bind(
          this,
          this.state.overview,
          this.state.backdrop_path
        )}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          className="w-100"
        />
        {/* <h4 className="text-center title">{title}</h4> */}
      </div>
    );
  }
}

export default Movie;
