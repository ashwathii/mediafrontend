import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteVideo, historyVideo } from '../services/allApi';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function Videocard({displayVideo,setdeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

const handleShow=async()=>{
  setShow(true)


/* date and time */
const{caption,embedLink}=displayVideo
  const today=new Date()
  const timestamp=new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
minute:'2-digit',second:'2-digit'}).format(today)
console.log(timestamp);

let videoDetails={
  caption,embedLink,timestamp
}

const response =await historyVideo(videoDetails)
console.log(response);

}


const removeVideo=async(id)=>{
  const response = await deleteVideo(id)
  setdeleteVideoStatus(true)
}
//function for drag
const dragstart=(e,id)=>{
console.log(`card is dragged:${id}`);
e.dataTransfer.setData("Videocard",id)
}

  return (
    <>
    
    
    <Card style={{ width: '100%',height:'400px' }} className='mb-4' draggable onDragStart={(e)=>dragstart(e,displayVideo?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title  className='d-flex justify-content-between align-items-center'>
          <h6>{displayVideo.caption}</h6>

        <Button onClick={()=>removeVideo(displayVideo?.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>
        </Card.Title>
        
        
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400px" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
          
        
      </Modal>

    </>
  )
}

export default Videocard 