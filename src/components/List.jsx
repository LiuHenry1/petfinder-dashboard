const List = ({ animalList }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Age</th>
            <th>Attributes</th>
          </tr>
          {animalList.map(({species, name, age, attributes}) => {
            return <tr>
              <td>{species}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{Object.keys(attributes).map(attribute => {
                return <li>{attribute.replace("_", " ")}: {attributes[attribute] ? "Y" : "N"}</li>
              })}</td>
            </tr>
          })}
        </thead>
      </table>
    </>
  );
};

export default List;
