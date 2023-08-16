import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/MoreInfo.css"

export const DetailsPlanets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">
            <img className="card-img-top more-info-img" key={params.theid} src={'https://starwars-visualguide.com/assets/img/planets/' + (parseInt(params.theid) + 1) + '.jpg'} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} alt="Card image cap" />
            <h1>{store.planetsStarWars.length != 0 ? store.planetsStarWars[params.theid].name : 'Loading'}</h1>
            <p>{store.planetsStarWars.length != 0 ? '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ' : 'Loading'}</p>
            <div className="Extra-info">
                <h3>{store.planetsStarWars.length != 0 ? "Rotation Period:" + " " + store.planetsStarWars[params.theid].rotation_period : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Orbital Period:" + " " + store.planetsStarWars[params.theid].orbital_period : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Diameter:" + " " + store.planetsStarWars[params.theid].diameter : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Climate:" + " " + store.planetsStarWars[params.theid].climate : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Gravity:" + " " + store.planetsStarWars[params.theid].gravity : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Terrain:" + " " + store.planetsStarWars[params.theid].terrain : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Surface Water:" + " " + store.planetsStarWars[params.theid].surface_water : 'Loading'}</h3>
                <h3>{store.planetsStarWars.length != 0 ? "Population:" + " " + store.planetsStarWars[params.theid].population : 'Loading'}</h3>
            </div>
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );

































};

DetailsPlanets.propTypes = {
    match: PropTypes.object
};