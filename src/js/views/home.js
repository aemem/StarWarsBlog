import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context);
	

	useEffect(() => {
		actions.getPlanets()
	}, [])

	return (
		<div className="container">
			<h2>Planets</h2>
			<div className="home row flex-nowrap">
				{store.planets.map((planet) => {
					return <div key={planet.uid} className="card">
							<img className="card-img-top" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/star_wars_4_una_nueva_esperanza_george_lucas.jpg?resize=1200%2C800&quality=50&strip=all&ssl=1" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text"></p>
								<Link to={"/planet/" + planet.uid}>
									<button className="btn btn-outline-warning">Learn More</button>
								</Link>
									<button href="#" className="btn btn-outline-danger favButton" onClick={() => {
										actions.addFav(planet.name)
									}}><i className="fa-regular fa-heart"></i></button>
							</div>
						</div>
				})}
			</div>
		</div>
	);
}
	
