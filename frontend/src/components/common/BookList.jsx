import React, { useState, useEffect } from "react";
import { Button, CardContent, CardMedia, Typography, Box } from "@mui/material";

const BookList = ({ book, onAdd, onStyle, readingList }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isBookInList = readingList.some((b) => b.title === book.title);
    setIsAdded(isBookInList);
  }, [readingList, book.title]);

  // handle book individual add
  const handleAdd = () => {
    onAdd(book);
    setIsAdded(true);
  };

  return (
    <Box
      className="book-container"
      sx={{
        position: "relative",
        marginTop: "2rem",
        transformOrigin: "0 0 0",
        ...onStyle.container,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 100,
          marginRight: "1rem",
          ...onStyle.image,
          backgroundColor: "green",
        }}
        image={require(`../../${book.coverPhotoURL}`)}
        alt={book.title}
      />
      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "#FABD33",
          minWidth: "2rem",
          borderRadius: "100% 0% 44% 56% / 16% 88% 12% 84% ",
        }}
      >
        <Typography fontWeight="bold" color="primary.steal">
          {book.readingLevel}
        </Typography>
      </Box>
      <CardContent sx={{ margin: 0, padding: 0 }}>
        <Typography variant="h5" component="div" sx={{ ...onStyle.title }}>
          {book.title}
        </Typography>
        <Typography color="text.secondary">by {book.author}</Typography>
      </CardContent>
      <Button variant="contained" onClick={handleAdd} disabled={isAdded}>
        {isAdded ? "Added" : "Add to List"}
      </Button>
    </Box>
  );
};

export default BookList;
