import React from "react";
import {} from "semantic-ui-react";

class BirthdayForm extends React.Component {
  state = {
    errorMessages: [],
    month: "",
    day: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    if (this.state.month === "") {
      this.setState({
        errorMessages: this.state.errorMessages.push("Please select a month.")
      });
    }
    if (this.state.day === "") {
      this.setState({
        errorMessages: this.state.errorMessages.push("Please select a day.")
      });
    }
    return this.state.errorMessages;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    if (this.state.errorMessages.length > 0) {
      alert("Whoops!", this.state.errorMessages.join("\r\n"));
    } else {
      this.props.findPeopleByBirthday(this.state.month + "-" + this.state.day);
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="month"
            className=""
            type="text"
            label="Month"
            value={this.state.month}
            onChange={this.handleChange}
          />

          <input
            name="day"
            className=""
            type="text"
            label="Day"
            value={this.state.day}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BirthdayForm;
