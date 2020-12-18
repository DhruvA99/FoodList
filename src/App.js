import React, { useState } from "react";
import "./styles.css";

const category = [
  "chinese",
  "italian",
  "mexican",
  "northIndian",
  "southIndian"
];
const foodList = {
  chinese: ["munchurian", "noodles", "Spring Rolls", "HotnSour soup"],
  italian: ["pasta", "pizzas", "Humus n Pita", "Mac n Cheese"],
  mexican: ["tacos"],
  northIndian: ["Dal Makhani", "Tandoori Roti", "Shahi Paneer"],
  southIndian: ["Sambhar", "idli", "Dosa", "Vada", "Uthpam"]
};

export default function App() {
  const [cat, setCat] = useState("chinese");

  return (
    <div className="App">
      <h1>🍕Food List🍔</h1>
      <p>Checkout my favourite food items.Select a category to get started</p>
      {category.map((item) => (
        <div key={item} className="nav-category" onClick={() => setCat(item)}>
          {item}
        </div>
      ))}
      <hr />
      {foodList[cat].map((items) => {
        return (
          <div key={items} className="category-list">
            {items}
          </div>
        );
      })}
    </div>
  );
}
