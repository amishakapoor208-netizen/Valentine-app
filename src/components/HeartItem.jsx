export function HeartItem({ message, icon = "❤️" }) {
  return (
    <div className="heart-item">
      <span className="heart-icon">{icon}</span>
      <p className="heart-message">{message}</p>
    </div>
  );
}

export default HeartItem;
