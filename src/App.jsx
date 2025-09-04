import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setBooks(data.docs.slice(0, 12));
      if (data.docs.length === 0) {
        setError("No books found. Try another search.");
      }
    } catch (err) {
      setError("⚠️ Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 drop-shadow-md">
        📚 Book Finder
      </h1>

      <div className="max-w-2xl mx-auto mb-6">
        <SearchBar onSearch={searchBooks} />
      </div>

      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 font-semibold mt-6 bg-red-100 py-2 px-4 rounded-lg inline-block">
          {error}
        </p>
      )}

      {!loading && !error && books.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-8">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}

      {!loading && !error && books.length === 0 && (
        <p className="text-center text-gray-600 mt-10 text-lg">
          🔎 Try searching for a book above 👆
        </p>
      )}
    </div>
  );
}

export default App;
