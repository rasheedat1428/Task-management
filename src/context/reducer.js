import { ADD, DELETE, UPDATE } from "./types"

export const reducer = (state, action) => {
switch (action.type){
    case ADD: 
        return {...state, tasks:[...state.tasks, action.payload]}
    case DELETE: 
        return {...state, tasks: state.tasks.filter((obj) => obj.id !== action.payload)};
    case UPDATE:
        return {
            ...state, tasks: state.tasks.map((obj) => {
                if (obj.id === action.payload) {
                    obj.reminder = !obj.reminder
                }
                return obj;
            }),
        };
        default:
        return state;
};
};