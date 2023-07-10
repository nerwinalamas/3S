import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Card = ({ isData }) => {
  const [isSearching, setIsSearching] = useState("");
  const [byCategory, setByCategory] = useState("");

  const field = ["title"];

  const items = isData.filter((item) => {
    //filtering by Category
    if (byCategory) {
      return item.category === byCategory;
    
    //filtering by title || user input
    } else if (isSearching) {
      return field.some((product) =>
        item[product].toLowerCase().includes(isSearching.toLowerCase())
      );

    //if the previous condition not met just return the items
    } else {
      return item;
    }
  });

  return (
    <div className="w-screen flex flex-col items-center">
      <Search
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        items={items}
        byCategory={byCategory}
        setByCategory={setByCategory}
      />

      <div className="grid grid-cols-2 gap-2 md:gap-3 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {items.map((d) => (
          <Link to={`/products/${d.id}`} key={d.id}>
            <div
              title={d.title}
              className=" w-44 h-64 flex flex-col rounded-md hover:border-solid hover:border-2 hover:border-slate-300 hover:cursor-pointer"
            >
              <div className="p-2">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-32 object-contain"
                />
              </div>
              <div className="h-full p-2 relative">
                <h6 className="text-sm text-slate-700 truncate">{d.title}</h6>
                <p className="absolute bottom-2 text-xl text-red-600">
                  ${d.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
