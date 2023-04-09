export const DISPLAY_BLOCK = "block";
export const DISPLAY_NONE = "none";

export const HAMBURGER_ICON = "&#9776;";
export const CROSS_ICON = "&times;";

export const MENU = "Menu";
export const OPEN_MENU = `Open ${MENU}`;
export const CLOSE_MENU = `Close ${MENU}`;

export const BELOW_MEDIUM_SCREEN = "(max-width: 768px)";
export const ABOVE_MEDIUM_SCREEN = "(min-width: 768px)";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.207533642135356&lng=72.87507209926844&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_RESTAURANT_LIST_API = (restaurantId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.207533642135356&lng=72.87507209926844&restaurantId=${restaurantId}&submitAction=ENTER`;

export const CLOUDINARY_IMAGE_STRING =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
