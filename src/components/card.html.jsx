export default ({ title, description, url, imagePath, tags }) => {
  return (
    <a href={url} className="card">
      <div className="card-text-container">
        <span className="card-img">
          <img src={imagePath} alt={title} />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {tags &&
            tags.map((tag, index) => {
              return (
                <span className="tag" key={index}>
                  {tag}
                </span>
              );
            })}
        </ul>
      </div>
    </a>
  );
};
