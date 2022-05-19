import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import TodoList from './TodoList';

const Todo = () => {
    const handleTodo = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        const description = e.target.description.value
        if (todo === "") {
            toast.error("Please Enter Todo")
            return
        }
        if (description === "") {
            toast.error("Please Enter Desctiption")
            return
        }
        const todoInfo = {
            todo,
            description
        }
        console.log(todoInfo);
        axios.post(`https://intense-sierra-15615.herokuapp.com/todo`, todoInfo)
            .then(data => {
                console.log(data.data);
                if (data.data.success) {
                    toast.success(data.data.message)
                }
            })
        e.target.reset()
    }
    return (
        <div className="flex items-center flex-col">
            <div className="mb-3 xl:w-96">
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <form onSubmit={handleTodo} className='flex mt-16'>
                        <div className=''>
                            <input
                                name='todo'
                                type="text" className="form-control mb-3 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Todo" aria-label="Search" aria-describedby="button-addon2"
                            />
                            <div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <textarea
                                        name='description'
                                        className="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                        id="exampleFormControlTextarea1"
                                        rows="2"
                                        placeholder="Enter Description"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <button

                            className="btn h-10 w-32 ml-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="button-addon2">
                            Add Todo
                        </button>
                    </form>

                </div>
            </div>
            <div className='w-full'>
                <TodoList></TodoList>
            </div>

        </div>
    );
};

export default Todo;