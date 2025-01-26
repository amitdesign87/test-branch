import React, { useState, useRef, useEffect } from 'react'
import Pagination from "../Pagination";
import FilterN from "../FilterN";
import Modal from "../Modal";


const tableData = [
  {
    name: 'Musharof Chowdhury',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-01.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: true,
    inprogress: false,
    overdue: false,
    nstart: false,
    duedate: 'Oct 22, 2024',
  },
  {
    name: 'Nenifer Lofess',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-02.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: false,
    inprogress: true,
    overdue: false,
    nstart: false,
    duedate: 'Oct 22, 2024',
  },
  {
    name: 'Jhon Smith',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-03.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: true,
    inprogress: false,
    overdue: false,
    nstart: false,
    duedate: 'Oct 22, 2024',
  },
  {
    name: 'Sulium Keliym',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-04.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: false,
    inprogress: false,
    overdue: true,
    nstart: false,
    duedate: 'Oct 22, 2024',
  },
  {
    name: 'Alex Semuyel',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-05.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: true,
    inprogress: false,
    overdue: false,
    nstart: false,
    duedate: 'Oct 22, 2024',
  },
  {
    name: 'Humil Limition',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-06.png',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Amit Singh',
    completed: false,
    inprogress: false,
    overdue: false,
    nstart: true,
    duedate: 'Oct 22, 2024',
  },
]

const headers = [

  {
    name: 'Task Name',
    styles: 'min-w-[300px]',
    inputType: 'text',
    searchIcon: true,
  },
  {
    name: 'Assign to',
    styles: 'min-w-[180px]',
    inputType: 'text',
    arrowIcon: true,
  },
  {
    name: 'Due date',
    styles: 'min-w-[180px]',
    inputType: 'date',
    calendarIcon: true,
  },
 

  {
    name: 'Status',
    styles: 'min-w-[180px]',
    inputType: 'text',
    searchIcon: true,
  },
  { name: 'Action', styles: 'min-w-[180px]' },
]



// const headers = [
//   { name: 'Task Name', styles: 'min-w-[300px]' },
//   { name: 'Assign to', styles: 'min-w-[180px]' },
//   { name: 'Due date', styles: 'min-w-[180px]' },
//   { name: 'Status', styles: 'min-w-[180px]' },
//   { name: 'Action', styles: 'min-w-[180px]' },
// ]

const Table2 = () => {
  return (
    <section className='dark:bg-dark '>
      <div className='container mx-auto'>
        <div className="flex bg-white h-20 mb-4 items-center px-4 py-8 rounded-lg	">
          <div className="flex justify-between w-full	 items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl	font-semibold	text-dark mb-2">Dashboard</h3>
            <h5 className="text-sm font-normal leading-4 text-slate-500">Manage all your tasks, track progress, and more.</h5>
          </div>
          <div className="flex justify-between gap-5">
          <div className="mb-4 inline-flex items-center md:mb-0 rounded-md border border-stroke dark:border-dark-3 dark:bg-dark rounded-md px-2">
                        <label
                          htmlFor=""
                          className="mr-2 text-base font-normal text-slate-500 dark:text-white"
                        >
                          Sort By:
                        </label>
                        <div className="relative">
                          <select className="w-full appearance-none py-[10px] pl-2 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                            <option value="" className="dark:bg-dark-2">None</option>
                            <option value="" className="dark:bg-dark-2">Name  </option>
                            <option value="" className="dark:bg-dark-2">Date </option>
                            <option value="" className="dark:bg-dark-2">Status </option>
                          </select>
                          <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-dark dark:border-white"></span>
                        </div>
                      </div>
          <FilterN/>
          <Modal/>

          </div>
          </div>
          
          
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='max-w-full overflow-x-auto bg-white dark:bg-dark-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] rounded-[10px]'>
              
              <table className='w-full table-auto'>
                <TableHead headers={headers} />
                <TableBody data={tableData} />
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
    </section>
    
  )
}

export default Table2;

const TableHead = ({ headers }) => {
  
  return (
    <thead>
      <tr className='border-b border-stroke dark:border-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`px-4 pt-9 pb-6 first:pl-8 align-top ${header.styles}`}
            key={index}
          >
              <div>
                <div className='mb-[10px] flex items-center'>
                  <p className='mr-1 text-base font-medium text-body-color dark:text-dark-6'>
                    {header.name}
                  </p>
                  <div className='inline-flex flex-col space-y-[2px] text-body-color dark:text-dark-6'>
                    <span className='inline-block'>
                      <svg
                        width='10'
                        height='5'
                        viewBox='0 0 10 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5 0L0 5H10L5 0Z' fill='currentColor' />
                      </svg>
                    </span>
                    <span className='inline-block'>
                      <svg
                        width='10'
                        height='5'
                        viewBox='0 0 10 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='relative'>
                  <input
                    type={header.inputType}
                    className='h-[34px] w-full rounded border border-stroke pr-3 pl-8 text-sm text-body-color outline-none dark:border-dark-3 dark:text-dark-6 bg-transparent'
                  />
                  {header.searchIcon && (
                    <span className='absolute -translate-y-1/2 top-1/2 left-3 text-body-color dark:text-dark-6'>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.41699 2.33268C4.16183 2.33268 2.33366 4.16085 2.33366 6.41601C2.33366 8.67118 4.16183 10.4993 6.41699 10.4993C8.67215 10.4993 10.5003 8.67118 10.5003 6.41601C10.5003 4.16085 8.67215 2.33268 6.41699 2.33268ZM1.16699 6.41601C1.16699 3.51652 3.5175 1.16602 6.41699 1.16602C9.31649 1.16602 11.667 3.51652 11.667 6.41601C11.667 9.31551 9.31649 11.666 6.41699 11.666C3.5175 11.666 1.16699 9.31551 1.16699 6.41601Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.29976 9.29976C9.52757 9.07195 9.89691 9.07195 10.1247 9.29976L12.6622 11.8373C12.89 12.0651 12.89 12.4344 12.6622 12.6622C12.4344 12.89 12.0651 12.89 11.8373 12.6622L9.29976 10.1247C9.07195 9.89691 9.07195 9.52757 9.29976 9.29976Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                  {header.arrowIcon && (
                    <span className='absolute -translate-y-1/2 text-body-color dark:text-dark-6 right-3 top-1/2'>
                      <svg
                        width={10}
                        height={5}
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="currentColor" />
                      </svg>
                    </span>
                  )}
                  {header.calendarIcon && (
                    <span className='absolute -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2 left-3'>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.66699 0.583984C4.98916 0.583984 5.25033 0.845152 5.25033 1.16732V1.75065H8.75033V1.16732C8.75033 0.845152 9.01149 0.583984 9.33366 0.583984C9.65582 0.583984 9.91699 0.845152 9.91699 1.16732V1.75065H11.0837C12.0502 1.75065 12.8337 2.53415 12.8337 3.50065V11.6673C12.8337 12.6338 12.0502 13.4173 11.0837 13.4173H2.91699C1.95049 13.4173 1.16699 12.6338 1.16699 11.6673V3.50065C1.16699 2.53415 1.95049 1.75065 2.91699 1.75065H4.08366V1.16732C4.08366 0.845152 4.34483 0.583984 4.66699 0.583984ZM4.08366 2.91732H2.91699C2.59483 2.91732 2.33366 3.17848 2.33366 3.50065V5.25065H11.667V3.50065C11.667 3.17848 11.4058 2.91732 11.0837 2.91732H9.91699V3.50065C9.91699 3.82282 9.65582 4.08398 9.33366 4.08398C9.01149 4.08398 8.75033 3.82282 8.75033 3.50065V2.91732H5.25033V3.50065C5.25033 3.82282 4.98916 4.08398 4.66699 4.08398C4.34483 4.08398 4.08366 3.82282 4.08366 3.50065V2.91732ZM11.667 6.41732H2.33366V11.6673C2.33366 11.9895 2.59483 12.2507 2.91699 12.2507H11.0837C11.4058 12.2507 11.667 11.9895 11.667 11.6673V6.41732Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            
            {index === headers.length - 1 && null}
          </th>
        ))}
      </tr>
    </thead>
  )
}
const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className='p-4 border-t border-stroke pl-5 dark:border-dark-3'>
            <div className='flex items-center'>
              <img
                src={row.image}
                alt='image'
                className='mr-4 rounded-full h-45 w-11'
              />
              <div>
                <h5 className='text-sm font-medium text-dark dark:text-white'>{row.name}</h5>
                <p className='text-sm text-body-color dark:text-dark-6 truncate w-44'>{row.content}</p>
              </div>
            </div>
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
            <p className='text-sm text-dark font-medium dark:text-dark-6'>{row.title}</p>
           
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
          <p className='text-sm text-dark dark:text-dark-6 font-medium'>{row.duedate}</p>
           
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
          {row.completed && (
              <p className='inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-light-6 text-green-dark'>
                Completed
              </p>
            )}
            {row.inprogress && (
              <p className='inline-flex px-3 py-1 text-xs font-medium rounded-full bg-yellow-light-4 text-red-dark'>
                In Progress
              </p>
            )}
            {row.overdue && (
              <p className='inline-flex px-3 py-1 text-xs font-medium rounded-full bg-red-light-5  text-yellow-dark-2'>
                Overdue
              </p>
            )}
             {row.nstart && (
              <p className='inline-flex px-3 py-1 text-xs font-medium rounded-full bg-primary text-white'>
                Not Started
              </p>
            )}
          </td>
          <td className='p-4 text-center border-t border-stroke pr-5 dark:border-dark-3'>
            <div className="flex gap-4">
            <button className="w-8 h-8 flex items-center justify-center	rounded-md border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg width={18}
                  height={18}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" className="size-6">
  <path  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

              </button>
              <button className="w-8 h-8 flex items-center justify-center	rounded-md border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg width={18}
                  height={18}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor" className="size-6">
  <path  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

              </button>
              <button className="w-8 h-8 flex items-center justify-center	rounded-md border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"><svg  width={18}
                  height={18}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"stroke-width="1.5" stroke="currentColor" className="size-6">
  <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

</button>
            </div>
            
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='relative'>
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='text-body-color dark:text-dark-6'
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark border-stroke dark:border-dark-3 border ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <button className='w-full px-3 py-2 text-sm text-left rounded text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2'>
          Edit
        </button>
        <button className='w-full px-3 py-2 text-sm text-left rounded text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2'>
          Delete
        </button>
      </div>
    </div>
  )
}

