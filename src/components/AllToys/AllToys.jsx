import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const handleSearch = event => {
    event.preventDefault();
    const search = event.target.name.value;
    console.log(search);
    const url = `http://localhost:5000/search?name=${search}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });
  };

  return (
    <div>
      <div className="my-4 text-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by name"
            name="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input type="submit" value="Search" className="btn ms-4" />
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {
              /* row */

              toys.map(toy => (
                <ToyRow key={toy._id} toy={toy}></ToyRow>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
