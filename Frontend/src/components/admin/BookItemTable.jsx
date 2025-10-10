import axios from "axios";
import { Pencil, Scissors } from "lucide-react";
import React from "react";

function BookItemTable({ selectedBook, setListBooks }) {
  function deleteHandler() {}
  return (
    <tr>
      <td>{selectedBook._id} </td>
      <td> {selectedBook.title} </td>
      <td> {selectedBook.author}</td>
      <td>{selectedBook.year}</td>
      <td>{selectedBook.genre}</td>
      <td>
        <button onClick={deleteHandler} className="btn">
          <Scissors></Scissors>
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            updateShow(true);
            setRefreshBook(selectedBook);
          }}
          className="btn"
        >
          <Pencil></Pencil>
        </button>
      </td>
    </tr>
  );
}

export default BookItemTable;
