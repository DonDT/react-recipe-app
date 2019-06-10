import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Default from "./pages/Default";
import SingleRecipes from "./pages/SingleRecipe";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipes} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
