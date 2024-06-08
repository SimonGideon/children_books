import React from "react";
import { Button, CardContent, CardMedia, Typography, Box } from "@mui/material";

const BookList = ({ book, onAdd, onStyle }) => (
  <Box
    sx={{
      position: "relative",
      marginTop: "2rem",
      ...onStyle,
    }}
  >
    <CardMedia
      component="img"
      sx={{ width: 100, marginRight: "1rem" }}
      image={require(`../${book.coverPhotoURL}`)}
      alt={book.title}
    />
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h5" component="div">
        {book.title}
      </Typography>
      <Typography color="text.secondary">{book.author}</Typography>
    </CardContent>
    <Button variant="contained" onClick={() => onAdd(book)}>
      Add to Reading List
    </Button>
  </Box>
);

export default BookList;
