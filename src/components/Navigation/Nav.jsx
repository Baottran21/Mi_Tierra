const NavBar = () => {
  return (
    <>
      <div className="h-[5vh] w-full bg-slate-300 ">
        <div
          id="nav-container"
          className="flex flex-row w-full h-full justify-end"
        >
          <ul className="flex flex-row mr-[4vw] justify-center items-center gap-8 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>Order Online</li>
          </ul>
          {/* <nav className="flex flex-row cursor-pointer gap-6 items-center mr-10">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Menus</h1>
            <h1>Contact</h1>
            <h1>Place an online order</h1>
          </nav> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
