import React from 'react';
import { URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({userDetails}) => {

const navigate = useNavigate()
  const handleLogout = async()=>{
    const res = await fetch(URL+"/logout",{method:"POST",credentials:"include"} )
    // await res.json()
    navigate("/login")
  }


  return (
    <div className="max-w-sm absolute right-0 -bottom-28 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
  
      <div className="mb-2">
        <span>{userDetails.name}</span>
      </div>

      <div className="mb-2">
        <span>{userDetails.email}</span>
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointerF rounded-md transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
