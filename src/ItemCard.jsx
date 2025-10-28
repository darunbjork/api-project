function ItemCard({ items }) {
  return (
    <div>
      <p>First Name: {items.name.first}</p>
      <p>Last Name: {items.name.last}</p>
      <p> Street: {items.location.street.name}</p>
      <p>City: {items.location.city}</p>
    </div>
  );
}

export default ItemCard;
