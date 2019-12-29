import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

export class App extends Component {
  state = {
    page: 1,
    movies: []
  };
  componentDidMount(page) {
    let api = "https://api.themoviedb.org/3",
      find = "/discover/movie",
      query = `?page=${page}&`,
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

  hover = () => {
    console.log("hovered");
  };

  render() {
    return (
      <div>
        <h1>Welcom to this site</h1>
        <Header />
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.loadMore}
            hasMore={true}
            className="row"
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <List hover={this.hover} movies={this.state.movies} />
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
