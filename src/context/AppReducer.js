export default (state, action) => {
    switch (action.type) {
      case "ADD_WETHER_LIST":
        return {
          ...state,
          favoriteslist: [action.payload, ...state.favoriteslist],
        };
      case "REMOVE_WETHER_LIST":
        return {
            ...state,
            favoriteslist: state.favoriteslist.filter(
                (city) => city.keys !== action.payload
            ),
        };
      default:
        return state;
    }
  };