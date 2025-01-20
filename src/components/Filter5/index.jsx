import React, { useState } from "react";

const Filter5 = () => {
  const [view, setView] = useState("grid");
  return (
    <>
      <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[570px] text-center">
                <h2 className="mb-4 text-3xl font-semibold text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Newest Items
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sit amet molestie nunc. Vestibulum tempus justo.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-lg border border-stroke bg-gray-1 py-5 pl-8 pr-5 dark:border-dark-3 dark:bg-dark-2">
            <div className="-mx-4 flex flex-wrap items-center justify-between">
              <div className="w-full px-4 md:w-9/12 lg:w-9/12 xl:w-8/12">
                <div className="items-center sm:flex">
                  <div className="mb-4 mr-8 inline-flex items-center sm:block md:mb-0 lg:mr-5 lg:inline-flex xl:mr-8">
                    <label
                      htmlFor=""
                      className="mr-4 text-base font-medium text-dark dark:text-white"
                    >
                      Category
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                        <option value="" className="dark:bg-dark-2">Jacket</option>
                        <option value="" className="dark:bg-dark-2">T-Shirt</option>
                        <option value="" className="dark:bg-dark-2">Trousers</option>
                        <option value="" className="dark:bg-dark-2">Kitwears</option>
                      </select>
                      <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
                    </div>
                  </div>
                  <div className="mb-4 mr-8 inline-flex items-center sm:block md:mb-0 lg:mr-5 lg:inline-flex xl:mr-8">
                    <label
                      htmlFor=""
                      className="mr-4 text-base font-medium text-dark dark:text-white"
                    >
                      Size
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                        <option value="" className="dark:bg-dark-2">Small</option>
                        <option value="" className="dark:bg-dark-2">Medium</option>
                        <option value="" className="dark:bg-dark-2">Large</option>
                        <option value="" className="dark:bg-dark-2">Extra Large</option>
                      </select>
                      <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
                    </div>
                  </div>
                  <div className="mb-4 inline-flex items-center sm:block md:mb-0 lg:inline-flex">
                    <label
                      htmlFor=""
                      className="mr-4 text-base font-medium text-dark dark:text-white"
                    >
                      Color
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                        <option value="" className="dark:bg-dark-2">Blue</option>
                        <option value="" className="dark:bg-dark-2">Black</option>
                        <option value="" className="dark:bg-dark-2">White</option>
                      </select>
                      <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-3/12 lg:w-3/12 xl:w-4/12">
                <div className="flex items-center space-x-4 md:justify-end">
                  <div>
                    <input
                      type="radio"
                      name="view"
                      id="1"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <label
                      htmlFor="1"
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border border-stroke bg-white text-body-color peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white dark:border-dark-3 dark:bg-white/5 dark:text-dark-6`}
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.78125 1.0625H2.8125C1.75 1.0625 0.875 1.9375 0.875 3V6.96875C0.875 8.03125 1.75 8.90625 2.8125 8.90625H6.78125C7.84375 8.90625 8.71875 8.03125 8.71875 6.96875V3.03125C8.75 1.9375 7.875 1.0625 6.78125 1.0625ZM7.34375 7C7.34375 7.3125 7.09375 7.5625 6.78125 7.5625H2.8125C2.5 7.5625 2.25 7.3125 2.25 7V3.03125C2.25 2.71875 2.5 2.46875 2.8125 2.46875H6.78125C7.09375 2.46875 7.34375 2.71875 7.34375 3.03125V7Z"
                          fill=""
                        />
                        <path
                          d="M17.1875 1.0625H13.2188C12.1563 1.0625 11.2812 1.9375 11.2812 3V6.96875C11.2812 8.03125 12.1563 8.90625 13.2188 8.90625H17.1875C18.25 8.90625 19.125 8.03125 19.125 6.96875V3.03125C19.125 1.9375 18.25 1.0625 17.1875 1.0625ZM17.75 7C17.75 7.3125 17.5 7.5625 17.1875 7.5625H13.2188C12.9063 7.5625 12.6563 7.3125 12.6563 7V3.03125C12.6563 2.71875 12.9063 2.46875 13.2188 2.46875H17.1875C17.5 2.46875 17.75 2.71875 17.75 3.03125V7Z"
                          fill=""
                        />
                        <path
                          d="M6.78125 11.0312H2.8125C1.75 11.0312 0.875 11.9063 0.875 12.9688V16.9375C0.875 18 1.75 18.875 2.8125 18.875H6.78125C7.84375 18.875 8.71875 18 8.71875 16.9375V13C8.75 11.9062 7.875 11.0312 6.78125 11.0312ZM7.34375 16.9687C7.34375 17.2812 7.09375 17.5312 6.78125 17.5312H2.8125C2.5 17.5312 2.25 17.2812 2.25 16.9687V13C2.25 12.6875 2.5 12.4375 2.8125 12.4375H6.78125C7.09375 12.4375 7.34375 12.6875 7.34375 13V16.9687Z"
                          fill=""
                        />
                        <path
                          d="M17.1875 11.0312H13.2188C12.1563 11.0312 11.2812 11.9063 11.2812 12.9688V16.9375C11.2812 18 12.1563 18.875 13.2188 18.875H17.1875C18.25 18.875 19.125 18 19.125 16.9375V13C19.125 11.9062 18.25 11.0312 17.1875 11.0312ZM17.75 16.9687C17.75 17.2812 17.5 17.5312 17.1875 17.5312H13.2188C12.9063 17.5312 12.6563 17.2812 12.6563 16.9687V13C12.6563 12.6875 12.9063 12.4375 13.2188 12.4375H17.1875C17.5 12.4375 17.75 12.6875 17.75 13V16.9687Z"
                          fill=""
                        />
                      </svg>
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="view"
                      id="2"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="2"
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border border-stroke bg-white text-body-color peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white dark:border-dark-3 dark:bg-white/5 dark:text-dark-6`}
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.03125 4.53125H18.9375C19.3125 4.53125 19.6563 4.21875 19.6563 3.8125C19.6563 3.40625 19.3437 3.09375 18.9375 3.09375H5.03125C4.65625 3.09375 4.3125 3.40625 4.3125 3.8125C4.3125 4.21875 4.625 4.53125 5.03125 4.53125Z"
                          fill=""
                        />
                        <path
                          d="M18.9063 9.3125H5.03125C4.65625 9.3125 4.3125 9.625 4.3125 10.0312C4.3125 10.4062 4.625 10.75 5.03125 10.75H18.9375C19.3125 10.75 19.6563 10.4375 19.6563 10.0312C19.625 9.625 19.3125 9.3125 18.9063 9.3125Z"
                          fill=""
                        />
                        <path
                          d="M18.9063 15.4688H5.03125C4.65625 15.4688 4.3125 15.7812 4.3125 16.1875C4.3125 16.5938 4.625 16.9062 5.03125 16.9062H18.9375C19.3125 16.9062 19.6563 16.5938 19.6563 16.1875C19.6563 15.7812 19.3125 15.4688 18.9063 15.4688Z"
                          fill=""
                        />
                        <path
                          d="M1.9375 4.65625C2.40349 4.65625 2.78125 4.27849 2.78125 3.8125C2.78125 3.34651 2.40349 2.96875 1.9375 2.96875C1.47151 2.96875 1.09375 3.34651 1.09375 3.8125C1.09375 4.27849 1.47151 4.65625 1.9375 4.65625Z"
                          fill=""
                        />
                        <path
                          d="M1.9375 10.8438C2.40349 10.8438 2.78125 10.466 2.78125 10C2.78125 9.53401 2.40349 9.15625 1.9375 9.15625C1.47151 9.15625 1.09375 9.53401 1.09375 10C1.09375 10.466 1.47151 10.8438 1.9375 10.8438Z"
                          fill=""
                        />
                        <path
                          d="M1.9375 17.0312C2.40349 17.0312 2.78125 16.6535 2.78125 16.1875C2.78125 15.7215 2.40349 15.3438 1.9375 15.3438C1.47151 15.3438 1.09375 15.7215 1.09375 16.1875C1.09375 16.6535 1.47151 17.0312 1.9375 17.0312Z"
                          fill=""
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-center rounded-lg border border-dashed border-stroke bg-gray-1 py-[250px] dark:border-dark-3 dark:bg-dark-2">
            <span className="text-3xl font-bold text-dark text-opacity-10 dark:text-white sm:text-4xl md:text-[44px] md:leading-[55px]">
              Products
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter5;
