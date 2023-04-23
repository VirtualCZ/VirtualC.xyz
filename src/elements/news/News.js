import NewsItem from "./NewsItem";
import "./News.css";

const News = () => {
  return (
    <div className="news">
      <h2>News</h2>
      <p>
        You can also view the{" "}
        <a href="https://github.com/VirtualCZ/VirtualC.xyz">source code</a> for
        any changes and updates.{" "}
      </p>
      <p>
        If you are interested in using my code or would like to discuss a
        potential project, please do not hesitate to{" "}
        <a href=" mailto:thomas2654cz@gmail.com?subject=Request%20from%20www.virtualc.xyz ">
          contact me.
        </a>
      </p>
      <NewsItem
        heading={"23/4/2023"}
        text={[
          { line: "New Card system" },
          { line: "Styled scrollbar for WebKit browsers" },
        ]}
      />
      <NewsItem
        heading={"21/4/2023"}
        text={[
          { line: "Removed comments from index.html" },
          { line: "Fixed a typo in App.js" },
          { line: "Removed App.css" },
          { line: "News now uses components" },
          { line: "Improved the page design" },
        ]}
      />
      <NewsItem
        heading={"19/4/2023"}
        text={[
          { line: "Edited the css files a bit" },
          { line: "Added 404 page, moved App.js to Home.js" },
          { line: "Added LESS support" },
          { line: "Improved dropdowns" },
          { line: "Changed the layout a bit" },
          { line: "Added navigator, sidebar" },
        ]}
      />
      <NewsItem
        heading={"14-15/04/2023"}
        text={[
          {
            line: "Moved the project to ReactJS (rewritten basically 100% of the current code)",
          },
          { line: "Added basic API functionality" },
          { line: "(Broke the submit function - rendering of name)" },
          { line: "Improved dropdowns" },
        ]}
      />

      <NewsItem
        heading={"13/4/2023"}
        text={[
          { line: "Added & styled 3 Dropdowns" },
          { line: "Added better themes, basic container" },
          { line: "Added & styled Slider" },
          { line: "Added & styled star rating" },
        ]}
      />
      <NewsItem
        heading={"12/04/2023"}
        text={[
          { line: "Went online!" },
          { line: "Added typography" },
          { line: "Added basic colors" },
          {
            line: "Added Theme functionality (I still need to rewrite CSS to use more variables)",
          },
          { line: "Added & styled Radio buttons" },
          { line: "Added basic colors" },
          {
            line: "Added Theme functionality (I still need to rewrite CSS to use more variables)",
          },
          { line: "Added & styled Radio buttons" },
          { line: "Added & styled Switch" },
          { line: "Added & styled Input box" },
          { line: "Added & styled Button" },
        ]}
      />
    </div>
  );
};

export default News;
