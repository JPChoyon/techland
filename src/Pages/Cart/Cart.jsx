import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData/MyCartData";


const Cart = () => {
  
  const cartData = useLoaderData()
  console.log(cartData);
  const [cartProdact, setCartProdact] = useState(cartData)
  console.log(cartProdact);
  return (
    <div>
      <div>
        {cartProdact.map((prodact) => (
          <MyCartData
            key={prodact._id}
            setCartProdact={setCartProdact}
            cartProdact={cartProdact}
          ></MyCartData>
        ))}
      </div>
    </div>
  );
};

export default Cart;