import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    picture_url,
    name,
    seller_name,
    rating,
    price,
    seller_email,
    description,
    available_quantity,
  } = toy;
  return (
    <div className="my-8 text-center">
      <img src={picture_url} alt="" className="w-[500px] h-[500px] mx-auto" />
      <h1 className=" text-xl">Name: {name}</h1>
      <p className="my-4">Seller Name: {seller_name}</p>
      <p className="my-4">Seller Email: {seller_email}</p>
      <p className="my-4">Price: ${price}</p>
      <p className="my-4">Rating: {rating}</p>
      <p className="my-4">Available Quantity: {available_quantity}</p>
      <p className="my-4">
        Description: <br />
        {description}
      </p>
    </div>
  );
};

export default ToyDetails;
