import React from 'react';

const MyToysRow = ({ toy, handleDelete }) => {
  const { picture_url, _id } = toy;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className=" w-24 h-24">
            <img src={picture_url} alt="pic" />
          </div>
        </div>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
