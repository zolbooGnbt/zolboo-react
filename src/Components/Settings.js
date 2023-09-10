import { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Settings = ({userData}) => {
  const [updatedUserData, setUpdatedUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [, setIsAccountDeleted] = useState(false);

  const updateUser = () => {
    const userUrl = 'https://blogproject-5047e-default-rtdb.firebaseio.com/user/YOUR_USER_KEY.json';

    axios
      .put(userUrl, updatedUserData)
      .then((response) => {
        console.log('User data updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  const deleteAccount = () => {
    const userId = {};
    const userUrl = `https://blogproject-5047e-default-rtdb.firebaseio.com/user/${userId}.json`;
    axios
      .delete(userUrl)
      .then(() => {
        setIsAccountDeleted(true);
        console.log('User account deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting user account:', error);
      });
  };

  return (
    <div className="flex h-[50vh] m-20 ml-[350px]">
      <div className="flex-9 p-4 w-[800px]">
        <div className="flex items-center justify-between">
          <span className="text-3xl mb-4 text-red-400">Update Your Account</span>
          <span className="text-red-600 text-sm cursor-pointer"     onClick={deleteAccount}>Delete Account</span>
        </div>
        <form className="flex flex-col mt-8">
          <label className="text-xl">Username</label>
          <input
            type="text"
            placeholder="username"
            name="name"
            className="text-gray-600 mt-2 mb-2 border-b-2 border-gray-300"
            onChange={(e) =>
              setUpdatedUserData({
                ...updatedUserData,
                name: e.target.value,
              })
            } />
          <label className="text-xl">Email</label>
          <input
            type="email"
            placeholder="email"
            ame="email"
            className="text-gray-600 mt-2 mb-2 border-b-2 border-gray-300"
            onChange={(e) =>
              setUpdatedUserData({
                ...updatedUserData,
                email: e.target.value,
              })
            } />
          <label className="text-xl">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="text-gray-600 mt-2 mb-2 border-b-2 border-gray-300"
            onChange={(e) =>
              setUpdatedUserData({
                ...updatedUserData,
                password: e.target.value,
              })
            } />
          <button
            onClick={updateUser}
            className="text-white bg-teal-500 rounded-md w-36 mt-4 self-center py-2 cursor-pointer hover:bg-teal-600">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;