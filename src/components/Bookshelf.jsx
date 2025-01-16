import { useState } from "react";

export default function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  // Purpose: This function manages the submission of the form, adding a new book to the list, and resetting the input fields.
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]); // setNewBook adds new entry into books
    setNewBook({
      title: "",
      author: "",
    });
  };

  // Purpose: This function updates the form’s state as the user types into the input fields.
  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="author">
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => {
          <div className="bookCard" key={book.title}>
            <h2>Book Title: {book.title}</h2>
            <h2>Author: {book.author}</h2>
          </div>;
        })}
      </div>
    </div>
  );
}
