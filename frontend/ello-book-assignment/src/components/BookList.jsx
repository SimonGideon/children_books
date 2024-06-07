import React from "react";
import {
  List,
  ListItem,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const BookList = ({ books, onAdd }) => (
  <List>
    {books.map((book) => (
      <ListItem key={book.title}>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={require(`../${book.coverPhotoURL}`)}
          alt={book.title}
        />
        <div style={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography color="text.secondary">{book.author}</Typography>
          </CardContent>
        </div>
        <Button variant="contained" onClick={() => onAdd(book)}>
          Add to Reading List
        </Button>
      </ListItem>
    ))}
  </List>
);

export default BookList;
