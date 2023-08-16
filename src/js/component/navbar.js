import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark border-bottom border-warning mb-3">
			<div className='d-flex'>
				<Link to="/">
					<span className="navbar-brand mb-0 w-0"><img className="img-fluid w-25 mt-4 ms-2 " src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo.png" /></span>
				</Link>
				<div className="dropdown ml-auto">
					<button className="btn btn-warning dropdown-toggle m-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favoriteItems.map((value, index) => {
							return <li className='list-item'
								key={index}>
								<a className='dropdown-item' href="#">{value}
									<button onClick={() => { actions.deleteFavoriteItems(index) }}><i className="fas fa-trash"></i></button>
								</a>
							</li>
						})}
					</ul>
				</div>
			</div>


		</nav>
	);
};
