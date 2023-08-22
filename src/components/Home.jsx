import React, { useEffect, useState } from "react";
import Product from "./Product";
import { API_URL } from "../constants/data";
import Spinner from "./Spinner";

const Home = () => {
  const [ProductData, setProductData] = useState([]);

  const getProductData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return ProductData.length === 0 ? (
    <Spinner />
  ) : (
    <div className="max-w-5xl flex flex-wrap mx-auto justify-evenly">
      {ProductData.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Home;
