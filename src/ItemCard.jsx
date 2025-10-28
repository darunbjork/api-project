function ItemCard({ props }) {
  return (
    <div className="items-card">
      <p>Name: {props.name}</p>
      <p>City: {props.address.city}</p>
    </div>
  );
}

export default ItemCard;
