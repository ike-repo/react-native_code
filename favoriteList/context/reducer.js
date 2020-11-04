export function reducer(action, state){
    switch (action.type){
        case "ADD_TO_FAVORITE":
            // const newList = [...state.favoriteList]
            // newList.push(action.payload.selectedRestaurant);
            // state.favoriteList = newList;
            // return [...state];
            // ECMA SCRIPT WAY OF ABOVE:
             return { ...state, 
             favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
             }
        default:
            return state;
    }
}