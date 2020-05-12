import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CATEGORY,
    FILTER_CATEGORY,
    CLEAR_FILTER
} from '../typesCategory';

export default (state, action) =>{
    switch(action.type){
        case ADD_CATEGORY:
            return{
                ...state,
                category: [...state.category, action.payload]
            };
        case DELETE_CATEGORY:
            return{
                ...state,
                category: state.category.filter(category=> category.id !== action.payload)
            };
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
                return{
                    ...state,
                    current: null
                };
        default:
            return state;
    }
}