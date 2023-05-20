import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ViewDetails = ({ _id }) => {
  const { user } = useContext(AuthContext);
  const userLoginMessage = () => {
    if (!user) {
      Swal.fire('Forbidden!', 'Please login to view details.', 'error');
    }
  };
  return (
    <Link to={`/viewDetails/${_id}`}>
      <button onClick={userLoginMessage} className="btn btn-primary">
        View Details
      </button>
    </Link>
  );
};

export default ViewDetails;
