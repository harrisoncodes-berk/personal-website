import BookList from "../components/BookList";

function ReadingListPage({ books, headers }) {
  return (
    <div>
      <div className="header">
        <h2>Reading List</h2>
        <hr />
      </div>
      <BookList books={books} headers={headers} />
    </div>
  );
}

export default ReadingListPage;
