import React,{useContext} from 'react';
import {Card,CardColumns,Button} from 'react-bootstrap';
import CategoryContext from '../../context/category/categoryContext';

const Categoryitem = ({ category }) =>{

    const categoryContext = useContext(CategoryContext);
    const {deleteCategory,setCurrent} = categoryContext;

    const { id , title} = category;

    const onDelete = () =>{
        deleteCategory(id)
     }


    return(
        <div>
            <Card bg='light' text='dark'>
                    <Card.Img variant="top" src="" />
                    <Card.Body>{title}</Card.Body>
                    <Button variant="light" onClick={()=>setCurrent(category)}>Edit</Button>
                    <Button variant="dark" onClick={onDelete}>Delete</Button>  
            </Card>
        </div>
    )
}

export default Categoryitem