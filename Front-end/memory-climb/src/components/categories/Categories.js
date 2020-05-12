import React,{Fragment, useContext} from 'react';
import Categoryitem from '../categories/Categoryitem'
import CategoryContext from '../../context/category/categoryContext';
import {Card,CardColumns,Button} from 'react-bootstrap';
import './styles.css';

const Categories = () => {
   const categoryContext = useContext(CategoryContext);
   const {deleteCategory} = categoryContext;

   const { category } = categoryContext;

    
    return(

<Fragment>
    <h2>Categories</h2>
      <CardColumns>
          {category.map(cate =>
            <Categoryitem category={cate}/> 
            )}
      </CardColumns>
   </Fragment>
    )
}

export default Categories