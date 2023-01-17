import { ADD, CHANGE_SHOW_FORM, DELETE, UPDATE, UPDATE_USER } from "./types"

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
                    obj = {...obj, reminder: !obj.reminder};
                }
                return obj;
            }),
        };
        case CHANGE_SHOW_FORM: 
            return {...state, showForm: !state.showForm,};

        case UPDATE_USER: 
            return {...state,
                user: action.payload
        };
        
        default:
        return state;
};
};