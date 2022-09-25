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
          {/* <Home /> */}
          <Routes>

            <Route exact element={<UsersList />} path='/' />
              
            <Route element={<AddUser />} path='/create' />
            <Route element={<EditUser />} path='/edit/:id' />
              
            {/* <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route> */}
          </Routes>
        </div>
      </div>
      </BrowserRouter>

  );
}

export default App;
