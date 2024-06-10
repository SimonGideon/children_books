import React, { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import BookList from "./common/BookList";
import { stlyes } from "../assets/constants/stylesObj";

const SearchBar = ({
  onSearch,
  filteredBooks,
  onAdd,
  setFilteredBooks,
  readingList,
}) => {
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  // Handle click outside of the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setFilteredBooks([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search for the books

  const handleSearch = (query) => {
    onSearch(query);
  };

  // Handle change for the search bar

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query === "") {
      setFilteredBooks([]);
    } else {
      handleSearch(query);
    }
  };

  // Styling for the booklist props
  const style = stlyes.search;

  return (
    <Box
      className="search-container"
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "80%", md: "70%" },
        position: "absolute",
        margin: "1rem",
      }}
    >
      <TextField
        label="Search Books"
        variant="outlined"
        value={query}
        onChange={handleChange}
        fullWidth
      />
      {filteredBooks.length > 0 && (
        <Box
          className="search-results"
          sx={{
            maxHeight: "30vh",
            overflowY: "auto",
            position: "relative",
            backgroundColor: "white",
            zIndex: 1,
          }}
        >
          {filteredBooks.map((book) => (
            <BookList
              key={book.title}
              book={book}
              onAdd={onAdd}
              onStyle={style}
              readingList={readingList}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
