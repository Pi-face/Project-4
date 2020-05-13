import React,{Fragment, useContext} from 'react';
import Categoryitem from './Flashcarditem'
import FlashcardsContext from '../../context/category/flashcardsContext';
import {Card,CardColumns,Button} from 'react-bootstrap';
import './styles.css';

const Categories = () => {
   const flashcardsContext = useContext(FlashcardsContext);
   const {deleteCategory} = flashcardsContext;

   const { flashcards, filtered } = flashcardsContext;

    
    return(

 <Fragment>
    <h2>Flashcards</h2>
    <CardColumns>
       {filtered !== null ? filtered.map(cards => <Categoryitem key={cards.id} flashcards={cards}/> ) :
       flashcards.map(cards =><Categoryitem key={cards.id} flashcards={cards}/>)}
      </CardColumns>
   </Fragment>
    )
}

export default Categories