import React, { useState } from "react";

const SelectBox = (props) => {

  return (
    <div className="absolute top-[85px] left-0">
    
      <div className="w-full max-w-[275px] space-y-[10px] rounded-md bg-white px-4 py-4 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
        <div className="relative rounded-md bg-[#F0F1F3] flex justify-between text-gray-600 text-sm">
          <input type="text" className="bg-transparent dark:border-dark-3 w-full px-4 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" placeholder="Search"/>
          <span className="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.0206 11.0778L14.8757 13.9329L13.9329 14.8757L11.0778 12.0206C10.0512 12.8419 8.74925 13.3333 7.33325 13.3333C4.02125 13.3333 1.33325 10.6453 1.33325 7.33325C1.33325 4.02125 4.02125 1.33325 7.33325 1.33325C10.6453 1.33325 13.3333 4.02125 13.3333 7.33325C13.3333 8.74925 12.8419 10.0512 12.0206 11.0778ZM10.6831 10.5831C11.4983 9.74298 11.9999 8.59698 11.9999 7.33325C11.9999 4.75492 9.91158 2.66659 7.33325 2.66659C4.75492 2.66659 2.66659 4.75492 2.66659 7.33325C2.66659 9.91158 4.75492 11.9999 7.33325 11.9999C8.59698 11.9999 9.74298 11.4983 10.5831 10.6831L10.6831 10.5831Z" fill="#88888F"/>
</svg>
          </span>
        </div>
        <div className=" h-32 overflow-auto overscroll-contain">
        <SelectBoxItem name="Henry Dholi" />
        <SelectBoxItem name="Mariya Desoja" />
        <SelectBoxItem name="Robert Jhon" />
        <SelectBoxItem name="Cody Fisher" />
        <SelectBoxItem name="Mariya Desoja" />
        <SelectBoxItem name="Robert Jhon" />
        <SelectBoxItem name="Cody Fisher" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 bg-white pt-4">
        <button className='border-grey-600 border rounded-md inline-flex items-center justify-center py-2 px-7 text-center text-base font-medium text-grey-700 hover:bg-blue-light-5 hover:text-primary-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3' onClick={()=>props.alert}>
      Clear
    </button>
        <button className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-2 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'>
      Apply
    </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;

const SelectBoxItem = ({ img, name, position }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="sr-only"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor={name} className="flex w-full items-center">
        <div
          className={`user-box flex w-full items-center rounded-[5px] py-[6px]  dark:hover:bg-dark  ${
            isChecked ? "" : ""
          }`}
        >
          <div
            className={`box mr-3 flex h-5 w-full max-w-[20px] cursor-pointer items-center justify-center rounded border  ${
              isChecked
                ? "border-primary bg-primary"
                : "border-stroke dark:border-dark-3"
            }`}
          >
            <span className={`icon ${isChecked ? "" : "opacity-0"}`}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0791 3.08687C12.307 3.31468 12.307 3.68402 12.0791 3.91183L5.66248 10.3285C5.43467 10.5563 5.06533 10.5563 4.83752 10.3285L1.92085 7.41183C1.69305 7.18402 1.69305 6.81468 1.92085 6.58687C2.14866 6.35906 2.51801 6.35906 2.74581 6.58687L5.25 9.09106L11.2542 3.08687C11.482 2.85906 11.8513 2.85906 12.0791 3.08687Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>

          <div>
            <h4 className="text-sm font-medium text-dark dark:text-white">
              {name}
            </h4>
          </div>
        </div>
      </label>
    </div>
  );
};
