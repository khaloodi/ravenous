import React, { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
  renderSortByOptions = () => {
    /*
      The method should iterate through the keys and values of the sortByOptions object and return a list item. The list item elements should use the keys as an attribute, and the values as content. Let’s start building it out.

      note:
        return Object.keys(sortByOptions) ... returns an array of all the keys
      */
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
    });
  };

  render() {
    return <li key={sortByOptions}> {this.renderSortByOptions()} </li>;
  }
}

export default SearchBar;
