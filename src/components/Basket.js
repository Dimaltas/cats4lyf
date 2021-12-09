// import {randomPrice} from "../App";
// const { useState } = require("react");

// const Basket = () => {

//     const [cart, setCart] = useState([])

//     const addHandler = () =>{
//         randomPrice = [...cart]
//         randomPrice.push(setCart)
//         setCart(randomPrice)
//     }
//     const deleteHandler = (index) =>{
//         let storedCart = [...cart]
//         storedCart.splice(index,1)
//         setCart(storedCart)
//     }
//   return(
//     <div>
//       <h1>Basket</h1>
//       <button type="button" onClick = {addHandler}>+</button>
//       {cart && 
//       cart.map((index) =>{
//         return (<div key={index} value = "item">
//           <button onClick = {() => deleteHandler(index)}>-</button>
//         </div>)
//       })}
//     </div> )
// }
// export default Basket;

import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function App() {
const [itemCount, setItemCount] = React.useState(0);
const addHandler = () =>{
         setItemCount(itemCount +1)
     }
return (
<div>
  <h4>Add to basket</h4>
  <div>
    <Badge color="secondary" badgeContent={itemCount}>
      <ShoppingCartIcon />{" "}
    </Badge>
    <ButtonGroup>
      {/* <Button id="delete"
        onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
            }}>
        {" "}
        <RemoveIcon fontSize="small" />
      </Button> */}
      <Button id="add"
        onClick={() => {
          addHandler()
        }}
      >
        {" "}
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  </div>
</div>
);
}