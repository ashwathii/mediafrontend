import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 justify-content-center align-items-center'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius ex recusandae ipsa autem officiis omnis itaque, quos vitae debitis nesciunt optio fugit deleniti fugiat quas sit ipsum ducimus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eos ullam optio fugiat nihil veniam unde. Et, qui rerum illum cupiditate praesentium minus commodi vel odit quaerat eaque iure sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore nostrum accusamus doloremque veniam! Sunt a iusto molestias magni, praesentium asperiores ad veritatis adipisci ipsum? Accusamus necessitatibus cupiditate fuga similique?</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn-warning rounded'>Get started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no" />
        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex justify-content-center flex-column'>
        <h3 className='mb-5'>Features</h3>
        <div className='cards d-flex justify-content-evenly align-items-center w-100'>
          
        <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Managing video</Card.Title> 
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"style={{width:'100%',height:'300px'}} />
      <Card.Body>
        <Card.Title>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
         


      </div>
     
      <div className='border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
     <Row>
      <Col lg={6}>
       <h3>Simple fast and powerful</h3>
       <p><span className='fw-bolder fs-5'>play everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>

       <p><span className='fw-bolder fs-5'>play smoothly :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>

       <p><span className='fw-bolder fs-5'>play and enjoy :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>
      </Col>
      <Col lg={6}>
      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
     </Row>
  </div>

    </>
  )
}

export default LandingPage