import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './Page/Todo/Todo';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import { Toaster } from 'react-hot-toast';
import CompleteTask from './Page/CompleteTask/CompleteTask';
import Calendar from './Page/Calendar/Calendar';
import Footer from './Page/Footer/Footer';

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
      <Footer></Footer>
    </div>
  );
}

export default App;
