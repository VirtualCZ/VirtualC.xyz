const Table = ({
  th = ["heading"],
  tdtd = [["Work", "weij"], ["Eat"], ["Commute"], ["Play Game"], ["Sleep"]],
}) => {
  return (
    <table>
      <tr>
        {th.map((e) => {
          return <th>{e}</th>;
        })}
      </tr>

      {tdtd.map((e) => {
        return (
          <tr>
            {e.map((cell) => {
              return <td>{cell}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
