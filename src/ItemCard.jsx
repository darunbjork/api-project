import "./App.css";

function ItemCard({ user }) {
  return (
    <div className="items-card">
      <h1>Name: {user.name}</h1>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address.street}</h3>
      <h3>Website: {user.website}</h3>
    </div>
  );
}

export default ItemCard;
