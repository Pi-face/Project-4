import React,{Fragment, useContext} from 'react';
import CategoryContext from '../../context/category/categoryContext';
import {Card,CardColumns, CardDeck} from 'react-bootstrap';
import './styles.css';

const Categories = () => {
   const categoryContext = useContext(CategoryContext);

   const { category } = categoryContext;


    return(
        
        <Fragment>
          <h1>Categories</h1>
          <CardColumns>
                 <Card bg='light' text='dark' className="addbutton"> 
                    <Card.Body>ADD</Card.Body>
                 </Card>
          {category.map(cate => 
             <div className='category'>            
                 <Card bg='light' text='dark'>
                    <Card.Img variant="top" src="" />
                    <Card.Body>{cate.title}</Card.Body>
                 </Card>
            </div>)}
         </CardColumns>
        </Fragment>
    )
}

export default Categories