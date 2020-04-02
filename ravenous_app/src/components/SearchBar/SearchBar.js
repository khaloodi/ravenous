import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    const SortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };

    const renderSortByOptions = () => {
      /*
      The method should iterate through the keys and values of the sortByOptions object and return a list item. The list item elements should use the keys as an attribute, and the values as content. Let’s start building it out.
      */
      return Object.keys(this.SortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
      });
    };

    return <li key={SortByOptions}> {this.renderSortByOptions()} </li>;
  }
}

export default SearchBar;
