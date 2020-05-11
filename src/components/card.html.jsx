export default ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-text-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
