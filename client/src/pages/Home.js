import { useEffect, useState } from "react";
import "./styles/Home.scss";
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import { DatePickerBar } from "../components/DatePickerBar";
// import CategoryFilterItem from "../components/CategoryFilterItem";
import { useContext } from "react";
// import SearchProvider from "../providers/SearchProvider";
import { searchContext } from "../providers/SearchProvider";
import { HomePackages } from "../components/HomePackages";

import axios from "axios";
import { avilableArry } from "../components/AvailabilityFunc";
import { bookings } from "../mock_data/bookings";
import PackageListItem from "../components/PackageListItem";

export function Home() {
  const { startDate, endDate, setPackages, category, setCategory, packages, loading } =
    useContext(searchContext);

  // const [search_query, setSearchQuery] = useState("");
  // const [filterByCategory, setFilterByCategory] = useState(0);
  // const [filterByRange, setFilterByRange] = useState([]);
  // const [filterByLocation, setFilterByLocation] = useState([]);

  useEffect(() => {
    const categoryFilter = function (data) {
      if (category !== 0) {
        const cF = data.filter((pack) => pack.category === category);
        return cF;
      }
      return data;
    };
  })
  // function filterItems()  {axios
  //   .get("/api/packages/filter", { params: { category, endDate, startDate } })
  //   // .then((res) => console.log(res.data.data))
  //   .then((res) => {
  //     //console.log(res.data.data,'running@@@@@@')
  //     setPackages(res.data.data);
      
  //   });
  // }
  //   const rangeFilter = function (data) {
  //     if (startDate.getTime() === endDate.getTime()) {
  //       return data;
  //     }
  //     return avilableArry([startDate, endDate], packages, bookings);
  //   };

  //   const categoryFiltered = categoryFilter(packages);
  //   const rangeFiltered = rangeFilter(categoryFiltered);

  //   setFilteredPackages(rangeFiltered);
  // }, [packages, category, startDate, endDate]);

  const packageGallery = packages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        home_img={packageItem.home_img}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        location={packageItem.location}
        availability={packageItem.availability}
      />
    );
  });

  // console.log(avilableArry([startDate,endDate], packages, bookings))

  return (
    <>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DatePickerBar />
          <CategoryLinksBar />
          <div className="gallery-container">
            <div className="package-gallery">{packageGallery}</div>
          </div>
        </>
      )}
    </>
  );
}
