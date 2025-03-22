import BookList from "../BookList/BookList";
import { favBooks } from "../data/books";
const App = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};

export default App;
