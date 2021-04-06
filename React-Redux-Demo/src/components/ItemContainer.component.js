import React from "react";
import { connect } from "react-redux";
import { buyCake, buyiceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>
        {props.text} - {props.item}
      </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  const itemText = ownProps.cake
    ? "Number of cakes in item container"
    : "Number of Ice Cream in item container";
  return {
    item: itemState,
    text: itemText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyiceCream());
    return{
        buyItem: dispatchFunction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
