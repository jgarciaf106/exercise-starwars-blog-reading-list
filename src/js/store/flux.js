const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			apiStatus: {
				people: true,
				vehicles: true,
				planets: true
			},
			idSelected: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			setFavorites: fav => {
				const store = getStore();

				setStore(store.favorites.push(fav));
			},
			setRemoveFavorite: toRemove => {
				const store = getStore();
				const updatedArray = store.favorites.filter((item, index) => index !== toRemove);

				setStore({ favorites: updatedArray });
			},
			setIdSelected: fav => {
				setStore({ idSelected: fav });
			},
			loadPeopleData: async () => {
				const store = getStore();
				const apiEndPoint = "https://akabab.github.io/starwars-api/api/all.json"; //"https://www.swapi.tech/api/people"

				const response = await fetch(apiEndPoint);
				if (response.ok === false) {
					setStore((store.apiStatus["people"] = false));
				} else {
					const data = await response.json();
					setStore({ people: data });
				}
			},
			loadVehiclesData: async () => {
				const store = getStore();
				const apiEndPoint = "https://swapi.dev/api/vehicles/";

				const response = await fetch(apiEndPoint);
				if (response.ok === false) {
					setStore((store.apiStatus["vehicles"] = false));
				} else {
					const data = await response.json();
					setStore({ vehicles: data.results });
				}
			},
			loadPlanetsData: async () => {
				const store = getStore();
				const apiEndPoint = "https://swapi.dev/api/planets/";

				const response = await fetch(apiEndPoint);
				if (response.ok === false) {
					setStore((store.apiStatus["planets"] = false));
				} else {
					const data = await response.json();
					setStore({ planets: data.results });
				}
			}
		}
	};
};
export default getState;
