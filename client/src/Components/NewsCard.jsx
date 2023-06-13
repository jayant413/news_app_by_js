import React from 'react'


const NewsCard = ({item}) => {

  return (
    <div className="hover:border-solid border-none hover:border-blue-500 hover:border-2 h-[500px] flex flex-col w-[350px]   bg-gray-300 ml-6 mb-6 mt-6 box cursor-default rounded-md " >
      <span className='pb-5 font-bold text-xl mt-3 px-4 hover:text-2xl'>{item.title?.slice(0,50)}...</span>
    <img src={item.urlToImage} alt="Not available" className='hover:w-[98%] hover:ml-1 h-52 w-[90%] object-fill overflow-hidden bg-gray-300 rounded-lg ml-4 hover:h-64' />
      <span className='pl-4 mt-4 mb-2 '>{item.description?.slice(0,100)}...</span>
      <span className='ml-4 text-gray-500 text-xs hover:text-sm'>Date : {new Date(item.publishedAt).toGMTString()}</span>
      <span className='ml-4 text-gray-500 text-xs hover:text-sm'>Publisher : {item.source.name}</span>
      <a href={item.url} rel="noreferrer"  target="_blank"><button className='box w-[30%] h-10 hover:h-11 hover:w-[33%] my-3 mx-4 rounded-xl bg-sky-700 text-white hover:bg-sky-500'>Read More</button></a>
    </div>
  )
}

export default NewsCard
