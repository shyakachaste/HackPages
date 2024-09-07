import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailPage.css'; // Ensure you create a corresponding CSS file

const BookDetailPage = () => {
  const { bookId } = useParams(); // Assuming you're passing the book ID through the URL
  const book = {
    // Example data; replace with actual data or fetch from a database
    title: "My Coding Journey",
    author: "John Doe",
    authorUsername: "@johndoe",
    authorImage: "https://example.com/johndoe.jpg", // Replace with actual URL
    description: "This book details my experiences learning to code.",
    coverImage: "https://example.com/bookcover.jpg", // Replace with actual URL
    pdfUrl: "https://example.com/mycodingjourney.pdf", // Replace with actual URL
  };

  return (
    <div className="book-detail">
      <img src={book.coverImage} alt={book.title} className="book-cover-detail" />
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <img src={book.authorImage} alt={book.author} className="author-image" />
      <p className="author-username">{book.authorUsername}</p>
      <p>{book.description}</p>
      <a href={book.pdfUrl} download className="download-button">Download the Book</a>
    </div>
  );
};

export default BookDetailPage;
