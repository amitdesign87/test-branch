import React from "react";


const FilterN = () => {
  return(
    <button className='flex h-[50px] items-center justify-center hover:border-primary rounded-md border border-stroke dark:border-dark-3 dark:bg-dark text-body-color dark:text-dark-6 hover:text-primary bg-white px-5'>
            <span className='mr-2'>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.36874 17.4937C7.19999 17.4937 7.03124 17.4374 6.86249 17.353C6.58124 17.1843 6.44062 16.903 6.44062 16.5937V7.6499L1.51874 1.94053C1.32187 1.65928 1.26562 1.29365 1.40624 0.984277C1.54687 0.674902 1.88437 0.478027 2.24999 0.478027H15.75C16.1156 0.478027 16.4531 0.703027 16.5937 1.04053C16.7344 1.37803 16.6781 1.71553 16.425 1.99678L11.5875 7.62178V14.1749C11.5875 14.3437 11.5312 14.5968 11.2781 14.8499L11.2219 14.9062L7.84687 17.4093C7.70624 17.4655 7.53749 17.4937 7.36874 17.4937ZM7.50937 6.91865C7.64999 7.0874 7.73437 7.34053 7.73437 7.50928V15.9187L10.35 13.978V7.50928C10.35 7.36865 10.35 7.11553 10.575 6.89053L14.9625 1.77178H3.03749L7.50937 6.91865ZM6.52499 7.73428L6.55312 7.7624L6.52499 7.73428Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Filter
          </button>
  )
}


export default FilterN;