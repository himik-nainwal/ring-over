import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import "./shoe.scss";
import bag from "../../images/bag.png"

function ButtonModal({ pro, setCart, cart, item, setItem }) {
  const navigate = useNavigate();
  return (
    <div className="btn_container" onClick={() => {
        setCart((curr) => [...curr.filter((prod) => prod.id !== pro.id), pro])
        if(item.id !== pro.id) setItem(pro);
        navigate("/product")
      }
      }>
      <button>
        <img src={bag} className="addBtn" alt="addtocart" />
      </button>
    </div>
  );
  }

const Shoe = ({ pro, setCart, cart, item, setItem }) => {
  return (
    <div className="product">
      <img
        className="productImg"
        src={pro.img}
        style={{ width: "10rem" }}
        alt=""
      />
      <h3>{pro.name}</h3>
      <div>
        <span className="desc">
          <p>Rs. {pro.price}</p>
          <div style={{ marginLeft: "auto" }}>
            <BsStarFill style={{ color: "gold" }} />
            <BsStarFill style={{ color: "gold" }} />
            <BsStarFill style={{ color: "gold" }} />
            <BsStarFill style={{ color: "gold" }} />
            <BsStarHalf style={{ color: "gold" }} />
          </div>
        </span>
      </div>
      <ButtonModal key={pro.id} pro={pro} setCart={setCart} cart={cart} item={item} setItem={setItem} />
    </div>
  );
}

export default Shoe