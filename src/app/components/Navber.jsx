import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-center py-5 bg-amber-200 border-2'>
            <ul className='flex gap-5'>
                <li> <Link href="/">home</Link> </li>
                <li> <Link href="/auth/login">login</Link> </li>
                <li> <Link href="/auth/singup">Singup</Link> </li>
            </ul>
        </div>
    );
};

export default Navber;