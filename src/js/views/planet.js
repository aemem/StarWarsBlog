import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

    useEffect(() => {
		actions.getOnePlanet(id)
	}, [])

	return (
		<div className="container">
            <div className="row">
                <div className="col-6">
                <img id="planetPic" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/star_wars_4_una_nueva_esperanza_george_lucas.jpg?resize=1200%2C800&quality=50&strip=all&ssl=1" alt="planet"/>
                </div>
                <div className="col-6">
                <h3>{store.info.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu tortor congue, viverra lectus non, imperdiet est. Nullam eget dolor et lacus bibendum lobortis et eget neque. Donec consequat ante eget sem imperdiet tristique. Aliquam in nisl sed sapien aliquet interdum. Cras id consectetur lacus.</p>
                </div> 
            </div>
            <div className="row mt-3">
                <p className="col-3 planetProp border border-danger ">Climate: {store.info.climate}</p>
                <p className="col-3 planetProp border border-danger">Terrain: {store.info.terrain}</p>
                <p className="col-3 planetProp border border-danger">Diameter: {store.info.diameter}</p>
                <p className="col-3 planetProp border border-danger">Population: {store.info.population}</p>
            </div>
            
            <Link to ="/">
                <button className="btn btn-outline-primary homeButton mx-auto">Back to Home</button>
            </Link>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};