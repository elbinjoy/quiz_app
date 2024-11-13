import React from 'react'
import './Home.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
     
  <div className='container'>
            <div className='homee'>
                    <div className='text-xl  bg-transparent	'>welcome to quiz time
                    </div>
                    <div class="centered">
                        <Link to={'/quiz'}>  <Button className='gets' variant="contained">Get Started</Button> </Link>
                    </div>
            </div>
    
  </div>
        
        
    
    </>
  )
}

export default Home