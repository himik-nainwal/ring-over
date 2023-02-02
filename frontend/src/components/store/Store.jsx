import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import "./store.scss";
import { FiSearch } from "react-icons/fi";
import Shoe from "./Shoe";
import { FiShoppingBag } from 'react-icons/fi'
import Cart from "./Cart";
import "./filter.scss";
import filter from "../../images/filter.png"
const Store = ({ prod, setCart, cart, setFilter1, setFilter2, setFilter3, filter1, filter2, filter3, setSneakers, setLoafers, sneakers, loafers, item, setItem }) => {

  return (
    <div className="store_container">
      <div className="filter">
      <span className="heading">
        <h1>FILTERS</h1>
        <img className="filterImg" src={filter} alt="filter" />
      </span>
        <div className="responsiveDiv">
        <span className="cost">
          <h3>Cost</h3>
          <label>
            <input
              type="checkbox"
              id="1500-4000"
              name="1500-4000"
              className="CheckBox" onChange={
            () => {
              setFilter1(!filter1)
          }}
            />
            &nbsp; Rs. 1500-4000
          </label>
          <label>
            <input
              type="checkbox"
              id="4001-7000"
              name="4001-7000"
              className="CheckBox" onChange={
            () => {
              setFilter2(!filter2)
          }}
            />
            &nbsp; Rs. 4001-7000
          </label>
          <label>
            <input
              type="checkbox"
              id="7001+"
              name="7001+"
              className="CheckBox" onChange={
            () => {
              setFilter3(!filter3)
          }}
            />
            &nbsp; Rs. 7000+
          </label>
          <br />
          </span>
        </div>
        <br />
        <span className="color">
          <h3>Color</h3>
          <div className="colors">
            <div style={{ background: "red", padding: "1rem" }}></div>
            <div style={{ background: "yellow", padding: "1rem" }}></div>
            <div style={{ background: "blue", padding: "1rem" }}></div>
            <div style={{ background: "brown", padding: "1rem" }}></div>
            <div style={{ background: "black", padding: "1rem" }}></div>
          </div>
          </span>
          <br />
        <div className="design">
          <h3>Design templates</h3>
          <input type="checkbox" name="" id="" value={2} />
          <label htmlFor="2"> 2</label>
          <br />
          <input type="checkbox" name="" id="" value={3} />
          <label htmlFor="3"> 3</label>
          <br />
          <input type="checkbox" name="" id="" value="3+" />
          <label htmlFor="3+"> 3+</label>
          <br />
        </div>
        <br />
        <div className="type">
          <h3>Type</h3>
          <input type="checkbox" name="" id="sneakers" value="sneakers" onChange={
            () => {
                setSneakers(!sneakers)
            }
          } />
          <label htmlFor="sneakers"> Sneakers</label>
          <br />
          <input type="checkbox" name="" id="loafers" value="loafers" onChange={
            () => {
                setLoafers(!loafers)
            }
          } />
          <label htmlFor="loafers"> Loafers</label>
          <br />
        </div>
        <button className="btn">
        Apply
      </button>
      </div>

      <div className="filter">
        <div className="heading">
          <h2>SHOES</h2>
          <div style={{ marginLeft: "auto" }}>
            <FiSearch size={24} />
            <button style={{ padding: "0.4rem", background: "transparent", marginLeft: "2rem" }}>sort by</button>
          </div>
        </div>
        <div className="shoes__array">
          {prod.map((pro) => (
           <Shoe key={pro.id} pro={pro} setCart={setCart} cart={cart} item={item} setItem={setItem} />
          ))}
        </div>
      </div>
      <div className="filter">
        <div className="cart__header">
            <h2>CART</h2>
            <FiShoppingBag size={24} style={{marginLeft: 'auto'}} />
            </div>
            <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Store;
