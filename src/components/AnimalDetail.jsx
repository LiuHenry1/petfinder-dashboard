import { useParams } from "react-router-dom";

const AnimalDetail = ({ animalList }) => {
  if (animalList == null) {
    return;
  }

  const params = useParams();

  const animal = animalList[params.index];

  return (
    <div className="detailed-view">
      <div className="intro">
        <h1>{animal.name}</h1>
        <img width="600" height="600" src={animal.photos[0]["large"]} />
      </div>
      <div className="overview">
        <div className="main">
          <h4>Overview</h4>
          <li>Species: {animal.type}</li>
          <li>Breed: {animal.breeds.primary}</li>
          <li>Gender: {animal.gender} </li>
          <li>Age: {animal.age}</li>
          <li>Description: {animal.description}</li>
          <li>Contact: {animal.contact.email}</li>
        </div>
        <div className="additional-info">
          <h4>Additional Information</h4>
          {Object.keys(animal.attributes).map((attribute) => {
            return (
              <li>
                {attribute.replace("_", " ")}:{" "}
                {animal.attributes[attribute] ? "Y" : "N"}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
