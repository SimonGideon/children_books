import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import BookList from "./BookList";

const SearchBar = ({ onSearch, filteredBooks, onAdd }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    onSearch(query);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    handleSearch(query);
  };

  // stlying for the booklist props
  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1rem",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <TextField
        label="Search Books"
        variant="outlined"
        value={query}
        onChange={handleChange}
        fullWidth
      />
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
          />
        ))}
      </Box>
    </Box>
  );
};

export default SearchBar;
