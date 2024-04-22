import React from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBox(props) {
    return(
         <div className="bg-white py-1.5 mt-3 mb-3 rounded-lg text-blue-950 flex">
            <input 
                className='placeholder:px-1 inline-block w-28' type="search" 
                value={props.value} placeholder='seach movies' 
                onChange={(event) => props.setSearchValue(event.target.value)}
            />
            <IoSearch className='mr-2 mt-1 w-4' />
            </div> 
    )
}