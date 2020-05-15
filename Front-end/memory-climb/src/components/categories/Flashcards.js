import React,{Fragment, useContext,useEffect} from 'react';
import Categoryitem from './Flashcarditem'
import FlashcardsContext from '../../context/category/flashcardsContext';
import {Card,CardColumns,Button} from 'react-bootstrap';
import './styles.css';

const Categories = () => {
   const flashcardsContext = useContext(FlashcardsContext);
   const {deleteCategory} = flashcardsContext;

   const { flashcards, filtered, getFlashcards, loading } = flashcardsContext;

   useEffect(() => {
      getFlashcards();
      // eslint-disable-next-line
    }, []);
  
    if (flashcards !== null && flashcards.length === 0 && !loading) {
      return <h4>Please add a Flashcard</h4>;
    }
  

    
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