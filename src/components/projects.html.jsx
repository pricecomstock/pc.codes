export default ({ data }) => {
  return (
    <ul>
      {/* {JSON.stringify(data)} */}
      {/* {data.map((project) => (
        <div>Hello</div>
      ))} */}
      {data.map((project, index) => {
        return (
          <li key={index}>
            <a href={project.url}>{project.name}</a>: {project.description}
          </li>
        );
      })}
    </ul>
  );
};
