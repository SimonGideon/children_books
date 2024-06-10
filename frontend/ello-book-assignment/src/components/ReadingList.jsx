import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";

const ReadingList = ({ readingList, onRemove }) => (
  <List
    flex
    sx={{
      p: 2,
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
    }}
  >
    {readingList && readingList.length > 0 ? (
      readingList.map((book) => (
        <ListItem
          key={book.title}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 0",
          }}
        >
          <ListItemText
            primary={book.title}
            secondary={book.author}
            sx={{ marginRight: "1rem" }}
          />
          <Button
            variant="contained"
            onClick={() => onRemove(book)}
            sx={{
              fontSize: "0.875rem",
              padding: "0.3rem 1.5rem",
            }}
          >
            Remove
          </Button>
        </ListItem>
      ))
    ) : (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "1rem" }}>
        No books in your reading list
      </Typography>
    )}
  </List>
);

export default ReadingList;
