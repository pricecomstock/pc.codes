import Card from "./card.html";

export default ({ data, filter }) => {
  if (!filter) {
    filter = (project) => {
      return true;
    };
  }
  return (
    <div className="project-list">
      {/* {JSON.stringify(data)} */}
      {/* {data.map((project) => (
        <div>Hello</div>
      ))} */}
      {data.filter(filter).map((project, index) => {
        return (
          <Card
            key={index}
            title={project.name}
            description={project.description}
            url={project.url}
            imagePath={project.imagePath}
          ></Card>
          // <li key={index}>
          //   <a href={project.url}>{project.name}</a>: {project.description}
          // </li>
        );
      })}
    </div>
  );
};
