import './App.css';
import "./axios";
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact element={<UsersList />} path='/' />
            <Route element={<AddUser />} path='/create' />
            <Route element={<EditUser />} path='/edit/:id' />

          </Routes>
        </div>
      </div>
      </BrowserRouter>

  );
}

export default App;
