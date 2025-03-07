import {React,useState} from 'react';
import OngoingCard from './OngoingCard';
import Sidebar from "./Sidebar";
const Ongoing = () => {

  const [isOpen, setIsOpen] = useState(false); // ✅ Manage sidebar state
  
      return (
          <div className="excemption-container">
              {/* ✅ Sidebar with toggle state */}
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
  
              <div className="content">
                  <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                      ☰
                  </button>
                  <OngoingCard />
              </div>
          </div>
      );
};

export default Ongoing;
