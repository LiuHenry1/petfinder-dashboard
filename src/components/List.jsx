import { useState } from "react";

const List = ({ animalList }) => {
  const [toSearch, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

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
            .filter(({ name }) => name.includes(toSearch))
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
