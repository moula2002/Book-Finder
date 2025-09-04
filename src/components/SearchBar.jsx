import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Search books by title, author, or subject..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition btn btn-primary"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
