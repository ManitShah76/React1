import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { user } from './User';

function App() {

  const [search,setSearch] = useState("")

  return (
    <div className="App">
      <input value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>

      {user
      .filter((v)=>(v.name.toLowerCase().includes(search.toLowerCase())))
      .map((v)=>(
        <li key={v.id}>{v.name}</li>
      ))}
    </div>
  );
}

export default App;
