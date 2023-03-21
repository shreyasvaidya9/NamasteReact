import React from "react";
import Layout from "./src/components/Layout/Layout";
import { Home } from "./src/pages";

/**
 * Header
 *  - Logo
 *  - Navbar
 *  - Cart
 *
 * Body
 *  - Search bar
 *  - Restaurant List
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Rating
 *          - Cuisines
 *
 * Footer
 *  - links
 *  - Copyright
 */

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
