/* 4️⃣ ***REDUCER*** 4️⃣ */

import { ADD_FAV, ADD_FIGURE, REMOVE_FAV, REMOVE_FIGURE } from "../actions";

/* Importa las action-types aquí. */

const initialState = {
    myFavorites: [],
    figures:[]
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

        case ADD_FIGURE :
            return {
                ...state,
                figures:[...state.figures, action.payload]
            }

        case REMOVE_FIGURE :
            const remFigure = state.figures.filter((fig) => fig.id !== action.payload)
            return {
                ...state,
                figures:remFigure
            }
            

        default:
            return {
                ...state
            }

   }
};

export default rootReducer;
