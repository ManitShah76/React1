import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Service1 from './Service1';
import Service2 from './Service2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/home'>Home</Link>{" "}
      <Link to='/about'>About</Link>{" "}
      <Link to='/service'>Service</Link>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Services/>}>
              <Route path='service1' element={<Service1/>}></Route>
              <Route path='service2' element={<Service2/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
