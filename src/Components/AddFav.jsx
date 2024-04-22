import React from 'react';
import { FaHeart } from "react-icons/fa";

export default function AddToFavourites() {
    return(
        <>
            <span>Add to Favorites</span> <FaHeart className='text-red-600 ml-3'/>
        </>
    )
}