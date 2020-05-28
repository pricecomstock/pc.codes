import Header from "./components/header.html";
import Projects from "./components/projects.html";

export default ({ data, environment }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Price Comstock</title>
        <link rel="stylesheet" href="./css/main.css" />
        <script src="/js/index.js"></script>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Header></Header>

        <section className="section">
          <h1>Featured Projects</h1>
          <Projects
            data={data.projects.projects}
            filter={(project) => {
              return project.featured;
            }}
          ></Projects>
        </section>

        <section className="section">
          <h1>Other Projects</h1>
          <Projects
            data={data.projects.projects}
            filter={(project) => {
              return !project.featured;
            }}
          ></Projects>
        </section>
      </body>
    </html>
  );
};
