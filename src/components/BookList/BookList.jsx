import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <BookItem key={book.id} book={book} />;
      })}
    </ul>
  );
};

export default BookList;
// const BookList = ({ huy }) => {
//   console.log(huy);

//   return (
//     <div>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
//       ducimus at delectus dolore beatae eos voluptatum voluptatem quo molestiae
//       et iure earum qui, rerum distinctio inventore, vitae provident nobis quae.
//     </div>
//   );
// };

// export default BookList;
