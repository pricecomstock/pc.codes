import Header from "./components/header.html";
import Projects from "./components/projects.html";

export default ({ data, environment }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Price Comstock</title>
        <link rel="stylesheet" href="./css/main.css" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Header></Header>

        <Projects data={data.projects.projects}></Projects>
      </body>
    </html>
  );
};
