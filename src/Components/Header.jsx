import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = [
  { id: 1, link: "landing-page-container", title: "Home" },
  { id: 2, link: "about-container", title: "About" },
  { id: 3, link: "our-flavors-container", title: "Our Flavors" },
  { id: 4, link: "contact-container", title: "Contact" },
];

const handleLink = () => {
  let url = window.location.href;
  const regex = /(\/menu)/g;
  return regex.test(url);
};

export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
        <Link to="/" smooth={true} offset={-100} duration={500}>
          <h1 className="cursor-pointer">Mi Tierra MHK</h1>
        </Link>
        <nav>
          <ul className=" w-[20vw] flex justify-between">
            {NavLinks.map((elem, index) => (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => handleLink(elem.link)}
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
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
