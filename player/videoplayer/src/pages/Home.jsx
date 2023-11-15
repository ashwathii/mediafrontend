import React, { useState } from 'react'

import{Link} from 'react-router-dom'
import Add1 from '../components/Add1'
import View1 from '../components/View1'
import Category1 from '../components/Category1'
function Home() {

const[uploadVideoStatus,setUploadVideoStatus]=useState({})





  return (
    <div>
      <div className='container mt-5 mb-5 d-flex justify-content-between align=items-center'>
         <div className='add-videos'>
       <Add1 setUploadVideoStatus={setUploadVideoStatus}/>
         </div>
    <Link to={'/watch-history'} style={{textdecoration:'none',color:'white',fontSize:'30px'}}>Watchhistory
    </Link>
      </div>
      <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
        <div className='all-videos col-lg-9'>
          <h4 className='mb-5'>All videos</h4>
       <View1 uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className='category col-lg-3'>
        
        <Category1/>
        </div>
      </div>
    </div>
  )
}

export default Home