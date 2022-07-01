import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import {AiOutlineEdit} from 'react-icons/ai';

const TodoItems = ({ todo, todos, setTodos, index }) => {
    const [enbleEdit, setEnbleEdit] = useState(false)

    const handleComplete = (id, todo) => {
        axios.put(`https://intense-sierra-15615.herokuapp.com/todo/${id}`)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount === 1) {
                    toast.success(`Succesfully complete ${todo}`)
                }

            })
    }
    const handleEdit = (e, id) => {
        e.preventDefault()
        const todo =  e.target.upTodo.value
        const upTodo = {
            todo
        }  
        // console.log(upTodo, id);
        axios.put(`https://intense-sierra-15615.herokuapp.com/todoEdit/${id}`, upTodo)
            .then(data => {
                // console.log(data.data);
                if (data.data.acknowledged === true) {
                    setEnbleEdit(false)
                    toast.success(`Succesfully Edited ${todo}`)
                }
            })
    }

    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://intense-sierra-15615.herokuapp.com/todo/${id}`)
                    .then(data => {
                        if (data.data.modifiedCount === 1) {
                            let restTodo = todos.filter(cloth => cloth._id !== id)
                            setTodos(restTodo)
                            toast.success(data.data.message)
                        }

                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }

    return (
        <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-2 sm:px-5 py-3  dark:text-white whitespace-nowrap">
                {index + 1}
            </th>
            <td className="px-2 sm:px-5 py-3 text-xs sm:text-sm font-semibold sm:font-bold">
                {enbleEdit ?
                    <form className='' onSubmit={(r) => handleEdit(r, todo?._id)}>
                        <input
                            name='upTodo'
                            className='sm:h-8 h-6 sm:px-4 px-1 w-20 sm:mb-0 mb-2 sm:w-auto rounded-md border border-gray-500 focus:border-green-500'
                            type="text" defaultValue={todo?.todo} />
                        <button
                            className='inline-block mr-2 px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 ml-2 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out'
                        >Update</button>
                    </form>
                    :
                    <>
                        <span className='text-base font-semibold capitalize'>{todo.todo}</span>
                        <button type="button"
                            onClick={() => setEnbleEdit(true)}
                            className="inline-block ml-2 text-black  font-medium text-base hover:text-blue-500 leading-tight">
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                    </>}
            </td>
            {/* <td className="px-2 sm:px-5 py-3 text-xs sm:text-sm font-semibold sm:font-bold">
                                                {todo?.description}
                                            </td> */}
            <td className="px-2 flex justify-center items-center h-full sm:px-5 py-3 text-center">
                <button type="button"
                    onClick={() => handleComplete(todo?._id, todo?.todo)}
                    className="inline-block mr-2 px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Complete</button>

                <button type="button"
                    onClick={() => handleDelete(todo?._id)}
                    className="inline-block px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>


            </td>
        </tr>
    );
};

export default TodoItems;