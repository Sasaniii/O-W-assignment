import React from 'react';
import image1 from '../../Images/image1.png';
import IconButtons from './IconButtons';



function NavBar(){
    return(
      <div>
      <div className='items-center'>
        <nav className='lg:flex md:flex bg-white'>

    <img className='pl-12 mr-20 py-6' src={image1} alt=""/>
  
    <div className="text-lg font-semibold flex py-4 ">
      <a href="#responsive-header" className="block    text-black hover: mr-4">
        Glasses
      </a>
      <a href="#responsive-header" className="block    text-black hover:text-white mr-4">
        Sunglasses
      </a>
      <a href="#responsive-header" className="block   text-black hover:text-white mr-4">
        Locations
      </a>
      <a href="#responsive-header" className="block   text-black hover:text-white mr-4">
        Eye Test Info
      </a>
      <a href="#responsive-header" className="block   text-black hover:text-white mr-4" >
        Offers
      </a>
    

    <div className='absolute mt-0 min-w-full -ml-4 text-center z-10 flex justify-center'>
          <div className='mr-8'><button className=' text-sm text-navbarbtn bg-white outline outline-offset-2 outline-navbarbtn outline-1 lg:px-8 py-1 rounded-xl font-bold uppercase tracking-wide sm:content-center sm:p-0 sm:m-0 sm:rounded-lg'>Book an eye test</button></div>
        <IconButtons/> 
        </div>

      

        
      
  </div>
  
        </nav>
        
        </div>  
        
        </div>
    )
}

export default NavBar
