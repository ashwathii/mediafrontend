import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Videocard from './Videocard'
import {Row} from 'react-bootstrap'
import { getAllVideos } from '../services/allApi'

function View1({uploadVideoStatus}) {


const [allVideos,setAllVideos]=useState([])

const [deleteVideoStatus,setdeleteVideoStatus]=useState(false)



const getAllUploadedVideo=async()=>{
  const response=await getAllVideos()
/*   console.log(response);
 */
const {data}=response
/* console.log(data);
 */
setAllVideos(data)
}




useEffect(()=>{
  getAllUploadedVideo()
  setdeleteVideoStatus(false)
},[uploadVideoStatus,deleteVideoStatus])




  return (
    <>
   <Row>

{ 
allVideos.length>0?
allVideos.map((video)=> (  <Col sm={12} md={6} lg={4} xl={3}>
        <Videocard displayVideo={video} setdeleteVideoStatus={setdeleteVideoStatus}/>
    </Col>))
:
<p>Nothing to display</p>
}
</Row>
    
    </>
  )
}

export default View1