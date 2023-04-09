import "./Menu.css";
import MenuItemsList from "./MenuItemsList";

const Menu = ({ menu }) => {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
      {menu?.map((menuItem, index) => (
        <MenuItemsList
          key={index}
          {...menuItem}
          showMenuValue={index === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default Menu;
