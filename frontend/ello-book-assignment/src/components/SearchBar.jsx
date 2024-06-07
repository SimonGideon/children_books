import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const SearchBar = ({ onSearch, filteredBooks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    onSearch(query);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    handleSearch(query);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <TextField
        label="Search Books"
        variant="outlined"
        value={query}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: "1rem" }} // Adding some space below the TextField
      />
      <Box
        className="search-results"
        sx={{
          maxHeight: "30vh",
          overflowY: "auto",
        }}
      >
        {filteredBooks.map((book) => (
          <Box key={book.title} sx={{ marginBottom: "1rem" }}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchBar;
