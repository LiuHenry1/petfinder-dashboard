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
          {animalList.map(animal => {
            return <tr>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>{animal.age}</td>
              <td>{Object.keys(animal.attributes).map(attribute => {
                return <li>{attribute.replace("_", " ")}: {animal.attributes[attribute] ? "Y" : "N"}</li>
              })}</td>
            </tr>
          })}
        </thead>
      </table>
    </>
  );
};

export default List;
