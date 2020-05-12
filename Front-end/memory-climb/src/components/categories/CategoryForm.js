import React,{useState, useContext, useEffect} from 'react';
import Categories from './Categories';
import {Form,Col,Button} from 'react-bootstrap'
import CategoryContext from '../../context/category/categoryContext'

const Category =()=>{
   const categoryContext = useContext(CategoryContext)

   const {addCategory, current, clearCurrent, updateCategory} = categoryContext;

   useEffect(()=>{
       if(current !== null){
        setCategory(current);
       }else{
        setCategory({
            title:''
        })
       }
   },[CategoryContext, current])

    const [category,setCategory] = useState({
        title:''
    });
    // console.log('CATEGORY IN FORM',category)

    const {title} = category;

    const onChange = e =>{
        setCategory({...category, [e.target.title]:e.target.value})
     }

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
        addCategory(category);
        }else{
        updateCategory(category);
        }
       clearAll();
    };

    const clearAll =()=>{
        clearCurrent();
    }

    return(
<div>
    <h2>{current ? 'Edit Category': 'Add Category'}</h2>
    {/* <input type="text" placeholder="title" title="title" value={title} onChange={onChange}/
    > */}
<Form onSubmit={onSubmit}>
      <Form.Row>
         <Col>
   <input 
   type="text" 
   placeholder="Title" 
   title="title" 
   value={title} 
   onChange={onChange}
   />    
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

export default Category