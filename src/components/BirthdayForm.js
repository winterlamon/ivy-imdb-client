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
    console.log("STATE IN BIRTHDAY FORM", this.state);

    const allErrorMessages = this.state.errorMessages.map(message => (
      <li>{message}</li>
    ));

    return (
      <div>
        {this.state.errorMessages.length > 0 ? (
          <div className="errors">
            <ul>{allErrorMessages}</ul>
          </div>
        ) : null}
        <div>
          <form>
            <label>
              <h3>Month</h3>
              <select
                name="month"
                placeholder="Month"
                className=""
                type="text"
                label="Month"
                value={this.state.month}
                onChange={this.handleChange}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </label>

            <label>
              <h3>Day</h3>
              <select
                name="day"
                placeholder="Day"
                className=""
                type="text"
                label="Day"
                value={this.state.day}
                onChange={this.handleChange}
              >
                {/* <option selected>Day</option> */}
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </label>

            <button onClick={this.handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BirthdayForm;