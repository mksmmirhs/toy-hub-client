import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
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
        <h1>
          Rating:{' '}
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          {rating}
        </h1>
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
