import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";

const formatPrice = (price) => {
  return Number(price).toFixed(2);
};

const CheckOut = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const handleCheckout = () => {
    // Perform the checkout logic here
    console.log("Checkout logic goes here");
  };

  const handleIncrement = (item) => {
    increaseQuantity(item.id);
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      // Remove item from cart if quantity is 1
      removeFromCart(item);
    } else {
      decreaseQuantity(item.id);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Format the total price with exactly 2 decimal places
  const formattedTotalPrice = formatPrice(totalPrice);

  return (
    <div
      name="checkout"
      className="flex flex-col items-center justify-center mt-8"
    >
      <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
      {cartItems.length > 0 ? (
        <div className="w-2/3">
          <div className="flex w-full justify-between mb-2">
            <div className="w-1/5"></div>
            <div className="w-1/5">
              <h2 className="text-lg font-semibold">Products</h2>
            </div>
            <div className="w-1/5">
              <h2 className="text-lg font-semibold">Price</h2>
            </div>
            <div className="w-1/5">
              <h2 className="text-lg font-semibold">Quantity</h2>
            </div>
            <div className="w-1/5">
              <h2 className="text-lg font-semibold">Total</h2>
            </div>
          </div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center mb-2 border-b border-gray-300 py-2"
            >
              <div className="w-1/5">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemove(item)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="w-1/5 flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded-md mr-2"
                />
                <p>{item.title}</p>
              </div>
              <div className="w-1/5">
                <p>₱ {formatPrice(item.price)}</p>
              </div>
              <div className="w-1/5 flex items-center">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleDecrement(item)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleIncrement(item)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="w-1/5">
                <p>₱ {formatPrice(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          <div className="flex w-full justify-end mt-4">
            <h3 className="text-lg font-semibold">
              Total Price: ₱ {formattedTotalPrice}
            </h3>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CheckOut;
