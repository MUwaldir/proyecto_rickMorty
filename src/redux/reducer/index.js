/* 4️⃣ ***REDUCER*** 4️⃣ */

import { ADD_FAV, REMOVE_FAV } from "../actions";

/* Importa las action-types aquí. */

const initialState = {
    myFavorites: []
};


const rootReducer = (state = initialState, action) => {
   switch (
      action.type
      // Acá va tu código:
   ) {

      case ADD_FAV :
            return {
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            }
        
     
        case REMOVE_FAV :
            const remFavorite = state.myFavorites.filter((fav) => fav.id !== action.payload)
            return {
                ...state,
                myFavorites:remFavorite
            }


            

        default:
            return {
                ...state
            }

   }
};

export default rootReducer;
