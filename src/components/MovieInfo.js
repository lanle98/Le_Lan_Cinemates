import React, { Component } from "react";

export class MovieInfo extends Component {
  closeModal = () => {
    console.log("clicked");
    document.querySelector(".modal").classList.remove("show");
  };
  render() {
    return (
      <div className="modal">
        <span className="close" onClick={this.closeModal}>
          &times;
        </span>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img
                src={`https://image.tmdb.org/t/p/original/${this.props.movieInfo.backdropPath}`}
                alt="backdrop"
                className="img-fluid"
              />
              <p>{this.props.movieInfo.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
