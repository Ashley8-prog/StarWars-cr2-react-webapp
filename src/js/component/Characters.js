
import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "../../styles/Cards.css"

const Characters = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div><h1 className='text-warning cara'>Characters</h1></div>
            <div className='main-container' style={{ height: "25%" }}>
                {store.charactersStarWars.map((value, index) => {
                    return <div className="card" key={index} style={{ height: "25%" }}>
                        <img className="card-img-top" key={index} src={'https://starwars-visualguide.com/assets/img/characters/' + (index + 1) + '.jpg'} onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} alt="Card image cap" />

                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">Hair Color: {value.hair_color}</p>
                            <p className="card-text">Eye-Color: {value.eye_color}</p>
                            <div className='buttons-group'>
                                <Link to={"/single/" + index}>
                                    <button className='btn btn-outline-primary'>Learn More</button>
                                </Link>
                                <button type="button" className="btn btn-outline-warning btn-star" onClick={() => { actions.addFavoriteItems(value.name); }}><i className="far fa-star"></i></button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default Characters