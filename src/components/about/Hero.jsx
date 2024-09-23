import React from 'react'
import green from '../../assets/images/webp/green.webp';


const hero = () => {
    return (
        <div>
            <div className='text-center pt-5 '>
                <h2>Hello</h2>
            </div>
            <div className='d-flex justify-content-center pt-4'>
                <img src={green} alt="green-image" />
            </div>
        </div>
    )
}


export default hero
