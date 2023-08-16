import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/MoreInfo.css"

export const DetailsVehicles = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">
            <img className="card-img-top more-info-img" key={params.theid} src={'https://starwars-visualguide.com/assets/img/vehicles/' + (parseInt(params.theid) + 1) + '.jpg'} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} alt="Card image cap" />
            <h1>{store.vehiclesStarWars.length != 0 ? store.vehiclesStarWars[params.theid].name : 'Loading'}</h1>
            <p>{store.vehiclesStarWars.length != 0 ? '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ' : 'Loading'}</p>
            <div className="Extra-info">
                <h3>{store.vehiclesStarWars.length != 0 ? "Height:" + " " + store.vehiclesStarWars[params.theid].model : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Mass:" + " " + store.vehiclesStarWars[params.theid].manufacturer : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Hair Color:" + " " + store.vehiclesStarWars[params.theid].cost_in_credits : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Skin Color:" + " " + store.vehiclesStarWars[params.theid].max_atmosphering_speed : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Eye Color:" + " " + store.vehiclesStarWars[params.theid].crew : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Birth Year:" + " " + store.vehiclesStarWars[params.theid].passengers : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].cargo_capacity : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].consumables : 'Loading'}</h3>
                <h3>{store.vehiclesStarWars.length != 0 ? "Gender:" + " " + store.vehiclesStarWars[params.theid].vehicle_class : 'Loading'}</h3>
            </div>
            {console.log(params)}
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

DetailsVehicles.propTypes = {
    match: PropTypes.object
};