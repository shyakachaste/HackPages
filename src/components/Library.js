import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Library = () => {
  const books = [
    {
      id: 1,
      title: "My Coding Journey",
      coverImage: "https://example.com/coverimage.jpg",
      authorName: "Shyaka Chaste",
      authorImage: "https://example.com/author.jpg",
      slackUsername: "@shyakachaste"
    },
    // Add more books as needed
  ];

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <h3>{book.title}</h3>
            <div className="author-info">
              <img src={book.authorImage} alt={book.authorName} className="author-image" />
              <div className="author-details">
                <p className="author-name">{book.authorName}</p>
                <p className="author-slack">Slack: {book.slackUsername}</p>
              </div>
            </div>
            <Link to={`/books/${book.id}`} className="view-book-button">
              View Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
