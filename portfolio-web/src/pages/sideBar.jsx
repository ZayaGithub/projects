import { useState } from "react";
import {Header} from "@/components/layouts/1-Header"

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setShowSideBar(!showSideBar);
    }, 10);
  };

  const handleClose = () => {
    setShowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };

  return (
    <div>
      <Header><button></button></Header>
      {/* <div className="bg-slate-200 h-[100vh] flex justify-between relative">
        <div>Hello text</div>
        <button onClick={handleOpen} className="h-[40px] w-[40px]">
          <img src="menu.png" alt="" />
        </button>
      </div> */}
      {showMenu && (
        <div>
          <div
            onClick={handleClose}
            className={` ${
              showSideBar && "bg-black"
            } absolute top-0 left-0  h-[100vh] w-[100vw] flex justify-end transition-all duration-300 ease-in-out `}
          ></div>
          <div className=" absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
            <div
              className={`w-[100%] h-[100vh] bg-white p-5 absolute top-0 right-0 ${
                showSideBar ? "translate-x-0" : " translate-x-[100vw]"
              } transition-all duration-300 ease-in-out`}
            >
              <div className="flex justify-between">
                <h2>Pinecone</h2>
                <button onClick={handleClose} className="h-[40px] w-[40px]">
                  X
                </button>
              </div>
              <div>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
