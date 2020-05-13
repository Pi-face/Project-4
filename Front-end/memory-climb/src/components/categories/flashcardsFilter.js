import React,{useContext, useRef, useEffect}from 'react'
import FlashcardsContext from '../../context/category/flashcardsContext'


const FlashcardsFilter = () =>{
    const flashcardsContext = useContext(FlashcardsContext);
    const text = useRef('');

    const {filterFlashcard,clearFilter,filtered} = flashcardsContext;

    useEffect(()=>{
        if(filtered === null){
          text.current.value ='';
        }
    })

    const onChange = e =>{
        if(text.current.value !== ''){
            filterFlashcard(e.target.value);
        }else{
            clearFilter();
        } 

    }

    return(
        <form>
         <input ref={text} type='text' placeholder='Search by Category' onChange={onChange}></input>

        </form>
    )
}


export default FlashcardsFilter