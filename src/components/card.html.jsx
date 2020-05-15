import Tag from "./tag.html.jsx";

export default ({ title, description, url, imagePath, tags }) => {
  return (
    <a href={url} className="card">
      <span className="card-img">
        <img
          src={imagePath || "/images/tag-icons/lightning-icon.svg"}
          alt={title}
        />
      </span>
      <div className="card-text-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {tags &&
            tags.map((tag, index) => {
              return (
                <Tag key={index} tag={tag}></Tag>
                // <span className="tag" key={index}>
                //   {tag}
                // </span>
              );
            })}
        </ul>
      </div>
    </a>
  );
};
