import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import {NotFound} from "./pages/NotFound"
import { UserDash } from "./pages/UserDash";
import {PackageRoutes} from "./PackageRoutes"

function App() {
  // const [packages, setPackages] = useState([]);

  //const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios.get("/list").then((res) => {
  //     console.log(res.data);
  //     setPackages(res.data.list);
  //   });
  // }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/package">Package</Link>
          </li>
          <li>
            <Link to="/userDash">UserDash</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/*" element={<PackageRoutes />} />
        <Route path="/userDash" element={<UserDash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="App">
          {packages.length ? (
            <div>
              <h1>List</h1>
              <ul>
                {packages.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </div> */}
    </>
  );
}

export default App;
