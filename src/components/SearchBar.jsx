import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z0-9\s]*$/.test(value);
    if (!isValid) return;
    setError(false);
    setQuery(value);
  };

  const handleSearch = () => {
    if (!query.trim()) {
      setError(true);
      return;
    }
    navigate(`/meal-details?q=${encodeURIComponent(query.trim())}&type=${searchType}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 p-4">
      <div className="w-full md:w-[40%]">
        <label htmlFor="search-query" className="sr-only">Search</label>
        <input
          id="search-query"
          name="search-query"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search meals..."
          className={`border px-4 py-2 rounded-xl w-full shadow-md text-white ${
            error ? "border-red-500" : "border-orange-300"
          }`}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid search term.</p>
        )}
      </div>

      <div>
        <label htmlFor="search-type" className="sr-only">Search Type</label>
        <select
          id="search-type"
          name="search-type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="px-3 py-2 rounded-xl border border-orange-300 bg-white shadow-sm text-gray-700"
        >
          <option value="name">By Name</option>
          <option value="category">By Category</option>
          <option value="ingredient">By Ingredient</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
