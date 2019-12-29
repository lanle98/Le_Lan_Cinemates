import React, { Component } from "react";

export class Movie extends Component {
  render() {
    const { title, poster_path, backdrop_path } = this.props.movie;
    return (
      <div
        className="col-lg-2  col-md-3 col-12 movie p-0"
        onMouseOver={this.hover}
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
