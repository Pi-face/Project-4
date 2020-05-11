import React,{Fragment, useContext} from 'react';
import CategoryContext from '../../context/category/categoryContext';

const Categories = () => {
   const categoryContext = useContext(CategoryContext);

   const { category } = categoryContext;


    return(
        <Fragment>
        {category.map(cate => <div className='category'>{cate.title}</div>)}
        </Fragment>
    )
}

export default Categories