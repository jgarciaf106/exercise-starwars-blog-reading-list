const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: 0,
			idSelected: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			setFavCount: async () => {
				const store = getStore();
				setStore({ favorites: store.favorites + 1 });
			},
			setIdSelected: id => {
				setStore({ idSelected: id });
			},
			loadPeopleData: () => {
				const apiEndPoint = "https://akabab.github.io/starwars-api/api/all.json"; //"https://www.swapi.tech/api/people"

				fetch(apiEndPoint)
					.then(res => res.json())
					.then(data => setStore({ people: data }));
				//.catch(err => console.error(err));
			},
			loadVehiclesData: () => {
				const apiEndPoint = "https://www.swapi.tech/api/vehicles";

				fetch(apiEndPoint)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data }));
				//.catch(err => console.error(err));
			},
			loadPlanetsData: () => {
				const apiEndPoint = "https://www.swapi.tech/api/planets";

				fetch(apiEndPoint)
					.then(res => res.json())
					.then(data => setStore({ planets: data }));
				//.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
