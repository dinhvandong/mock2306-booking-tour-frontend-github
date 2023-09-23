import React from 'react'

const Header3 = ({title, sub}) => {
  return (
    <div className='flex flex-col w-[60%] h-[80px] justify-center mt-[100px]  text-white'>
<div className='text-5xl font-bold'>
  {title}
{/* Where to next, Đinh Văn? */}

</div>
<div className='text-2xl mt-[10px]'>
  {sub}
{/* Find exclusive Genius rewards in every corner of the world! */}

</div>
    </div>
  )
}

export default Header3