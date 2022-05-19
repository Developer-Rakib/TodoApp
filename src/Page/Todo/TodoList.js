import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    let [loadin, setLoading] = useState(true);
    const navigate = useNavigate()
    // window.scroll(0, 10)


    useEffect(() => {
        axios.get(`https://intense-sierra-15615.herokuapp.com/todos`)
            .then(data => {
                // console.log(data.data);
                setTodos(data.data)
            })
    }, [todos])

    const handleComplete = (id, todo) => {
        axios.put(`https://intense-sierra-15615.herokuapp.com/todo/${id}`)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount === 1) {
                    toast.success(`Succesfully complete ${todo}`)
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
        <div>
            <div className="relative w-10/12  mx-auto my-7 overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className=" sm:px-6 px-2 py-2 sm:py-3 text-center sm:text-left">

                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Name
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Desciption
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.length > 0 ?
                                todos.map((todo, i) => {
                                    return (
                                        <tr key={todo._id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-2 sm:px-5 py-3  dark:text-white whitespace-nowrap">
                                                {i + 1}
                                            </th>
                                            <td className="px-2 sm:px-5 py-3 text-xs sm:text-sm font-semibold sm:font-bold">
                                                {todo.complete === "done" ?
                                                    <s>{todo.todo}</s>
                                                    :
                                                    todo.todo}
                                            </td>
                                            <td className="px-2 sm:px-5 py-3 text-xs sm:text-sm font-semibold sm:font-bold">
                                                {todo?.description}
                                            </td>
                                            <td className="px-2 flex justify-evenly sm:px-5 py-3 text-center">
                                                {
                                                    todo.complete === "done" ?
                                                        <p className='text-green-600 font-semibold'>Task Complete</p>
                                                        :
                                                        <>
                                                            <button type="button"
                                                                onClick={() => handleComplete(todo?._id, todo?.todo)}
                                                                className="inline-block mr-2 px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Done</button>
                                                        </>
                                                }
                                                <button type="button"
                                                    onClick={() => handleDelete(todo?._id)}
                                                    className="inline-block px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>

                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                <p className='py-3'>Data Not Available</p>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;