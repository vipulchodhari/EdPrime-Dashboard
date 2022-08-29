import { RECEIVE_FETCHDATA } from "../action/actionTypes"

const init_state = {
     data: []
}

export const categoryReducer = (state=init_state, action) => {
    
    switch(action.type){
        case RECEIVE_FETCHDATA:
            console.log("reducer data", action);
            return {
                ...state,
                data: action.data
            }

            default:
                return state
    }
}