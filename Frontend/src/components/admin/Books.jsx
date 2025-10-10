import { useState, useEffect } from "react";
import BookItemTable from "./BookItemTable";
import Modal from "./Modal";
import BookFormV2 from "../BookFormV2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Books() {
  const [listBooks, setListBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [refreshBook, setRefreshBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/books/all", {
      headers: {
        Authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setListBooks([...data]);
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Books</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/books/add")}
          >
            Add Book
          </button>
        </div>
        <Modal
          show={show}
          closeModal={setShow}
          uBook={refreshBook}
          setRefreshBook={setRefreshBook}
        >
          <BookFormV2 uBook={refreshBook}></BookFormV2>
        </Modal>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Genre</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listBooks.map((b) => {
              return (
                <BookItemTable
                  key={b._id}
                  selectedBook={b}
                  setListBooks={setListBooks}
                ></BookItemTable>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Books;
