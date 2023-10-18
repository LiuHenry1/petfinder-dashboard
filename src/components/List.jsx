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
          {animalList.map(({ type, name, age, gender, attributes, url }) => {
            return (
              <tr>
                <td>{type}</td>
                <td>
                  <a href={url} target="blank">
                    {name}
                  </a>
                </td>
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
