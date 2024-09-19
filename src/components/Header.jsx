import React from 'react'
import green from '../assets/images/webp/green.webp'

const Header = () => {
  return (
      <div>
          <div className='text-center pt-5 '>
              <h2>Lorem, ipsum.</h2>
          </div>
          <div className='text-center pt-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className='d-flex justify-content-center pt-4'>
              <img src={green} alt="green-image" />
          </div>
    </div>
  )
}

export default Header
