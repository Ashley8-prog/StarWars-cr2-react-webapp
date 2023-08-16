const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			charactersStarWars: [

			],
			planetsStarWars: [

			],
			vehiclesStarWars: [

			],
			favoriteItems: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//function to update myCharacters
			fetchCharactersStarWars: () => {
				fetch('https://swapi.dev/api/people')
					.then(response => response.json())
					//SetStore se utiliza para guardar la data en los arrays de store.
					.then(data => {
						console.log(data);
						setStore({ charactersStarWars: data.results })
					})
					.catch(err => err);
			},
			fetchPlanetsStarWars: () => {
				fetch('https://swapi.dev/api/planets')
					.then(response => response.json())
					//SetStore se utiliza para guardar la data en los arrays de store.
					.then(data => {
						console.log(data);
						setStore({ planetsStarWars: data.results })
					})
					.catch(err => err);
			},
			fetchVehiclesStarWars: () => {
				fetch('https://swapi.dev/api/vehicles')
					.then(response => response.json())
					//SetStore se utiliza para guardar la data en los arrays de store.
					.then(data => {
						console.log(data);
						setStore({ vehiclesStarWars: data.results })
					})
					.catch(err => err);
			},
			addFavoriteItems: (newItem) => {
				const store = getStore();
				setStore({ favoriteItems: [newItem, ...store.favoriteItems] })
				localStorage.setItem("favoriteItems", JSON.stringify(store.favoriteItems));
			},
			deleteFavoriteItems: (position) => {
				const store = getStore();
				let newFavoriteList = store.favoriteItems.filter((favorite, index) => index != position)
				setStore({ favoriteItems: newFavoriteList })

			}

		}
	};
};

export default getState;
