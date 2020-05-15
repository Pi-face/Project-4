import React, {useReducer} from 'react';
import axios from 'axios';
import flashcardsContext from './flashcardsContext';
import flashcardsReducer from './flashcardsReducer';
import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_FLASHCARD,
    FILTER_FLASHCARD,
    CLEAR_FLASHCARDS,
    CLEAR_FILTER,
    FLASHCARD_ERROR,
} from '../types';

const FlashcardsState = props =>{
    const initialState = {
      flashcards:[],
      current: null,
      filtered: null,
      error: null,
    }



    const [state, dispatch] = useReducer(flashcardsReducer, initialState)

   //Get flashcards
   const getFlashcards = async flashcard =>{
    const config= {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('https://ilikebigbackends.herokuapp.com/api/flashcards');
  
        dispatch({
          type: GET_FLASHCARDS,
          payload: res.data
        });
      } catch (err) {
        dispatch({
          type: FLASHCARD_ERROR,
          payload: err.response.msg
        });
      }
};






    //ADD flashcards
    const addFlashcard = async flashcard =>{
        const config= {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('https://ilikebigbackends.herokuapp.com/api/flashcards', flashcard, config);
      
            dispatch({
              type: ADD_FLASHCARD,
              payload: res.data
            });
          } catch (err) {
            dispatch({
              type: FLASHCARD_ERROR,
              payload: err.response.msg
            });
          }
    };
  
    //DELETE flashcard
    const deleteFlashcard = async id =>{
        try {
            await axios.delete(`https://ilikebigbackends.herokuapp.com/api/flashcards/${id}`);
      
            dispatch({
              type: DELETE_FLASHCARD,
              payload: id
            });
          } catch (err) {
            dispatch({
              type: FLASHCARD_ERROR,
              payload: err.response.msg
            });
          }
    };

    //CLEAR Flashcards
    const clearFlashcards = () =>{
        dispatch({type: CLEAR_FLASHCARDS});
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
            error: state.error,
            addFlashcard,
            deleteFlashcard,
            setCurrent,
            clearCurrent,
            updateFlashcard,
            filterFlashcard,
            clearFilter,
            getFlashcards,
            clearFlashcards
        }}>
            {props.children}
        </flashcardsContext.Provider>

    )
}

export default FlashcardsState;