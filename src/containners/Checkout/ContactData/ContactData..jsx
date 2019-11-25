import React, { Component } from "react";
import "./ContactData.css";
import axios from "../../../Axios/axios";
import Spinner from "../../../UI/spinner/Spinner";
import { withRouter } from "react-router-dom";
import Input from "../../../UI/Input/Input";

const initalErrorState = {
  nameError: "",
  emailError: "",
  streetError: "",
  postalError: ""
};

class ContactData extends Component {
  state = {
    orderForm: {
      name: "",
      email: "",
      street: "",
      postal: ""

      // deliveryMethod: {
      //   elementType: "select",
      //   elementConfig: {
      //     option: [
      //       { value: "fastest", displayValue: "Fastest" },
      //       { value: "cheapest", displayValue: "Cheapest" }
      //     ]
      //   },
      //   value: ""
      // }
    },
    loading: false,
    initalErrorState
  };

  myChangeHandler = event => {
    event.preventDefault();
    let formValues = this.state.orderForm;
    let nam = event.target.name;
    let val = event.target.value;
    formValues[nam] = val;
    this.setState({ formValues });
  };

  componentDidUpdate() {
    console.log(this.state.orderForm);
  }

  validation = () => {
    let nameError = "";
    let emailError = "";
    let streetError = "";
    let postalError = "";

    if (!this.state.orderForm.name) {
      nameError = "Name cannot be blank";
    }
    if (!this.state.orderForm.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ nameError, emailError });
      return false;
    }
    return true;
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    const isValid = this.validation();
    if (isValid) {
      this.setState({ loading: true });
      const Order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customerDetails: this.state.orderForm
      };
      axios
        .post("/orders.json", Order)
        .then(responce => {
          this.setState({ loading: false });
          this.props.history.push("/");
        })
        .catch(error => {
          this.setState({ loading: false });
        });
      alert("You Ordered Successfully !");
    } else {
      console.log("error");
    }
    this.setState({ initalErrorState });
  };

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <Input
          inputtype="input"
          type="text"
          name="name"
          required="Required"
          className="form-control"
          placeholder="Your Name"
          onChange={this.myChangeHandler}
        />
        <div style={{ color: "red" }}> {this.state.nameError}</div>

        <Input
          inputtype="input"
          type="email"
          name="email"
          required="Required"
          className="form-control"
          placeholder="Your Email"
          onChange={this.myChangeHandler}
        />
        <div style={{ color: "red" }}> {this.state.emailError}</div>
        <Input
          inputtype="input"
          type="text"
          name="street"
          required="Required"
          className="form-control"
          placeholder="Street"
          onChange={this.myChangeHandler}
        />
        <div style={{ color: "red" }}> {this.state.streetError}</div>
        <Input
          inputtype="input"
          type="text"
          name="postal"
          required="Required"
          className="form-control"
          placeholder="Postal Code"
          onChange={this.myChangeHandler}
        />
        <div style={{ color: "red" }}> {this.state.postalError}</div>
        <button type="submit" className="btn btn-primary btm-md">
          ORDER
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h1> Enter Your Contact details</h1>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
