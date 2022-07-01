import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../Todo/TodoList';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className='flex justify-center h-36 items-center'>
                <div>
                <h1 className='text-4xl font-bold text-purple-500'>Todo App</h1>
                <p className='py-2'>Note Your Daily task</p>
                <div class="flex space-x-2 justify-center">
                    <button
                        onClick={() => navigate('/todoList')}
                        type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >Click me</button>
                </div>
                </div>
            </div>
            <TodoList></TodoList>
        </div>
    );
};

export default Home;