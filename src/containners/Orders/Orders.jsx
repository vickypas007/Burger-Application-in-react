import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../Axios/axios";

class Orders extends Component {
  state = {
    order: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchdata = [];
        for (let key in res.data) {
          fetchdata.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, order: fetchdata });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.order.map(ord => (
          <Order key={ord.id} 
          ingredients={ord.ingredients}
           price={ord.price} />
        ))}
      </div>
    );
  }
}

export default Orders;
