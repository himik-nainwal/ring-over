import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {

    const Filled = () => {
        return (
            <>
                {cart.map((pro) => {
                    return (
                        <div className="cart__item" key={pro.id}>
                            <img src={pro.img} alt="" style={{width: '8rem', marginLeft: 0, height: '6rem'}} />
                            <div className="cart__item__info">
                                <h3>{pro.name}</h3>
                                <p>Rs. {pro.price}</p>
                            </div>
                            <button className="no-style" onClick={() => setCart(cart.filter((item) => {
                                return item.id !== pro.id
                            }))}><AiOutlineDelete /></button>
                        </div>
                    )
                })}
                </>
        )
    }

  return (
  <div className="cart">
    {
        cart.length ? <Filled /> : <p>What's stopping you, designer?</p>
    }
  </div>
  );
};

export default Cart;
