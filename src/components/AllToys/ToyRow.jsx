import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
  const { picture_url, name, sub_category, price, available_quantity, _id } =
    toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <th>
        <Link to={`/viewDetails/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
