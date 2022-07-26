import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }

    const newMenuItems = items.filter((item) => item.category === category);
    return setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterItems={filterItems}
          categories={categories}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
