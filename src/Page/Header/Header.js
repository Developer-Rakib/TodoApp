import React, { useState } from 'react';
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const Header = () => {
    let [toggle, setToggle] = useState(false);
    const [user, loading] = useAuthState(auth);
    let navigat = useNavigate();

    // console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }

    // const handleLogout = () => {
    //     signOut(auth)
    //         .then(() => {
    //             navigat('/login')
    //             toast.success('Logout Succes!')
    //         })
    // }

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='header-container'>
            <nav
                className='flex  justify-start items-start  md:justify-between py-3 md:px-32 px-5 md:items-center text-white'
            >
                <h3 className="text-xl w-40">Todo App</h3>
                <span onClick={navBtnHndle} className='md:hidden absolute right-6  top-[22px]'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul onClick={navBtnHndle} className={`md:flex md:justify-end z-10  md:flex-row left-0 md:left-0  md:relative md:opacity-100 md:w-full md:top-0 absolute top-12  py-4 md:py-0 duration-500 ${toggle ? "w-10/12 opacity-100" : "w-0 left-[-100px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/todoList"}>To-Do</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/completeTask"}>Completed Tasks</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/calander"}>Calendar</NavLink>
                    {/* {user ?
                        <button onClick={handleLogout} className='uppercase my-0.5 md:my-0 text-left w-4/6 md:w-auto md:mx-0 mx-auto md:pb-0.5' >LogOut</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    } */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;