import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import SearchBar from "./components/SearchBar";

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [readingList, setReadingList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (query) => {
    if (!data) return;
    const results = data.books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(results);
  };

  const handleAdd = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemove = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "1px 10px",
        border: "1px solid #ccc",
        padding: "0",
      }}
    >
      <SearchBar onSearch={handleSearch} filteredBooks={filteredBooks} />
      <BookList
        books={filteredBooks.length > 0 ? filteredBooks : data.books}
        onAdd={handleAdd}
      />
      <ReadingList readingList={readingList} onRemove={handleRemove} />
    </Box>
  );
};

export default App;
