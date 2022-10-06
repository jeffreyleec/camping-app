import './styles/Package.scss'
import { useParams } from 'react-router-dom'
// import { packages } from '../mock_data/packages'
import { ReactCalendar } from '../components/Calendar'
import { formatDateTitles } from '../helpers/formatDateTitles'
import { BookingBox } from '../components/BookingBox'
import { PackageInfoCard } from '../components/PackageInfoCard'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { searchContext } from "../providers/SearchProvider";
import useContext from "../providers/SearchProvider";
// import NotFound from "./NotFound.js"

export function Package() {
  const { id } = useParams()
  const { startDate, endDate, diff } = useContext(searchContext);
  // const currentPackage = packages.filter((pack) => pack.id === Number(id))

  // <PackageListItem
  //       key={packageItem.id}
  //       image={packageItem.image}
  //       id={packageItem.id}
  //       userID={packageItem.user_id}
  //       price={packageItem.price}
  //       category={packageItem.category}
  //       location={packageItem.location}
  //       availability={packageItem.availability}
  //     />

  const [packageItem, setPackageItem] = useState({})
  useEffect(() => {
    axios.get(`/api/package/${id}`).then((res) => {
      setPackageItem(res.data.data.rows[0])
    })
  }, [id])

  console.log(packageItem);
  
  return (
    <div className='Package'>
    {!packageItem ? <h1>Package Not Found</h1> : <><div className='package-top'>
        <div>
          {packageItem.package_img ? <img src={require(`../assets/package_imgs/${packageItem.package_img}.png`)} alt='img' className='package-img' /> : <div width="2556px" height="1648px"/>}
        </div>
        <div className='card'>
          <PackageInfoCard
            package_img={packageItem.package_img}
            tent={packageItem.tent_description}
            bags={packageItem.bags_description}
            lantern={packageItem.lantern_description}
            cooking={packageItem.cooking_description}
          />
        </div>
      </div>
      <div className='package-bottom'>
        <div>
          <h2>
            {formatDateTitles(packageItem.category)} Person Package
            <br />
            Gear owned by user {packageItem.user_id}
          </h2>
          <p className='description-box'>{packageItem.description}</p>
        </div>
        <BookingBox price={packageItem.price} packageID={packageItem.id} startDate={startDate} endDate={endDate} diff={diff} />
      </div></>}
      
    </div>
  )
}
