import Completed from './component/Completed';
import Ongoing from './component/Ongoing';
import Login from './component/Login';
import Home from './component/Home';
import Excemption from './component/Excemption';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/ongoing' element={<Ongoing />} />
            <Route path='/completed' element={<Completed />} />
            <Route path='/excemption' element={<Excemption />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
