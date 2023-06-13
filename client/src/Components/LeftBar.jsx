import { categories ,social } from './Constant';
import React,{useContext} from 'react'
import {Context} from '../App'



const LeftBar = () => {
    const {category , setCategory} = useContext(Context);
    
   
  return (
    <div className='bg-slate-800 py-5 pb-96 text-white w-[250px] flex flex-col items-baseline  '>
       {categories.map((item , idx) =>{return(
            <button className={`pr-3 pl-2 text-gray-400 rounded-lg py-2 my-2 mb-3 bg-transparent hover:text-lg hover:text-white border-none ml-3 flex flex-row hover:bg-gray-600  ${category === item.name?"bg-gray-600 text-white":"bg-slate-500"}`} key={idx} onClick={(()=>{setCategory(item.name); })}>
                <span className='mx-1'>{item.icon} </span>
                <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </button>
         )})}

         <hr className='w-[80%] mx-1  border-gray-400 border-solid' /> 
         <span className='text-slate-500 text-[13px] mx-6 cursor-default my-5'>News app : by Jayant </span>

         <div className='flex flex-col items-baseline mx-3 my-1'>
            {social.map((item,idx)=>{return(
                <a href={item.url} target="_blank" rel="noreferrer" key={idx} >
            <button className={`text-white/80 cursor-pointer rounded-lg pl-1 pr-2 py-1 my-2 ${item.bg}`} key={idx} >
                <span className='mx-1'>{item.icon}</span>
                <span>{item.name}</span>
            </button>
            </a>
            )})}
        </div>
        
    </div>
  )
}

export default LeftBar
