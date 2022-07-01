import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import TodoItems from './TodoItems';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    // const [enbleEdit, setEnbleEdit] = useState(false)
    // let [loadin, setLoading] = useState(true);
    // const navigate = useNavigate()
    // window.scroll(0, 10)


    useEffect(() => {
        axios.get(`https://intense-sierra-15615.herokuapp.com/todos`)
            .then(data => {
                const todo = data.data.filter(com => com.complete === undefined);
                // console.log(todo);
                setTodos(todo)
            })
    }, [todos])



    return (
        <div>
            <div className="relative w-10/12  mx-auto my-7 overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className=" sm:px-6 px-2 py-2 sm:py-3 text-center sm:text-left">

                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Task
                            </th>
                            {/* <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Desciption
                            </th> */}
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
                                        <TodoItems 
                                        key={i}
                                        index={i}
                                        todo={todo}
                                        todos={todos}
                                        setTodos={setTodos}
                                        ></TodoItems>
                                    );
                                }
                                )
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