export default function Books({ book }) {
  return (
    <div className="student">
      <h1>{book.sub}</h1>
      <h3>Price: {book.price}</h3>
    </div>
  );
}
