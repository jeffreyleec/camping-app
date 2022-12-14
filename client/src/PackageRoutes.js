import { Package } from "./pages/Package";
import { PackageList } from "./components/PackageList";
import { NewPackage } from "./components/NewPackage";
import { Routes, Route } from "react-router-dom";

export function PackageRoutes() {
  // const { startDate, endDate, diff } = useContext(searchContext);
  // console.log(startDate)
  return ( 
    <>
    <Routes>
      <Route index element={<PackageList />} />
      <Route path=":id" element={<Package />} />
      <Route path="new" element={<NewPackage />} />
    </Routes>
    </>
  );
}
