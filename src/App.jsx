import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar2 from './components/Navbar2';
import VerticalNavbar4 from './components/VerticalNavbar4';
function App(props) {

  // React.useEffect(() => {
  //   console.log('ch > ', props);
  // }, []);

  // return 
  return (
    <div className="flex h-screen">
      <VerticalNavbar4 />
      <div className="flex-1 flex flex-col">
        <Navbar2 />
        <div className="flex-1 bg-gray-100">
          <div className='py-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
