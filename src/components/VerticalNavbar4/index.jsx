import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
const VerticalNavbar4 = () => {
  return (
    <section className="h-screen bg-white">
      <div className="shadow-card bg-gray-2 flex h-screen w-full max-w-[300px] flex-col justify-between overflow-y-scroll">
        <div>
          <div className="px-10 pt-10 pb-9">
            
            <Logo/>
            
          </div>

          <nav className="px-6">
            <ul>
             
              <NavItem 
                link="/#"
                icon={
                  <svg  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  
                   xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                
                }
                menu="Dashboard"
              />
             
             
              <NavItem
                link="/#"
                icon={
                  <svg  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" className="size-6">
  <path  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                }
                menu="User Management"
              />
            </ul>
          </nav>
        </div>

        <div className="py-3 px-6">
        <nav>
            <ul>
              <NavItem
                link="/#"
                icon={
                  <svg width={20}
                  height={20}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

                }
                menu="Contact Us"
              />
              <NavItem
                link="/#"
                icon={
                  <svg width={20}
                  height={20}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
  <path  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                }
                menu="Setting"
              />
             
             
              <NavItem
                link="/#"
                icon={
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H6.75C7.16421 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.16421 3 6.75 3H3.75Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803C11.1768 12.9874 11.1768 12.5126 11.4697 12.2197L14.6893 9L11.4697 5.78033C11.1768 5.48744 11.1768 5.01256 11.4697 4.71967Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z"
                    />
                  </svg>
                }
                menu="Log out  "
              />
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default VerticalNavbar4;

const NavItem = ({ menu, link, submenu, message, icon, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative">
      <a
        href={link}
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`${
          dropdownOpen ? "bg-primary text-white" : ""
        } text-body-color hover:bg-primary group relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium duration-200 hover:text-white `}
      >
        <span className="pr-[10px]">{icon}</span>
        {menu}
        {message && (
          <span className="bg-primary group-hover:text-primary ml-4 rounded-full py-1 px-[10px] text-xs font-semibold text-white group-hover:bg-white">
            {message}
          </span>
        )}
        {submenu && (
          <span
            className={`${
              dropdownOpen === true ? "rotate-0" : "rotate-180"
            } absolute top-1/2 right-10 -translate-y-1/2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5899 13.0899C15.2645 13.4153 14.7368 13.4153 14.4114 13.0899L10.0006 8.67916L5.58991 13.0899C5.26447 13.4153 4.73683 13.4153 4.41139 13.0899C4.08596 12.7645 4.08596 12.2368 4.41139 11.9114L9.41139 6.9114C9.73683 6.58596 10.2645 6.58596 10.5899 6.9114L15.5899 11.9114C15.9153 12.2368 15.9153 12.7645 15.5899 13.0899Z"
              ></path>
            </svg>
          </span>
        )}
      </a>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`${dropdownOpen === true ? "block" : "hidden"} `}
      >
        <ul className="py-1 pl-12 pr-10">{children}</ul>
      </div>
    </li>
  );
};

const DropdownItem = ({ link, menu }) => {
  return (
    <li>
      <a
        href={link}
        className="flex items-center border-r-4 border-transparent py-[10px] text-base font-medium text-body-color duration-200 hover:text-primary"
      >
        {menu}
      </a>
    </li>
  );
};

const Divider = () => {
  return <div className="mx-10 my-3 h-[1px] bg-[#e7e7e7]"></div>;
};
