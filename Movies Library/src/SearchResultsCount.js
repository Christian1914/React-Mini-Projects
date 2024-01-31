function SearchResultsCount({ count, searchTerm }) {
  if (!searchTerm) {
    return null; // Don't display if no search term is entered
  }

  return (
    <div className="search-results-count">
      Found {count} results for "{searchTerm}"
    </div>
  );
}

export default SearchResultsCount;
