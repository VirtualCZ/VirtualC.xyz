const NewsItem = ({ heading, text = [] }) => {
  return (
    <>
      <h3>{heading}</h3>
      {text.map((e) => {
        return <p>{e.line}</p>;
      })}
    </>
  );
};
export default NewsItem;
