import React, { useState } from "react";

const Cookies3 = () => {
  const [open, setOpen] = useState(true);

  const handleHide = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <section className="bg-dark pb-4 pt-6 dark:bg-dark-2">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-7/12">
                <div className="mb-6 lg:mb-0">
                  <p className="text-base text-white">
                    This website uses cookies to ensure you get the best
                    experience on our website.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12">
                <div className="flex flex-wrap items-center gap-6 lg:justify-end">
                  <a
                    href="/#"
                    className="text-base font-medium text-white hover:underline"
                  >
                    Cookie Policies
                  </a>
                  <div className="mb-2 flex items-center space-x-4">
                    <button
                      onClick={handleHide}
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-body-color shadow-1 hover:bg-gray-2 dark:bg-dark dark:text-dark-6 dark:shadow-none dark:hover:bg-dark-3"
                    >
                      Accept Cookies
                    </button>
                    <button
                      onClick={handleHide}
                      className="inline-flex items-center justify-center text-center text-white"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9063 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9063 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9063 18.625 17.625L11 10Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cookies3;
