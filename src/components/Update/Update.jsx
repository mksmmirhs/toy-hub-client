import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const toy = useLoaderData();
  const { price, available_quantity, description, _id } = toy;
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToy = { price, quantity, description };
    console.log(updatedToy);

    fetch(`https://toy-final.vercel.app/toy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire('Update!', 'Your toy has been Updated.', 'success');
        }
      });
  };

  return (
    <div className="my-8">
      <form className=" text-center border" onSubmit={handleSubmit}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          step="any"
          defaultValue={price}
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="quantity">Available Quantity:</label>
        <input
          type="number"
          name="quantity"
          min="1"
          defaultValue={available_quantity}
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="description">Detail Description:</label>
        <textarea
          name="description"
          required
          defaultValue={description}
          className="input input-primary my-4 ms-4"
        ></textarea>
        <br />

        <input type="submit" value="Submit" className="btn my-4" />
      </form>
    </div>
  );
};

export default Update;
