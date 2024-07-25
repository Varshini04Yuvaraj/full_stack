
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Routing from './component/Routing';

import Signin from './component/Signin';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <Login/>
      <Signin/> */}
      <Routing/>
      {/* <Home/> */}
    </div>
  );
}
export default App;
