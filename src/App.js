import React, { useState, useEffect } from 'react';
import './App.css';
import Myinformation from './Component/Myinformation';
import Myimage from './Component/Myimage'
import Navbar from './Component/Navbar';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); //  set the correct state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container box-shadows mt-5 mb-5">
      <div className=' '>
        <Navbar />
        <main className={`d-flex justify-between${isMobile ? ' mobile-order' : ''}`}> 
          <Myinformation />
          <Myimage />
        </main>
      </div>
    </div>
  );
}

export default App;
