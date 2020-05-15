import React,{useContext} from 'react';
import {Card,Button,ListGroup} from 'react-bootstrap';
import FlashcardsContext from '../../context/category/flashcardsContext';

const Categoryitem = ({ flashcards }) =>{
    console.log('flashcards flashcardsitem',flashcards)
    const flashcardsContext = useContext(FlashcardsContext);
    const {deleteFlashcard,setCurrent,clearCurrent} = flashcardsContext;

    const { _id , question , answer, category, imagesURL} = flashcards;

    const onDelete = () =>{
        deleteFlashcard(_id);
        clearCurrent();
     }

    return(
        <div>
            <Card bg='light' text='dark'>
                    <Card.Img variant="top" src={imagesURL} />
                    <ListGroup.Item>Question:{' '+question}</ListGroup.Item>
                    <ListGroup.Item>Answer:{' '+answer}</ListGroup.Item>
                    <ListGroup.Item>Category:{' '+category}</ListGroup.Item>
                    <Button variant="light" onClick={()=>setCurrent(flashcards)}>Edit</Button>
                    <Button variant="dark" onClick={onDelete}>Delete</Button>  
            </Card>
        </div>
    )
}

export default Categoryitem