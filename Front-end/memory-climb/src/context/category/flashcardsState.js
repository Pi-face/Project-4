import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import flashcardsContext from './flashcardsContext';
import flashcardsReducer from './flashcardsReducer';
import {
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_FLASHCARD,
    FILTER_FLASHCARD,
    CLEAR_FILTER
} from '../types';

const FlashcardsState = props =>{
    const initialState = {
      flashcards:[
        {
           id: 1,
           imagesURL: "https://i.ytimg.com/vi/Kp2bYWRQylk/maxresdefault.jpg",
           question: "What is math?",
           answer: "2+2",
           category: "Math",
          
        },
        {
            id: 2,
            imagesURL: "https://tedideas.files.wordpress.com/2020/03/final_credit-alamy-1.jpg?w=1024",
            question: "What are Animals",
            answer: "Yeah i like animals",
            category: "Animals",
          
        },
        {
            id: 3,
            imagesURL: "https://images.artwanted.com/large/70/4788_66470.jpg",
            question: "Wizards",
            answer: "Wizard Battle",
            category: "Magic Battle",
        }
      ],
      current: null,
      filtered: null,
    }



    const [state, dispatch] = useReducer(flashcardsReducer, initialState)

    //ADD flashcards
    const addFlashcard = flashcard =>{
        flashcard.id = uuidv4();;
        dispatch({type: ADD_FLASHCARD, payload: flashcard});
    };

    //DELETE flashcard
    const deleteFlashcard = id =>{
        dispatch({type: DELETE_FLASHCARD, payload: id});
    };
    //SET CURRENT Flashcard
    const setCurrent = flashcard =>{
        dispatch({type: SET_CURRENT, payload: flashcard});
    };
    //CLEAR CURRENT Flashcard
    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT});
    };
    //UPDATE Flashcard
    const updateFlashcard = flashcard =>{
        dispatch({type: UPDATE_FLASHCARD, payload: flashcard});
    };

    //FILTER Flashcards
    const filterFlashcard = text =>{
        dispatch({type: FILTER_FLASHCARD, payload: text})
    };

    //CLEAR FILTER
    const clearFilter = () =>{
        dispatch({type: CLEAR_FILTER});
    };

    return(
        <flashcardsContext.Provider
        value={{
            flashcards:state.flashcards,
            current: state.current,
            filtered: state.filtered,
            addFlashcard,
            deleteFlashcard,
            setCurrent,
            clearCurrent,
            updateFlashcard,
            filterFlashcard,
            clearFilter,
        }}>
            {props.children}
        </flashcardsContext.Provider>

    )
}

export default FlashcardsState;