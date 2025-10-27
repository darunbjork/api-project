import "./App.css";
function ItemCard({ item }) {
  return (
    <div className="items-card">
      <h3>{item.name}</h3>
      <p>Email: {item.email}</p>
      <p> Website: {item.website}</p>
      <p>Address: {item.address.street}</p>
      <p>City: {item.address.city}</p>
      <p>Geo: {item.address.geo.lat}</p>
      <p>Phone: {item.phone}</p>
    </div>
  );
}

export default ItemCard;
