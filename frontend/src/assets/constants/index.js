import logo from "../images/summer-ico.svg";
import { gql } from "@apollo/client";
import { styles, homeBookListStyle } from "./stylesObj";

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

export { logo, GET_BOOKS, styles, homeBookListStyle };
