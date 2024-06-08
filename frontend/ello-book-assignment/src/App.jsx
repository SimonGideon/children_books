import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";

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

  const style = {
    flexDirection: "row",
    alignItems: "left",
    marginBottom: "1rem",
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
      }}
    >
      <SearchBar
        onSearch={handleSearch}
        filteredBooks={filteredBooks}
        onAdd={handleAdd}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data &&
          data.books.map((book) => (
            <BookList
              key={book.title}
              book={book}
              onAdd={handleAdd}
              onStyle={style}
            />
          ))}
      </Grid>
      <ReadingList readingList={readingList} onRemove={handleRemove} />
    </Box>
  );
};

export default App;
