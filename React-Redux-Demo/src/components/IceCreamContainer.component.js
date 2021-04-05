import React from "react";
import { connect } from "react-redux";
import { buyiceCream } from "../redux/index";
function IceCreamContainer(props) {
  return (
    <div>
      <h2> Number of IceCream {props.numOfIceCream}</h2>
      <button onClick={props.buyiceCream}>Buy IceCream</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyiceCream: () => dispatch(buyiceCream())
  };
};

export default connect(
mapStateToProps, mapDispatchToProps)
(IceCreamContainer);
