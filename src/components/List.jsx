const List = ({ animalList, handleChange }) => {
  return (
    <>
      <input
        type="text"
        id="toSearch"
        onChange={handleChange}
        placeholder="Enter name..."
      ></input>
      <select id="type" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Dog">Dogs</option>
        <option value="Cat">Cats</option>
        <option value="Bird">Birds</option>
        <option value="Rabbit">Rabbits</option>
      </select>
      <select id="age" onChange={handleChange}> 
        <option value="All">All</option>
        <option value="Baby">Baby</option>
        <option value="Young">Young</option>
        <option value="Adult">Adult</option>
        <option value="Senior">Senior</option>
      </select>
      <select id="gender" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
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
