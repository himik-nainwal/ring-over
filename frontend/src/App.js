import { useEffect, useState } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import Team from "./components/team/Team";
import shoe1 from "./images/shoe.jpg";
import shoe2 from "./images/shoe2.png";
import Journey from "./components/journey/Journey";
import Home from "./components/Home/Home.jsx";
import Product from "./components/item/Item"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
    range: "1500-4000",
  },
  {
    id: 2,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
    range: "1500-4000",
  },
  {
    id: 3,
    name: "KSL 01",
    price: 5000,
    type: "Loafers",
    img: shoe1,
    range: "4001-7000",
  },
  {
    id: 4,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
    range: "1500-4000",
  },
  {
    id: 5,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
    range: "1500-4000",
  },
  {
    id: 6,
    name: "KSW 01",
    price: 10000,
    type: "Sneakers",
    img: shoe2,
    range: "7001+",
  },
  {
    id: 7,
    name: "KSL 01",
    price: 5000,
    type: "Loafers",
    img: shoe1,
    range: "4001-7000",
  },
  {
    id: 8,
    name: "KSW 01",
    price: 2000,
    type: "Sneakers",
    img: shoe2,
    range: "1500-4000",
  },
  {
    id: 9,
    name: "KSL 01",
    price: 2500,
    type: "Loafers",
    img: shoe1,
    range: "1500-4000",
  },
  {
    id: 10,
    name: "KSW 01",
    price: 10000,
    type: "Sneakers",
    img: shoe2,
    range: "7001+",
  },
];

function App() {
  const [prod, setProd] = useState(products);
  const [cart, setCart] = useState([]);
   const [filter1, setFilter1] = useState(false);
   const [filter2, setFilter2] = useState(false);
   const [filter3, setFilter3] = useState(false);
   const [sneakers, setSneakers] = useState(false);
   const [loafers, setLoafers] = useState(false);
   const [item, setItem] = useState(false);

  const filterArray = () => {
    if (filter1 && filter2 && filter3) {
      setProd(products.filter((item) => item.price >= 1500));
    }
    else if (filter1 && filter2) {
      setProd(products.filter((pro) => pro.price >= 1500 && pro.price <= 7000));
    }
    else if (filter2 && filter3) {
      setProd(products.filter((pro) => pro.price >= 4001));
    }
    else if (filter1 && filter3) {
      setProd(products.filter((pro) => (pro.price >= 1500 && pro.price <= 4000) || pro.price >= 7001));
    }
    else if (filter1) {
      setProd(products.filter((pro) => pro.price >= 1500 && pro.price <= 4000));
    }
    else if (filter2) {
      setProd(products.filter((pro) => pro.price >= 4001 && pro.price <= 7000));
    }
    else if (filter3) {
      setProd(products.filter((pro) => pro.price >= 7001));
    }
    else {
      setProd(products);
    }
    if (sneakers && loafers) {
      setProd(prod);
    }
    else if (sneakers) {
      setProd(prod.filter((pro) => pro.type === "Sneakers"));
    }

    else if (loafers) {
      setProd(prod.filter((pro) => pro.type === "Loafers"));
    }
  };

  useEffect(() => {
    filterArray();
  }, [filter1, filter2, filter3, sneakers, loafers]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store prod={prod} setCart={setCart} cart={cart} setFilter1={setFilter1} setFilter2={setFilter2} setFilter3={setFilter3} filter1={filter1} filter2={filter2} filter3={filter3} setSneakers={setSneakers} setLoafers={setLoafers} sneakers={sneakers} loafers={loafers} item={item} setItem={setItem} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product item={item} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
