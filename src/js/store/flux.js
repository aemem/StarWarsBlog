const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			info: {},
			people: [],
			infoChars: {},
			vehicles: [],
			infoVehicles: {},
			favorite: []
	
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const data = await response.json();
				console.log(data);
				setStore({planets: data.results})
			},

			getOnePlanet: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				const data = await response.json();
				console.log(data);
				setStore({info: data.result.properties})
			},

			getCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const dataChar = await response.json();
				console.log(dataChar);
				setStore({people: dataChar.results})
			},

			getOneCharacter: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				const dataOneChar = await response.json();
				console.log(dataOneChar);
				setStore({infoChars: dataOneChar.result.properties})
			},

			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				const dataVehi = await response.json();
				setStore({vehicles: dataVehi.results})
			},

			getOneVehicle: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
				const dataOneVehi = await response.json();
				console.log(dataOneVehi);
				setStore({infoVehicles: dataOneVehi.result.properties})
			},

			addFav: (name) => {
				const store = getStore();
				if(!store.favorite.includes(name)){
					setStore({favorite : [...store.favorite, name]})
				}
				else {
						setStore({favorite : store.favorite.filter((item) => item != name )})
					}
				}
			}
			
			}
		}

export default getState;
