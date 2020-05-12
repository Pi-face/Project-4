import React,{useState, useContext} from 'react';
import Categories from './Categories';
import {Form,Col,Button} from 'react-bootstrap'
import CategoryContext from '../../context/category/categoryContext'

const Category =()=>{
   const categoryContext = useContext(CategoryContext)

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
        categoryContext.addCategory(category);
        setCategory({
            title:''
        })
    }
    return(
<div>
    <h2>Add Category</h2>
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
   <Button variant="dark" value='Add Category' onClick={onSubmit}>Add</Button>{' '}
   </Col>
      </Form.Row>
</Form>

</div>

    )
}

export default Category