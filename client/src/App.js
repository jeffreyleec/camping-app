import "./App.scss";
import SearchProvider from "./providers/SearchProvider";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Bookings } from "./pages/Bookings";
import { PackageRoutes } from "./PackageRoutes";
import { Nav } from "./components/Nav";
import CategoryFilterItem from "./components/CategoryFilterItem";
import DateRangeFilterItem from "./components/DateRangeFilterItem";
import Login from "./components/Login";
import Logout from "./components/Logout";
import React from 'react'
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <React.StrictMode>
          <Nav />
        </React.StrictMode>

        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package/*" element={<PackageRoutes />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/category/1"
              element={<CategoryFilterItem category="1" />}
            />
            <Route
              path="/category/2"
              element={<CategoryFilterItem category="2" />}
            />
            <Route
              path="/category/3"
              element={<CategoryFilterItem category="3" />}
            />
            <Route
              path="/category/4"
              element={<CategoryFilterItem category="4" />}
            />
            <Route path="/rangeSearch" element={<DateRangeFilterItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </SearchProvider>
    </div>
  );
}

export default App;
