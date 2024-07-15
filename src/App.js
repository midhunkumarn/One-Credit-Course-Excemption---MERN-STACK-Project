import Dashboard from './component/Dashboard';
import Details from './component/Details';
import Login from './component/Login';
import Home from './component/Home';
import Excemption from './component/Excemption';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/excemption' element={<Excemption/>} />
       
      </Routes>
    </BrowserRouter>
    </div>
   
    
         
  );
}

export default App;
