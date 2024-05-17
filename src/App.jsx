import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { CustomButton } from './components/button'
import axios from 'axios'
import { CardCustom } from './components/cardComponent'
import { Outlet } from 'react-router-dom'


function App() {

  
  return (
    <>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className='left'>
              <h4 className='mb-4'>Speak Hope for the Homeless</h4>
              <h1 className='mb-3'>Donate to children & senior citizens</h1>
              <p className='mb-4'>Involves donating one's body after death for medical research, education, or anatomical dissection. Body donation plays a crucial role in advancing medical science</p>
              <CustomButton color={'red'} bgColor={'green'}>Donate Now</CustomButton>
              <CustomButton> Join Volunteers</CustomButton>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='d-flex justify-content-between d-none d-lg-flex'>
              <img src="https://charitfix.vercel.app/theme/assets/images/hero/hero-1.png" alt="" />
              <div className='d-flex flex-column justify-content-between right-tag'>
                <div><h1>1</h1></div>
                <div><h1>2</h1></div>
                <div><h1>3</h1></div>

              </div>
            </div>
          </div>
        </div>
        <div className="row">

          <Outlet/>

        </div>
      </div>
    </>
  )
}

export default App
