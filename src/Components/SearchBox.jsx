import React from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBox(props) {
    return(
        <div className="bg-slate-600 py-1 my-5 mb-3 rounded-lg flex">
            <input 
                className='placeholder:px-1 placeholder:text-sm placeholder:text-white rounded-lg bg-slate-600 inline-block w-28' type="search" 
                value={props.value} placeholder='seach movies' 
                onChange={(event) => props.setSearchValue(event.target.value)}
            />
            <IoSearch className='mr-2 mt-1 w-4' />
        </div> 
    )
}