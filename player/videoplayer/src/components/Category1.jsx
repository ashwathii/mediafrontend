import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory, updatecategory, videoPass } from '../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';

 */

function Category1() {

  const [show, setShow] = useState(false);
const [categoryName,setCategoryName]=useState("")
const[category,setCategory]=useState([])

const handleAddCategory=async()=>{
  console.log(categoryName);
  if(categoryName){

    let body={
      categoryName,
      allvideos:[]
    }

const response= await addCategory(body)
console.log(response);

if(response.status>=200 && response.status<300){

  toast.success('Category added')
  setCategoryName("")
  //close the modal
  handleClose()
}
else{
  toast.error('Something went wrong.try again')
}


  }
  else{
    toast.warning('Please fill')
  }
}

//fn to get all category
const allCategory= async()=>{
  const {data}= await getAllCategory()
  /* console.log(data); */
  setCategory(data)
}
console.log(category);

//function to delete category
const removeCategory=async(id)=>{
  await deleteCategory(id)
  allCategory()

}
//to prevent reload
const dragover=(e)=>{
  e.preventDefault()
}
//to drop video card
const videodrop= async(e,Categoryid)=>{
  console.log('category which videocard is dropped:',Categoryid);
  let videoID=e.dataTransfer.getData("videoID")
  console.log(videoID);
//api to get video
  const {data}=await videoPass(videoID)
console.log(data);


let selectedcategory=category.find((item)=>item?.id===Categoryid)
selectedcategory.allvideos.push(data)
//update category
console.log(selectedcategory);
await updatecategory(Categoryid,selectedcategory)

allCategory()

}

useEffect(()=>{
  allCategory()
},[])





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <> 
    
    <div className='d-grid ms-3' >
        <button onClick={handleShow} className='btn btn-warning'>
            Add new category
        </button>
    </div>

    {category?.length>0?
      category.map((item)=>(<div className='m-5 border border-secondary rounded p-3'droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videodrop(e,item?.id)}>
      <div className='d-flex  justify-content-between align-items-center'>
        <h6>{item.categoryName}</h6>
        <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </div>
     
    </div>))
      :
    <p className='fw-bolder fs-5 m-3 text-danger'>Nothing to display</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name </Form.Label>
        <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />
        
      </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='dark' autoClose={3000}/>

     </>
  )
}

export default Category1