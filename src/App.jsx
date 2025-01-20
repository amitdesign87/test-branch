import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import VerticalNavbar from './components/VerticalNavbar';
function App(props) {

  // React.useEffect(() => {
  //   console.log('ch > ', props);
  // }, []);

  // return 
  return (
    <div className="flex h-screen">
      <VerticalNavbar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gray-100">
          <div style={{ padding: 20 }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
