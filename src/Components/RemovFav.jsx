import React from 'react';
import { FaHeartCircleXmark } from "react-icons/fa6";

export default function RemoveFavourites() {
    return(
        <>
            <span>Remove From Favorites</span> <FaHeartCircleXmark className='text-white ml-3'/>
        </>
    )
}