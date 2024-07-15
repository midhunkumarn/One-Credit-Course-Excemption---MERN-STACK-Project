import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Details from './component/Details';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/details" element={<Details/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
    
    </div>
   
    
         
  );
}

export default App;
