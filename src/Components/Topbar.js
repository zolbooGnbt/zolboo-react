import { Link } from "react-router-dom";

const Topbar=()=> {
  const handleLogOut = () => {
    localStorage.clear();
    document.location.pathname = "/"
  };

  return (
    <div className="w-full h-16 bg-white sticky top-0 flex items-center justify-between z-50 font-josefin">
      <div className="flex-6 ml-32">
        <ul className="flex justify-center space-x-8">
          <li className="text-lg font-light cursor-pointer">
            <Link to="/" className="text-gray-500 hover:text-gray-600">HOME</Link>
          </li>
          {localStorage.getItem('currentUser') && <li className="text-lg font-light cursor-pointer" onClick={handleLogOut}>LOGOUT</li>}
        </ul>
      </div>
      <div className="flex-3 flex items-center justify-center space-x-4 mr-32">
        {localStorage.getItem('currentUser') ? (
          <Link to="/settings" className="text-gray-500 hover:text-gray-600">
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="flex space-x-4">
            <li className="text-lg font-light cursor-pointer">
              <Link to="/login" className="text-gray-500 hover:text-gray-600">LOGIN</Link>
            </li>
            <li className="text-lg font-light cursor-pointer">
              <Link to="/register" className="text-gray-500 hover:text-gray-600">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="fas fa-search text-xl text-gray-600 hover:text-gray-700 cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Topbar;