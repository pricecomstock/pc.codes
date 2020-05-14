export default ({ title, description, url, imagePath }) => {
  return (
    <a href={url} className="card">
      <div className="card-text-container">
        <span className="card-img">
          <img src={imagePath} alt={title} />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
