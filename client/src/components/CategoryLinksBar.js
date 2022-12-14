import PersonIcon from "../assets/person.svg";
import "./styles/CategoryLinksBar.scss";
import { useContext } from "react";
import { searchContext } from "../providers/SearchProvider";

export function CategoryLinksBar() {
  const { setCategories, category } = useContext(searchContext);

  return (
    <div className="category-links-container">
      <div className="CategoryLinksBar">
        <div className={category === 1 ? "category-group-selected" : "category-group" } onClick={() => setCategories(1)}>
          {/* <Link to="/category/1" onClick={()=>setCategory(1)}> */}
          <img src={PersonIcon} alt="one-person-package" height="40px" />
          {/* </Link> */}
        </div>

        <div className={category === 2 ? "category-group-selected" : "category-group" } onClick={() => setCategories(2)}>
          {/* <Link to="/category/2" onClick={()=>setCategory(2)}> */}
          <img src={PersonIcon} alt="two-person-package" height="40px" />
          <img src={PersonIcon} alt="two-person-package" height="40px" />
          {/* </Link> */}
        </div>

        <div className={category === 3 ? "category-group-selected" : "category-group" } onClick={() => setCategories(3)}>
          {/* <Link to="/category/3" onClick={()=>setCategory(3)} > */}
          <img src={PersonIcon} alt="three-person-package" height="40px" />
          <img src={PersonIcon} alt="three-person-package" height="40px" />
          <img src={PersonIcon} alt="three-person-package" height="40px" />
          {/* </Link> */}
        </div>

        <div className={category === 4 ? "category-group-selected" : "category-group" } onClick={() => setCategories(4)}>
          {/* <Link to="/category/4" onClick={()=>setCategory(4)}> */}
          <img src={PersonIcon} alt="four-person-package" height="40px" />
          <img src={PersonIcon} alt="four-person-package" height="40px" />
          <img src={PersonIcon} alt="four-person-package" height="40px" />
          <img src={PersonIcon} alt="four-person-package" height="40px" />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
