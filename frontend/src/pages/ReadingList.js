import BookList from "../components/BookList";

import "./ReadingList.css";

function ReadingListPage({ books, headers }) {
  return (
    <div className="reading-list">
      <h2>Reading List</h2>
      <hr />
      <div className="books">
        <BookList books={books} headers={headers} />
      </div>
    </div>
  );
}

export default ReadingListPage;
