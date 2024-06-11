import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import BookList from "./common/BookList";
import ReadingList from "./ReadingList";
import SearchBar from "./SearchBar";
import { logo, GET_BOOKS, styles } from "../assets/constants";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

const Home = () => {
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
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        padding: "0 2rem",
        height: "100vh",
        overflow: "hidden",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          marginBottom: { xs: "2rem", md: 0 },
          minWidth: { xs: "100%", md: "15rem" },
          marginRight: { xs: 0, md: 0 },
        }}
      >
        <CardMedia
          component="img"
          image={logo}
          alt="logo"
          sx={{
            width: 170,
          }}
        />
        <Typography variant="h5">My Reading List</Typography>
        <ReadingList readingList={readingList} onRemove={handleRemove} />
      </Box>
      <Box
        className="app-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchBar
          onSearch={handleSearch}
          filteredBooks={filteredBooks}
          onAdd={handleAdd}
          setFilteredBooks={setFilteredBooks}
          readingList={readingList}
        />
        <Box
          className="book-list-container"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "5rem",
            gap: "0.9rem",
            overflowY: "auto",
            height: "calc(100vh - 10px)",
            scrollbarWidth: "none",
          }}
        >
          {data &&
            data.books.map((book) => (
              <BookList
                key={book.title}
                book={book}
                onAdd={handleAdd}
                onStyle={styles.home}
                readingList={readingList}
              />
            ))}
          {/* loadmore books cut the books into a half using lodash */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
