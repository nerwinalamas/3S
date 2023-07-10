import React from "react";

const Search = ({ isSearching, setIsSearching, byCategory, setByCategory }) => {
  return (
    <div className="flex flex-col items-start m-2 md:flex-row">
      <input
        type="text"
        placeholder="Search"
        value={isSearching}
        onChange={(e) => setIsSearching(e.target.value)}
        className={`w-80 h-10 mx-2 mb-2 border-solid border-2 rounded border-slate-300 px-2 ${
          byCategory ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
        }`}
        disabled={byCategory}
      />

      <select
        id="category"
        name="category"
        value={byCategory}
        onChange={(e) => setByCategory(e.target.value)}
        className={`w-25 p-2 mx-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
          isSearching ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
        }`}
        disabled={isSearching}
      >
        <option value="">All products</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default Search;
