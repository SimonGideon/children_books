import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const ReadingList = ({ readingList, onRemove }) => (
  <List>
    {readingList.map((book) => (
      <ListItem key={book.title}>
        <ListItemText primary={book.title} secondary={book.author} />
        <Button variant="contained" onClick={() => onRemove(book)}>
          Remove
        </Button>
      </ListItem>
    ))}
  </List>
);

export default ReadingList;
