import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import usePageTitle from '../../Titlehook/usePageTitle ';

const AddToy = () => {
  usePageTitle('Add a toy');
  const { user } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toy = {
      picture_url: pictureUrl,
      name,
      seller_name: sellerName,
      seller_email: sellerEmail,
      sub_category: subcategory,
      price,
      rating,
      available_quantity: quantity,
      description,
    };
    console.log(toy);
    fetch('https://toy-final.vercel.app/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire('Item Added!', 'Successful!', 'success');
        }
      });
  };

  return (
    <div className="my-8">
      <form className=" text-center border" onSubmit={handleSubmit}>
        <label htmlFor="pictureUrl">Picture URL of the toy:</label>
        <input
          type="text"
          name="pictureUrl"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="sellerName">Seller Name:</label>
        <input
          type="text"
          name="sellerName"
          defaultValue={user.displayName}
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="sellerEmail">Seller Email:</label>
        <input
          type="email"
          name="sellerEmail"
          defaultValue={user.email}
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="subcategory">Sub-category:</label>
        <input
          type="text"
          name="subcategory"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          step="any"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="quantity">Available Quantity:</label>
        <input
          type="number"
          name="quantity"
          min="1"
          required
          className="input input-primary my-4 ms-4"
        />
        <br />

        <label htmlFor="description">Detail Description:</label>
        <textarea
          name="description"
          required
          className="input input-primary my-4 ms-4"
        ></textarea>
        <br />

        <input type="submit" value="Submit" className="btn my-4" />
      </form>
    </div>
  );
};

export default AddToy;
