import { PersonFill } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Navber = () => {
    return (
        <div >
            <div className="navbar bg-lime-200 shadow-sm">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl">Main logo </Link>
                </div>
                <div className="flex gap-2">
                    <div>
                        <ul className='flex justify-center items-center mt-2 gap-5'>
                            <li> <Link href='/'> Home</Link></li>
                            <li> <Link href='/auth/login'> Login</Link></li>
                            <li> <Link href='/auth/singup'> Singup</Link></li>
                        </ul>
                    </div>
                    <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-15 rounded-full pe-3 bg-purple-600">
                              <PersonFill className='mt-2 ms-3 text-white' />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href='/' className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link href='/'>Settings</Link></li>
                            <li><Link href='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navber;