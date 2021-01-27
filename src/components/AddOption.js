import React from "react";
import "../styles/styles.scss";
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" name="option" type="text" />
          <button className="button" type="submit">
            Add option
          </button>
        </form>
      </div>
    );
  }
}
