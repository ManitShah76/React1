import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddUser from './AddUser';
import EditUser from './EditUser';
import Viewuser from './Viewuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
        <Route path='/edit/:eid' element={<EditUser/>}></Route>
        <Route path='/view/:vid' element={<Viewuser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
