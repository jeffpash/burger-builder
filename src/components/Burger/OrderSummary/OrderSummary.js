import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    //This could be a functional component, it doesn't have to be a class
    componentWillUpdate() {
        console.log('[orderSummary]willUpdate');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {igKey}
                        </span>
                        :{this.props.ingredients[igKey]}
                    </li>
                );
            }
        );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Yummy burger composed of:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>
                        Total price is: {this.props.price.toFixed(2)}
                    </strong>
                </p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
