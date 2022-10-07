import "./styles/Package.scss";
import { useParams } from "react-router-dom";
// import { packages } from '../mock_data/packages'
import { ReactCalendar } from "../components/Calendar";
import { formatDateTitles } from "../helpers/formatDateTitles";
import { BookingBox } from "../components/BookingBox";
import { PackageInfoCard } from "../components/PackageInfoCard";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { searchContext } from "../providers/SearchProvider";
import useContext from "../providers/SearchProvider";
// import NotFound from "./NotFound.js"

export function Package() {
  const { id } = useParams();
  const { startDate, endDate, diff } = useContext(searchContext);
  const [packageItem, setPackageItem] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    if (isNaN(+id)) {
      setLoading(false)
      return setPackageItem({});
    } else {
      axios
        .get(`/api/packages/${id}`)
        .then((res) => {
          if (res.data.data.rows.length === 0) {
            setLoading(false)
            return setPackageItem({});
          } else {
            setPackageItem(res.data.data.rows[0]);
            setTimeout(() => {
              return setLoading(false)

            },200)
          }
        })
        .catch(function (error) {
          return setPackageItem({});
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (isNaN(+id)) {
  //     return setPackageItem({});
  //   } else {
  //     axios.get(`/api/packages/${id}`)
  //   // .then((res)=> console.log(res))
  //   .then((res) => {
  //     if (res.data.data.rows.length === 0) {
  //       return setPackageItem({})
  //     } else {
  //       return setPackageItem(res.data.data.rows[0])
  //     }
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //     return setPackageItem({});
  //   })
  //   return ()=>console.log('This is my cleanup')
  //   }
  // }, [id])

  return (
    <div className="Package">
      {loading && <h1>Loading Page</h1>}
      {(!packageItem.id && !loading) && <h1>Package Not Found</h1>}
      {(packageItem.id && !loading)  && (
        <>
          <div className="package-top">
            <div className="empty-div">
              {loading ? (
                <div></div>
              ) : (
                <img
                  src={require(`../assets/package_imgs/${packageItem.package_img}.png`)}
                  alt="img"
                  className="package-img"
                />
              )}
            </div>
            <div className="card">
              <PackageInfoCard
                package_img={packageItem.package_img}
                tent={packageItem.tent_description}
                bags={packageItem.bags_description}
                lantern={packageItem.lantern_description}
                cooking={packageItem.cooking_description}
              />
            </div>
          </div>
          <div className="package-bottom">
            <div>
              <h2>
                {formatDateTitles(packageItem.category)} Person Package
                <br />
                Gear owned by user {packageItem.user_id}
              </h2>
              <p className="description-box">{packageItem.description}</p>
            </div>
            <BookingBox price={packageItem.price} packageID={packageItem.id} startDate={startDate} endDate={endDate} diff={diff} />
          </div>
        </>
      )}
    </div>
  );
}
