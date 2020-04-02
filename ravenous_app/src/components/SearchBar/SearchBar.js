import React from "react";
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

        .map ... returns a new array that's been changed or transformed in place, it's a "higher order function" which means it takes a callback function as an argument, 

        sortByOption =>{} ... each element inside our array that we're chaining it to
      */

    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}> {sortByOption} </li>;
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
