import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Header title="Mouth Watering">
        <Link
          to="recipes"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          search recipes
        </Link>
        <p
          style={{
            marginTop: "80px",
            color: "white",
            textTransform: "uppercase",
            fontSize: "3.5rem",
            fontFamily: "Courgette",
            letterSpacing: "0.5rem"
          }}
        >
          Recipes
        </p>
      </Header>
    );
  }
}

export default Home;
