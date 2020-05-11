import React, {useReducer} from 'react';
import uuid from 'uuid';
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
      ]  
    }



    const [state,dispatch] = useReducer(categoryReducer, initialState)

    //ADD Category

    //DELETE Category

    //SET CURRENT Category

    //CLEAR CURRENT Category

    //UPDATE Category

    //FILTER Category
  
    //CLEAR FILTER
    // console.log('STATE IN CATEGORY STATE',state)
    return(
        <CategoryContext.Provider
        value={{
            category:state.category
        }}>
            {props.children}
        </CategoryContext.Provider>

    )
}

export default CategoryState;