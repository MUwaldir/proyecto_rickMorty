import axios from "axios";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ADD_FIGURE = 'ADD_FIGURE';
export const REMOVE_FIGURE = 'REMOVE_FIGURE';


export const addFav= (character) => {
    return  {
        type:ADD_FAV,
        payload: character,
   }

};


export const removeFav = (id) => {
    return  {
        type:REMOVE_FAV,
        payload: id,
   }
};

export const addFig= (id) => {
     return async (dispatch) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
          dispatch({
            type: ADD_FIGURE,
            payload: response.data
          });
        } catch (error) {
          // Maneja el error si es necesario
        }
      };
//     return  {
//         type:ADD_FIGURE,
//         payload: character,
//    }

};


export const removeFig = (id) => {
    return  {
        type:REMOVE_FIGURE,
        payload: id,
   }
};
