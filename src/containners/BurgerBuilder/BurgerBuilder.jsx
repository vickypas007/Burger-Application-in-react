import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControlls/BuildControlls";
import Modal from "../../UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../Axios/axios";
import Spinner from "../../UI/spinner/Spinner";
const INGREDIENT_PRICES = {
  salad: 10,
  cheese: 20,
  meat: 40,
  bacon: 10
};
var newPrice = "";

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 40,
    purchaseable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    axios
      .get("https://react-burger-app-95d8c.firebaseio.com/ingredients.json")
      .then(responce => {
        this.setState({ ingredients: responce.data });
      });
  }

  updateOurchageHandler(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKeys => {
        return ingredients[igKeys];
      })

      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateOurchageHandler(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    newPrice = oldPrice - priceSubtraction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateOurchageHandler(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCencelHandedler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);

    const queryResult = queryParams.join("&");
    this.props.history.push({
      pathname: "checkout",
      search: "?" + queryResult
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControl
            ingredientAdded={this.addIngredientHandler}
            ingredientSubtracted={this.removeIngredientHandler}
            disabled={disableInfo}
            purchasable={this.state.purchaseable}
            ordered={this.purchaseHandler}
            currentPrice={this.state.totalPrice}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCencelHandedler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          ModelClosed={this.purchaseCencelHandedler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default BurgerBuilder;
