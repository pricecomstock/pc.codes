import Card from "./card.html";

export default ({ data }) => {
  return (
    <div className="project-list">
      {/* {JSON.stringify(data)} */}
      {/* {data.map((project) => (
        <div>Hello</div>
      ))} */}
      {data.map((project, index) => {
        return (
          <Card
            key={index}
            title={project.name}
            description={project.description}
          ></Card>
          // <li key={index}>
          //   <a href={project.url}>{project.name}</a>: {project.description}
          // </li>
        );
      })}
    </div>
  );
};
