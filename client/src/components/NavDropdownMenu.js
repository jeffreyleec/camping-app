import { Link } from "react-router-dom";
import React from "react";
import "./styles/Nav.scss";
import { useState } from "react";

export function NavDropdownMenu() {
  /* <Link to="/package">Package </Link>
     <Link to="/bookings">Bookings</Link> */
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const MenuItems = [
    {
      title: "Packages",
      path: "/package",
      cName: "dropdown-link",
    },
    {
      title: "My Bookings",
      path: "/bookings",
      cName: "dropdown-link",
    },
  ];
  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked'  : "nav-drop-down"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                // onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// {/* <select name="NavDropdownLoggedOut" id="NavDropdownLoggedOut">
//         <option value="Signup">Sign up</option>
//         <option value="Login">Log in</option>
//         <option value="HostYourHome">Host Your Equipment</option>
//       </select> */}

//       <select name="NavDropdownLoggedIn" id="NavDropdownLoggedIn">
//         <option value="Messages">Messages</option>
//         <option value="Notification">Notification</option>
//         <option value="Bookings">Bookings</option>
//         <option value="User Dashboard">User Dashboard</option>
//         <option value="LogOut">Log Out</option>
//         <option value="Referafriend ">Refer a friend </option>
//       </select>
//     </>
