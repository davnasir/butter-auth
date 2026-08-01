import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-center my-10'>
            <ul className='flex gap-5'>
                <li> <Link href={"/"}>home</Link> </li>
                <li> <Link href={"auth/login"}>login</Link> </li>
                <li> <Link href={"/"}>home</Link> </li>
                <li> <Link href={"/"}>home</Link> </li>
            </ul>
        </div>
    );
};

export default Navber;