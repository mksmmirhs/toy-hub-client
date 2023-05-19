import React from 'react';
import { Link } from 'react-router-dom';

const TabItem = ({ car }) => {
  const { name, picture_url, price, rating, _id } = car;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl my-4 mx-auto">
      <figure>
        <img src={picture_url} alt="cars" className="w-[240px] h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`viewDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
