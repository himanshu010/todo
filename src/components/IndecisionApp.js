import React from "react";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import OptionModal from "./OptionModal.js";
import "../styles/styles.scss";
import Footer from "./Footer.js";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  componentDidMount() {
    console.log("ComponentDidMount!");
    try {
      const json = localStorage.getItem("options");
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("ComponentDidUpdate!");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount!");
  }
  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[index] }));
  };
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemove = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => {
        return opt !== option;
      }),
    }));
  };
  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value to add an option";
    }
    if (this.state.options.indexOf(option) !== -1) {
      return "Option already Exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div>
            <Action
              handlePick={this.handlePick}
              hasOptions={this.state.options.length > 0}
            />
            <div className="widget">
              <Options
                handleRemoveAll={this.handleRemoveAll}
                options={this.state.options}
                handleRemove={this.handleRemove}
              />
              <AddOption handleAddOption={this.handleAddOption} />
            </div>
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default IndecisionApp;
