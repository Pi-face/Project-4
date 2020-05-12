import React, { Fragment } from 'react';
import Categories from '../categories/Categories';
import CategoryForm from '../categories/CategoryForm'

const Home = () => {
    return(
    <div className='categories'>
        <div>
            {/* {Categories Section} */}
          <CategoryForm/>
        </div>
        <div>
          <Categories/>
       </div>
    </div>

    )
}

export default Home