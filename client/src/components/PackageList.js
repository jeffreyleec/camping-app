//var packages = require('./db/mockData/packages.js')
import { useState, useEffect } from 'react'
// import { packages } from '../mock_data/packages'
import axios from 'axios'

/**
 *Internal modules
 **/

import PackageListItem from './PackageListItem'
import './styles/PackageList.scss'

export function PackageList() {
  const [packages, setPackages] = useState([])
  useEffect(() => {
    axios.get('/api/packages').then((res) => setPackages(res.data.data.rows))
  }, [])

  const packageGallery = packages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        image={packageItem.image}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        location={packageItem.location}
        availability={packageItem.availability}
      />
    )
  })

  return (
    <div className='gallery-container'>
      <div className='package-gallery'>{packageGallery}</div>
    </div>
  )
}

// <>
//   <h1>This is my list of Packages</h1>
//   {/* <div>{JSON.stringify(packages[0])}</div> */}
//   <div>
//     <ul>
//       {packages.map((pack) => (
//         <li>{JSON.stringify(pack)}</li>

//       ))}
//     </ul>
//   </div>
// </>

// return (
//   <>
//     {packages.length ? (
//       <div>
//         <h1>Packages</h1>
//         <ul>
//           {packages.map((item) => (
//             <li>{item}</li>
//           ))}
//         </ul>
//       </div>
//     ) : (
//       <h1>No Packages</h1>
//     )}
//   </>
// );
