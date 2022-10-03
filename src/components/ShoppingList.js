import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //setting category state
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  //handling category selection
  function sortCategory(event) {
    setSelectedCategory(event.target.value)
  }
  //filtering elements by category
  //checking if category is all. If not will return name of the category to display items with that id
  const filterByCategory = items.filter(item => {
    if(selectedCategory==="All") {
      return true
    } else {
      return (item.category === selectedCategory)
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={sortCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterByCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
