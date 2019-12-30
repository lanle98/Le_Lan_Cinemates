import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import MovieInfo from "./components/MovieInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

export class App extends Component {
  state = {
    page: 1,
    movies: [],

    movieInfo: { overview: undefined, backdropPath: undefined }
  };
  componentDidMount(page) {
    let api = "https://api.themoviedb.org/3",
      find = "/discover/movie",
      query = `?page=${page}&primary_release_year=2019&`,
      api_key = "api_key=8b3aa7357a1283c0b7821398836c387f",
      url = api + find + query + api_key;
    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.parseData(data);
        console.log(data);
      });
  }

  parseData = data => {
    this.setState({
      movies: this.state.movies.concat(data.results),
      page: data.page
    });
  };

  loadMore = () => {
    let page_number = this.state.page;
    this.componentDidMount(page_number + 1);
  };

  showInfo = (overview, backdrop_path) => {
    console.log("clicked");
    this.setState({ movieInfo: { overview, backdropPath: backdrop_path } });
    document.querySelector(".modal").classList.add("show");
  };

  mouseEnter = e => {
    let movies = document.querySelectorAll(".movie");
    movies.forEach(movie => {
      movie.classList.add("gray-scale");
    });
    e.target.classList.remove("gray-scale");
  };
  mouseLeave = () => {
    let movies = document.querySelectorAll(".movie");
    movies.forEach(movie => {
      movie.classList.remove("gray-scale");
    });
  };

  render() {
    return (
      <div>
        <h1>Welcom to this site</h1>
        <Header />
        <MovieInfo movieInfo={this.state.movieInfo} />
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.loadMore}
            hasMore={true}
            className="row m-4"
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <List
              mouseEnter={this.mouseEnter}
              mouseLeave={this.mouseLeave}
              movies={this.state.movies}
              showInfo={this.showInfo}
            />
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
