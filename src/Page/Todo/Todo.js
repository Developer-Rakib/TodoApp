import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import TodoList from './TodoList';

const Todo = () => {
    const [addedTodo, setAddedTodo] = useState("")
    // console.log(addedTodo);
    const handleAddtodo = (event) => {
        if (event.key === 'Enter') {

            const todo = addedTodo
            if (todo === "") {
                toast.error("Please Enter Todo")
                return
            }
            const todoInfo = {
                todo,
            }
            console.log(todoInfo);
            axios.post(`https://intense-sierra-15615.herokuapp.com/todo`, todoInfo)
                .then(data => {
                    console.log(data.data);
                    if (data.data.success) {
                        toast.success(data.data.message)
                        event.target.value = "";
                        setAddedTodo("")
                    }
                })
            return
        }

        setAddedTodo(event.target.value)
    }

    // const handleTodo = (e) => {

    //     // if (e.keyCode === 13) {

    //     // }
    //     // e.preventDefault()
    //     // const todo = e.target.todo.value
    //     // const description = e.target.description.value
    //     // if (todo === "") {
    //     //     toast.error("Please Enter Todo")
    //     //     return
    //     // }
    //     // if (description === "") {
    //     //     toast.error("Please Enter Desctiption")
    //     //     return
    //     // }
    //     // const todoInfo = {
    //     //     todo,
    //     //     description
    //     // }
    //     // console.log(todoInfo);
    //     // axios.post(`https://intense-sierra-15615.herokuapp.com/todo`, todoInfo)
    //     //     .then(data => {
    //     //         console.log(data.data);
    //     //         if (data.data.success) {
    //     //             toast.success(data.data.message)
    //     //         }
    //     //     })
    //     // e.target.reset()
    // }
    return (
        <div className="flex items-center flex-col">
            <div className="mb-2 xl:w-96">
                <div className='mt-16'>
                <h1 className='text-3xl mb-3 font-bold text-purple-500'>Add Task</h1>
                    <input
                        onKeyUp={handleAddtodo}
                        name='todo'
                        type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Task Here & press the ???enter??? key" aria-label="Search" aria-describedby="button-addon2"
                    />
                </div>

            </div>
            <div className='w-full'>
                <TodoList></TodoList>
            </div>

        </div>
    );
};

export default Todo;