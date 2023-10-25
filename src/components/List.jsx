import { Link } from "react-router-dom";

const List = ({ animalList, handleChange }) => {
  return (
    <>
      <table className="list">
        <thead>
          <tr>
            <td className="td-name">
              <input
                type="text"
                id="toSearch"
                onChange={handleChange}
                placeholder="Enter name..."
              ></input>
            </td>
            <td className="td-type">
              <select id="type" onChange={handleChange}>
                <option value="All">All</option>
                <option value="Dog">Dogs</option>
                <option value="Cat">Cats</option>
                <option value="Bird">Birds</option>
                <option value="Rabbit">Rabbits</option>
              </select>
            </td>
            <td className="td-age">
              <select id="age" onChange={handleChange}>
                <option value="All">All</option>
                <option value="Baby">Baby</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </td>
            <td className="td-gender">
              <select id="gender" onChange={handleChange}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Age</th>
            <th>Gender</th>
            <th colSpan="2">Attributes</th>
          </tr>
        </thead>
        <tbody>
          {animalList.map(({ id, type, name, age, gender, attributes }) => {
            return (
              <tr>
                <td className="td-name">
                  <Link to={`details/${id}`}>
                    {name}
                  </Link>
                </td>
                <td>{type}</td>
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
        </tbody>
      </table>
    </>
  );
};

export default List;
