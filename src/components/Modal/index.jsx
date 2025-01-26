import React, { useEffect, useRef, useState } from "react";
import DatePicker1 from "../Datepicker";
import SelectBox from "../SelectBoxN";
import CKEditors from "../CkEditor";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const [show, setShow] = useState({ user: false, group: false });
  // const [showgroup, groupShow] = useState(false);
  const onShowClick = (type) => {
    // if (show == false) {
    //   setShow(true);
    // } else setShow(false);
    if (type == "user") {
      setShow({ user: true, group: false });
    } else setShow({ user: false, group: true });
  };
  const cancelClick = () => {
    alert("hi test");
    setShow({ user: false, group: false });
  };

  return (
    <>
      <button
        ref={trigger}
        onClick={() => setModalOpen(true)}
        className={`inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-[#1B44C8] hover:bg-[#1B44C8] active:border-[#1B44C8] active:bg-[#1B44C8] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5`}
      >
        Create Task
      </button>
      <div
        className={`fixed left-0 top-0 z-40 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          // onBlur={() => setModalOpen(false)}
          className="w-full max-w-[750px]"
        >
          <div className="">
            <div className="flex h-[62px] flex-wrap items-center justify-between rounded-t-2xl bg-[#F2F2F2] md:px-[32px]">
              <h1 className="text-xl font-bold text-[#111928]">
                Create New Task
              </h1>
              <svg
                className="cursor-pointer"
                onClick={() => setModalOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M10.9337 9.6374L15.471 5.1001L16.7674 6.39646L12.2301 10.9337L16.7674 15.471L15.471 16.7673L10.9337 12.2301L6.39647 16.7673L5.1001 15.471L9.63738 10.9337L5.1001 6.39646L6.39647 5.1001L10.9337 9.6374Z"
                  fill="#5B5B5B"
                />
              </svg>
            </div>
            <div className="bg-white py-5 dark:bg-dark-2 md:px-[32px] ">
              <h3 className="mb-5 text-sm font-semibold text-dark dark:text-white">
                Required fields are marked with an asterisk 
                <span className="text-red">*</span>
              </h3>

              <div>
                <div className="grid grid-cols-2 gap-4">
                  <DefaultColumn>
                    <DefaultInput />
                  </DefaultColumn>
                  <DefaultColumn>
                    <DatePicker1 />
                  </DefaultColumn>
                </div>
                <div className="grid grid-cols-1">
                  <DefaultColumn>
                    <AttachmentsFileInput />
                  </DefaultColumn>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="mb-[10px] block text-xs font-medium text-[#404145] text-dark dark:text-white">
                      Assigned to User <span className="text-red">*</span>
                    </label>
                    <div className="text-dark-9 relative flex h-[52px] w-full items-center justify-between rounded-md border border-stroke  bg-transparent px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3">
                      <span className=" flex grow">
                        <img
                          src="../images/user-icon.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </span>
                      <button
                        className="text-sm text-primary underline"
                        onClick={() => onShowClick("user")}
                      >
                        Add People
                      </button>
                    </div>
                    {show.user && <SelectBox />}
                  </div>

                  <div className="relative">
                    <label className="mb-[10px] block text-xs font-medium text-[#404145] text-dark dark:text-white">
                      Assigned to Group <span className="text-red">*</span>
                    </label>
                    <div className="text-dark-9 relative flex h-[52px] w-full items-center justify-between rounded-md border border-stroke  bg-transparent px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3">
                      <span className=" flex grow">
                        <img
                          src="../images/user-icon.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </span>
                      <button
                        className="text-sm text-primary underline"
                        onClick={() => onShowClick("group")}
                      >
                        Add People
                      </button>
                    </div>
                    {show.group && <SelectBox />}
                  </div>
                </div>
                <div>
                  <CKEditors />
                </div>
                <div className="grid grid-cols-1">
                  <div className="mt-5">
                    <label
                      htmlFor=""
                      className="mb-[10px] block text-xs font-medium text-[#404145] text-dark dark:text-white"
                    >
                      Comment
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Add comment"
                      className="w-full rounded-md border border-stroke bg-transparent p-5 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[88px] flex-wrap items-center justify-end rounded-b-2xl bg-[#F2F2F2] px-8 md:px-[32px]">
            <div className="px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full px-4 py-3 text-center text-base font-medium text-dark transition hover:text-black dark:text-white"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                className="block w-full rounded-sm border border-primary bg-primary px-5 py-3 text-center text-base font-semibold
   text-white transition hover:bg-blue-dark"
              >
                <a href={`/#`}> Create Task </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DefaultColumn = ({ children }) => {
  return (
    <div>
      <div className="mb-5">{children}</div>
    </div>
  );
};

const DefaultInput = () => {
  return (
    <>
      <label className="mb-[10px] block text-xs font-medium text-[#404145] text-dark dark:text-white">
        Task Name <span className="text-red">*</span>
      </label>
      <input
        type="text"
        placeholder="Task Name"
        className="text-dark-9 h-[52px] w-full rounded-md border border-stroke bg-transparent  px-5 text-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
      />
    </>
  );
};
const AttachmentsFileInput = () => {
  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
        Attachments
      </label>
      <div className="relative">
        <label
          htmlFor="file"
          className="flex min-h-[52px] w-full cursor-pointer items-center rounded-md border border-solid border-stroke pl-5 "
        >
          <div className="flex">
            <input type="file" name="file" id="file" className="sr-only" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.49992 8.91502L11.5051 11.9202L10.5034 12.9219L9.20825 11.6274V15.5834H7.79159V11.626L6.49645 12.9219L5.49472 11.9202L8.49992 8.91502ZM8.49992 1.41675C11.0452 1.41675 13.1426 3.33464 13.4257 5.80413C15.0774 6.25575 16.2916 7.76738 16.2916 9.56258C16.2916 11.5946 14.7358 13.2633 12.7503 13.4425L12.7506 12.0165C13.9517 11.8444 14.8749 10.8113 14.8749 9.56258C14.8749 8.19337 13.765 7.08341 12.3958 7.08341C12.2479 7.08341 12.103 7.09638 11.9628 7.12166C12.0144 6.88097 12.0416 6.6312 12.0416 6.37508C12.0416 4.41908 10.4559 2.83341 8.49992 2.83341C6.54391 2.83341 4.95825 4.41908 4.95825 6.37508C4.95825 6.6312 4.98544 6.88097 5.03762 7.12117C4.89685 7.09638 4.75198 7.08341 4.60409 7.08341C3.23488 7.08341 2.12492 8.19337 2.12492 9.56258C2.12492 10.767 2.98371 11.7707 4.12232 11.995L4.24995 12.0167L4.2502 13.4425C2.26443 13.2638 0.708252 11.5949 0.708252 9.56258C0.708252 7.76738 1.92251 6.25575 3.57451 5.80424C3.85723 3.33464 5.9546 1.41675 8.49992 1.41675Z"
                fill="#777575"
              />
            </svg>
            <span className="text-sm text-body-color dark:text-dark-6">
              Drop files to attach or 
              <span className="text-primary underline"> browse </span>
            </span>
          </div>
        </label>
      </div>
    </>
  );
};
export default Modal;
