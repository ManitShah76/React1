import logo from './logo.svg';
import './App.css';
import UseEffectHook from './UseEffect';
import UseEffectWithDependencies from './UseEffectWithDependencies';
import UseRef from './UseRef';
import UseRef1 from './UseRef1';
import UseContext from './UseContext';
import UseReducerHook from './UseReducerHook';
import UseReducerHook1 from './UseReducerHook1';
import ListKey from './ListKey';


function App() {
  return (
    <div className='App'>

     {/* <UseEffectHook/> */}
     {/* <UseEffectWithDependencies/> */}
     {/* <UseRef/> */}
     {/* <UseRef1/> */}
     {/* <UseContext/> */}
     {/* <UseReducerHook/> */}
     <UseReducerHook1/>
     <ListKey/>
    </div>
  );
}

export default App;
