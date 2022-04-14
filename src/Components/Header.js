import React from 'react'

export const Header = ({heading}) => {
  return (
    <>
     <div className='row container-fluid'>
      <div className='col-md-6'>
        <h1 className='text-primary border-bottom py-2'>{heading}</h1>
        </div>
     </div>
    </>
  )
}
