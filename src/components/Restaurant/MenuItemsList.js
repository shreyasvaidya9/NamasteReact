import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuItemsList = ({
  title,
  categories,
  itemCards,
  showMenuValue = false,
}) => {
  const [showMenu, setShowMenu] = useState(showMenuValue);

  const toggleShowMenu = () => setShowMenu((value) => !value);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={toggleShowMenu}>
          {showMenu ? "Hide" : "Show"} Menu
        </button>
      </div>
      {showMenu && (
        <>
          {categories
            ? categories.map((category) => {
                const { title, itemCards } = category;
                return (
                  <div className="category">
                    <h4>{title}</h4>
                    <MenuItems itemCards={itemCards} />
                  </div>
                );
              })
            : null}
          {itemCards ? <MenuItems itemCards={itemCards} /> : null}
        </>
      )}
    </div>
  );
};

export default MenuItemsList;
