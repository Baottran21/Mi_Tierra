import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import LandingPageContext from "./LandingPageContext";

const NavLinks = [
  { id: 1, link: "landing-page-container", title: "Home" },
  { id: 2, link: "about-container", title: "About" },
  { id: 3, link: "our-flavors-container", title: "Our Flavors" },
  { id: 4, link: "contact-container", title: "Contact" },
];

function Header() {
  const menu = useContext(LandingPageContext);
  console.log(menu.menu);

  const handleClick = () => {
    menu.setMenu(!menu.menu);
  };

  return (
    <>
      {menu.menu ? (
        // Render this when menu is true
        <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
          <Link to="/" smooth={true} offset={-100} duration={500}>
            <h1 className="cursor-pointer text-[2rem]" onClick={handleClick}>
              Mi Tierra MHK
            </h1>
          </Link>
          <nav>
            <ul className=" w-[20vw] flex justify-center">
              <li>
                <Link
                  className="text-[1.2rem] underline underline-offset-3"
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        // Render this when menu is false
        <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
          <Link to="/" smooth={true} offset={-100} duration={500}>
            <h1 className="cursor-pointer text-[2rem]">Mi Tierra MHK</h1>
          </Link>
          <nav>
            <ul className=" w-[20vw] flex justify-between">
              {NavLinks.map((elem, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-[1.2rem] underline underline-offset-3"
                >
                  <HashLink
                    to={`#${elem.link}`}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {elem.title}
                  </HashLink>
                </li>
              ))}
              <li>
                <Link
                  className="text-[1.2rem] underline underline-offset-3"
                  to="/menu"
                  onClick={handleClick}
                >
                  Menu
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
