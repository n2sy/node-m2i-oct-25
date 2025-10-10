import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

function AllBooks() {
  const [tabBooks, setTabBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/books/all", {
      headers: {
        Authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setTabBooks([...data]);
        console.log(tabBooks);
      });
  }, []);

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
