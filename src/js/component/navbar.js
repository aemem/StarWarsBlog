import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
        <Link to ="/">
           <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="star wars logo" id="swLogo"/>
        </Link>
				
				<div className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              id="favsButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorite.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropDownMenu">
                {store.favorite.map((e, i) => {
                  return (
                    <li key = {i}>
                      <div className="dropdown-item">{e}</div> 
                    </li>
                  );
                })
              }
            </ul>
          </div>
			</div>
		</nav>
	);

 

};
