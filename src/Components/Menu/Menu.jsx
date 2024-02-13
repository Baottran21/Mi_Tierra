import MenuPage1 from "./../../assets/MI TIERRA PAGE 1.png";
import MenuPage2 from "./../../assets/MI TIERRA PAGE 2.png";
import MenuPage3 from "./../../assets/MI TIERRA PAGE 3.png";
import MenuPage4 from "./../../assets/MI TIERRA PAGE 4.png";
const Menu = () => {
  return (
    <>
      <div
        id="Menu-page-container"
        className=" w-full  flex justify-evenly items-center"
      >
        <ul>
          <li>
            <img src={MenuPage1} alt="Menu Page 1"></img>
          </li>
          <li>
            <img src={MenuPage2} alt="Menu Page 2"></img>
          </li>
          <li>
            <img src={MenuPage3} alt="Menu Page 3"></img>
          </li>
          <li>
            <img src={MenuPage4} alt="Menu Page 4"></img>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
