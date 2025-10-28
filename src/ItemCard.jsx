import "./App.css";

function ItemCard({ user }) {
  return (
    <div className="items-card">
      {user.name}
      <p>{user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default ItemCard;
