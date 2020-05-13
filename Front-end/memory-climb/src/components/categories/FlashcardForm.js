import React,{useState, useContext, useEffect} from 'react';
import Flashcards from './Flashcards';
import {Form,Col,Button} from 'react-bootstrap'
import FlashcardsContext from '../../context/category/flashcardsContext'

const FlashcardForm =()=>{
   const flashcardsContext = useContext(FlashcardsContext)

   const {addFlashcard, current, clearCurrent, updateFlashcard} = flashcardsContext;

   useEffect(()=>{
       if(current !== null){
        setFlashcard(current);
       }else{
        setFlashcard({
            imagesURL: "",
            question: "",
            answer: "",
            category: "",
        })
       }
   },[FlashcardsContext, current])

    const [flashcard,setFlashcard] = useState({
        
    });

    const {question,answer,category,imagesURL} = flashcard;

    const onChange = e =>{
        setFlashcard({...flashcard, [e.target.title]:e.target.value})
     }

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
        addFlashcard(flashcard);
        }else{
        updateFlashcard(flashcard);
        }
       clearAll();
    };

    const clearAll =()=>{
        clearCurrent();
    }

    return(
<div>
    <h2>{current ? 'Edit Flashcard': 'Add Flashcard'}</h2>
<Form onSubmit={onSubmit}>
      <Form.Row>
         <Col>
   <input type="text" placeholder="Question" title="question" value={question} onChange={onChange}/>
   <input type="text" placeholder="Answer" title="answer" value={answer} onChange={onChange}/> 
   <input type="text" placeholder="Category" title="category" value={category} onChange={onChange}/> 
   <input type="text" placeholder="imagesURL" title="imagesURL" value={imagesURL} onChange={onChange}/>  

   <Button variant="dark" value='Add Category' onClick={onSubmit}>{current ? 'Edit': 'Add'}</Button>{' '}
    {current && <div>
        <Button variant="dark" value='Add Category' onClick={clearAll}>Clear</Button>{' '}
        </div>}
         </Col>
      </Form.Row>
</Form>

</div>

    )
}

export default FlashcardForm