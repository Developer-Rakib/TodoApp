import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'

const CompleteTodo = () => {
    const [todos, setTodos] = useState([])
    // let [loadin, setLoading] = useState(true);
    // const navigate = useNavigate()
    // window.scroll(0, 10)


    useEffect(() => {
        axios.get(`https://intense-sierra-15615.herokuapp.com/todos`)
            .then(data => {
                const compltTodo = data.data.filter(com => com.complete);
                // console.log(compltTodo);
                setTodos(compltTodo)
            })
    }, [todos])



    return (
        <div>
            <div className="relative w-10/12 sm:w-5/12  mx-auto my-7 overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                        <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                No
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Task
                            </th>
                            {/* <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Desciption
                            </th> */}
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3 text-center">
                                Status
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
                                            <td className="px-2 flex  justify-center sm:px-5 py-3 text-center">

                                            <p className='text-green-600 font-semibold flex items-center mr-2'>Task Completed</p>
                                               

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

export default CompleteTodo;