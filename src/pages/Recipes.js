import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      search: ""
    };
  }
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default Recipes;
