import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

function AllBooks() {
  const [tabBooks, setTabBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  function searchBooksByYear(y1, y2) {}

  if (isLoading) {
    return (
      <center>
        <h4>Data Loading...</h4>
      </center>
    );
  } else
    return (
      <>
        <SearchBar searchHandler={searchBooksByYear}></SearchBar>
        <BookList livres={tabBooks}></BookList>
      </>

      // <ol>
      //     <li>

      //     </li>

      // </ol>
    );
}

export default AllBooks;
