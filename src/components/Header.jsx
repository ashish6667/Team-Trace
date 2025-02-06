import React from 'react'

const Header = ({data}) => {
 
  return (
    <div className='flex items-end justify-between'>
       <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstName} 👏</span></h1>  
       <button className='bg-red-600 font-medium text-lg text-white px-5 py-2 rounded-sm'>Log out</button>
        </div>
  )
}

export default Header