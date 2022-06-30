import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './Page/Todo/Todo';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Page/RequireAuth/RequireAuth';
import CompleteTask from './Page/CompleteTask/CompleteTask';
import Calendar from './Page/Calendar/Calendar';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todoList' element={
            <Todo></Todo>
        }></Route>
        <Route path='/completeTask' element={
            <CompleteTask></CompleteTask>
        }></Route>
        <Route path='/calander' element={
            <Calendar></Calendar>
        }></Route>
  </Routes>
    </div>
  );
}

export default App;
