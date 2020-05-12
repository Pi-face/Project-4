import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CategoryContext from './categoryContext';
import categoryReducer from './categoryReducer';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CATEGORY,
    FILTER_CATEGORY,
    CLEAR_FILTER
} from '../typesCategory';

const CategoryState = props =>{
    const initialState = {
      category:[
        {
            id:1,
            title:"Math",
          
        },
        {
            id:2,
            title:"History",
          
        },
        {
            id:3,
            title:"Science",

        }
      ],
      current: null
    }



    const [state,dispatch] = useReducer(categoryReducer, initialState)

    //ADD Category
    const addCategory = category =>{
        category.id = uuidv4();;
        dispatch({type: ADD_CATEGORY, payload: category});
    };

    //DELETE Category
    const deleteCategory = id =>{
        dispatch({type: DELETE_CATEGORY, payload: id});
    };
    //SET CURRENT Category
    const setCurrent = category =>{
        dispatch({type: SET_CURRENT, payload: category});
    };
    //CLEAR CURRENT Category
    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT});
    };
    //UPDATE Category
    const updateCategory = category =>{
        dispatch({type: UPDATE_CATEGORY, payload: category});
    };

    //FILTER Category
  
    //CLEAR FILTER
    // console.log('STATE IN CATEGORY STATE',state)
    return(
        <CategoryContext.Provider
        value={{
            category:state.category,
            current: state.current,
            addCategory,
            deleteCategory,
            setCurrent,
            clearCurrent,
            updateCategory,
        }}>
            {props.children}
        </CategoryContext.Provider>

    )
}

export default CategoryState;