import logo from './logo.svg';
 
import './App.css';
import './style.css';
import TestProp from './PropClass';
import PropFunction from './PropFunction';
import ClassDefaultProps from './ClassDefaultProps';
import WebApp from './WebApp';


function App() {
  return (
    <div className="App">

      <TestProp name="Aman" email="a@gmail.com" address = {{city:"Ahmedabad",area:"CG"}}/>
      {/* <PropFunction xyz="Utsav" a="a" b="B"/>*/}
      {/* <ClassDefaultProps/> */}
      {/* <WebApp/> */}
    </div>
  );
}

export default App;
