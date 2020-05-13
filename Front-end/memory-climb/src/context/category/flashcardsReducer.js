import {
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_FLASHCARD,
    FILTER_FLASHCARD,
    CLEAR_FILTER
} from '../types';
import Category from '../../components/categories/FlashcardForm';

export default (state, action) =>{
    switch(action.type){
        case ADD_FLASHCARD:
            return{
                ...state,
                flashcards: [...state.flashcards, action.payload]
            };
        case UPDATE_FLASHCARD:
            return{
                ...state,
                flashcards: state.flashcards.map(card => 
                    card.id === action.payload.id ? action.payload : card)
            };
        case DELETE_FLASHCARD:
            return{
                ...state,
                flashcards: state.flashcards.filter(card=> card.id !== action.payload)
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
        case FILTER_FLASHCARD:
            return{
                ...state,
                filtered: state.flashcards.filter(card =>{
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return card.category.match(regex) || card.question.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                    filtered: null
                };
        default:
            return state;
    }
}