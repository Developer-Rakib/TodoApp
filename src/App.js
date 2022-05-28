import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './Page/Todo/Todo';
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Page/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Toaster></Toaster>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todoList' element={

          <RequireAuth>
            <Todo></Todo>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
