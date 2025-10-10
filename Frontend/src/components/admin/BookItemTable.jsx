import axios from "axios";
import { Pencil, Scissors } from "lucide-react";
import React from "react";

function BookItemTable({ selectedBook, setListBooks }) {
  function deleteHandler() {
    if (confirm("Etes-vous sûr de vouloir supprimer ce livre ?")) {
      axios
        .delete(`http://localhost:3000/books/${selectedBook._id}`, {
          headers: {
            Authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          alert(response.data.message);
          fetch("http://localhost:3000/books/all", {
            headers: {
              Authorization: `bearer ${localStorage.getItem("access_token")}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setListBooks([...data]);
            });
        });
    }
  }
  return (
    <tr>
      <td>{selectedBook._id} </td>
      <td> {selectedBook.title} </td>
      <td>
        {selectedBook.author.prenom} {selectedBook.author.nom}
      </td>
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
