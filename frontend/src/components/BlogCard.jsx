import React from 'react'

import {AiFillLike} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BlogCard = (item) => {
  
  return (

      <Link to={`/blog/${item.props.id}`} className="flex flex-col gap-3 md:w-[350px] text-white rounded-lg bg-[#183D3D] shadow-xl">
        {/* image */}
        <img className='md:w-[350px] rounded-lg'
        src="https://plus.unsplash.com/premium_photo-1695028377445-30e082fc4cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
       
       {/* tags */}
        {/* <div className='flex gap-4 px-4 flex-wrap'>
          {item.props.tags.map((tag)=>{
              return <h2 key={tag} className='border-white border-2 rounded px-2 py-1 text-sm'>{tag}</h2>
          })}
          
        </div> */}

        {/*  title and body */}
        <a href='' className='text-lg font-bold px-4'>{item.props.title}</a>
        <a href='' className='px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus necessitatibus at suscipit possimus accusantium aut. Saepe beatae facere suscipit eveniet!</a>
        
        {/* date and like */}
        <div className='flex justify-between px-4 py-4'>
          <p>23-2-2023</p>
          
          <a  href = "" className='flex gap-1'>
            {item.props.likes}
            <AiFillLike />
          </a>
        </div>

      </Link>
  )
}

export default BlogCard
