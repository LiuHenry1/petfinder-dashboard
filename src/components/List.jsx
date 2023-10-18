const List = ({ animalList, handleChange }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter name..."
      ></input>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Age</th>
            <th>Attributes</th>
          </tr>
          {animalList
            .map(({ species, name, age, gender, attributes }) => {
              return (
                <tr>
                  <td>{species}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>
                    {Object.keys(attributes).map((attribute) => {
                      return (
                        <li>
                          {attribute.replace("_", " ")}:{" "}
                          {attributes[attribute] ? "Y" : "N"}
                        </li>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
        </thead>
      </table>
    </>
  );
};

export default List;
