import React from "react";

const Product = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        <img src={image} alt="product-img" />
      </div>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
