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
      border: "1px solid #5ACCCC",
      borderRadius: "5px",
      width: "100%",
      overflowY: "auto",
      scrollbarWidth: "none",
      maxHeight: "calc(70vh - 10px)",
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
            className="remove-button"
            variant="contained"
            onClick={() => onRemove(book)}
            sx={{
              fontSize: "0.875rem",
              padding: "0.3rem 1.5rem",
              backgroundColor: "#f76434",
              onHover: { backgroundColor: "#F76434" },
            }}
          >
            Remove
          </Button>
        </ListItem>
      ))
    ) : (
      <Typography
        variant="h6"
        sx={{ textAlign: "center", margin: "0.875rem", fontWeight: "light" }}
        color="text.secondary"
      >
        No books in reading list
      </Typography>
    )}
  </List>
);

export default ReadingList;
