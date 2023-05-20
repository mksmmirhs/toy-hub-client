import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import usePageTitle from '../../Titlehook/usePageTitle ';

const MyToys = () => {
  usePageTitle('My Toys');
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `https://toy-final.vercel.app/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });
  }, []);
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://toy-final.vercel.app/mytoys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };
  const handleSort = () => {
    fetch(`https://toy-final.vercel.app/descending?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });
  };
  const handleSortAscending = () => {
    fetch(`https://toy-final.vercel.app/ascending?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
      });
  };
  return (
    <div className="my-8">
      <div className="my-4 text-center">
        <button onClick={handleSort} className="btn">
          Sort descending
        </button>
        <button onClick={handleSortAscending} className="btn ms-4">
          Sort ascending
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
