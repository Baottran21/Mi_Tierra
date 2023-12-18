const NavBar = () => {
  return (
    <>
      <div className="h-[5vh] w-full bg-slate-300 ">
        <div id="nav-container" className="flex flex-row w-[40vw] justify-end">
          <nav className="flex flex-row cursor-pointer justify-end">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Menus</h1>
            <h1>Contact</h1>
            <h1>Place an online order</h1>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
