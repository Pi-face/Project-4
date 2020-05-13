import React, { Fragment } from 'react';
import Flashcards from '../categories/Flashcards';
import CategoryForm from '../categories/FlashcardForm'
import FlashcardsFilter from '../categories/flashcardsFilter'

const Home = () => {
    return(
    <div className='categories'>
        <div>
            {/* {Categories Section} */}
          <CategoryForm/>
          <FlashcardsFilter/>
        </div>
        <div>
          <Flashcards/>
       </div>
    </div>

    )
}

export default Home