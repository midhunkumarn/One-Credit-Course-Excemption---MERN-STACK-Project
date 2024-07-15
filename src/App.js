import Dashboard from './component/Dashboard';
import Details from './component/Details';
import Login from './component/Login';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/details' element={<Details/>} />
       
      </Routes>
    </BrowserRouter>
    </div>
   
    
         
  );
}

export default App;
