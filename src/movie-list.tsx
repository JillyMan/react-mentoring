import React, { useState } from "react";

interface Props {
  movieList: string[];
}

class MovieList extends React.PureComponent<Props> {
  render() {
    const { movieList } = this.props;

    return movieList && movieList.length > 0
      ? React.createElement(
          "ul",
          null,
          movieList.map((value, id) => {
            return React.createElement("li", { key: id }, value);
          })
        )
      : React.createElement(
          "h1",
          { className: "header_title" },
          "Nothing to show."
        );
  }
}

export default MovieList;