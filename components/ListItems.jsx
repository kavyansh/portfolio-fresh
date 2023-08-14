function ListItems({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
}

function Item({ item }) {
  return <li>{item}</li>;
}

export default ListItems;
