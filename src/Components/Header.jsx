import { Link as Scroller } from "react-scroll";

const NavLinks = [
  { id: 1, link: "landing-page-container", title: "Home" },
  { id: 2, link: "about-container", title: "About" },
  { id: 3, link: "our-flavors-container", title: "Our Flavors" },
  { id: 4, link: "contact-container", title: "Contact" },
  // { id: 5, link: "menu-container", title: "Menu" },
];

export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
        <Scroller
          to={NavLinks[0].link}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <h1 className="cursor-pointer">Mi Tierra MHK</h1>
        </Scroller>
        <nav>
          <ul className=" w-[20vw] flex justify-between">
            {NavLinks.map((elem, index) => (
              <li key={index} className="cursor-pointer">
                <Scroller
                  to={elem.link}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {elem.title}
                </Scroller>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
