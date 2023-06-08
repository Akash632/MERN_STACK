import react, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [userName,setUserName] = useState();
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/signup");
  };

  return (
    <div>
      {auth?      
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? (
            <li className="nav-right">
              <Link to="/signup" onClick={logout}>
                Logout
                ({JSON.parse(auth).name})
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </>
          )}
        </li>
      </ul>:
      <ul className="nav-ul nav-right">
      <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
        </ul>}
    </div>
  );
}
export default Navbar;
