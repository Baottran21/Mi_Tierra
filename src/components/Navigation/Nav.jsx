const NavBar = () => {
  return (
    <>
      <div className="h-[5vh] w-full bg-slate-300 ">
        <div
          id="nav-container"
          className="flex flex-row w-full h-full justify-end"
        >
          <ul className="flex flex-row mr-[4vw] justify-between items-center gap-8 font-PT">
            <button>Home</button>
            <button>About</button>
            <button>Menus</button>
            <button>Contact</button>
            <button>Order Online</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
