import React,{useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'
import { getPosts } from '../utils'



const BlogList = () => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    getPosts('http://localhost:8001/api/posts').then((data) => {setPosts(data)})
  },[]) 

    
    console.log(posts)
  return (
    <div className='bg-[#040D12] flex flex-col items-center justify-center sm:flex-wrap md:flex-row gap-11 p-5'>
      <p>{posts.title}</p>
      {posts.map(
        (item)=>{
             return  <BlogCard key = {item.id} props = {item}/>
        }
      )} 
    </div>
  )
}

export default BlogList
