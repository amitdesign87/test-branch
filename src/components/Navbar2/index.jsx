import React, { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between h-16">
          <div className="order-last px-4 lg:order-first lg:w-6/12 xl:w-5/12 2xl:w-4/12">
            <button
              onClick={() => setOpen(!open)}
              className={` ${
                open && "navbarTogglerActive"
              } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
           
          </div>
          
          <div className="w-full px-4 lg:w-3/12 xl:w-4/12 2xl:w-4/12">
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <div className="flex justify-center items-center gap-5">
            <svg  width={24}
                  height={24}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" className="size-6 fill-gray">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

             <img className="w-10	h-10 rounded-full	" src={'/images/user-img.jpg'} alt="User Image" />
             {/* <img src={'/images/user-img.jpg'} alt="Logo Image" /> */}
             </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
