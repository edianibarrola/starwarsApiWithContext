const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],

			planetList: [],

			favorites: []
		},
		actions: {
			addToFavorites: (uid, details) => {
				console.log(details);
				const store = getStore();
				const newFavorites = store.favorites.concat({
					uid: uid,
					details: details
				});
				setStore({
					favorites: newFavorites
				});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadInitialData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ peopleList: jsonifiedResponse.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				//2nd fetch for planet list
				fetch("https://www.swapi.tech/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ planetList: jsonifiedResponse.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			removeListItem: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((input, index) => index != id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
