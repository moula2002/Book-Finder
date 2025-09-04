function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col border border-gray-200">

      <div className="relative">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
        />
        <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
          {book.first_publish_year || "N/A"}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
        {book.title}
      </h2>

      <p className="text-sm text-gray-600 mb-1">
        👨‍💻 <span className="font-medium">{book.author_name?.join(", ") || "Unknown"}</span>
      </p>

      <p className="text-sm text-gray-600 mb-1">
        🌐 {book.language?.join(", ").toUpperCase() || "N/A"}
      </p>

      <p className="text-sm text-gray-600">
        🏷️ Edition Count:{" "}
        <span className="font-medium">{book.edition_count || "N/A"}</span>
      </p>


      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-700 hover:shadow-md transition"
      >
        View More →
      </a>
    </div>
  );
}

export default BookCard;
