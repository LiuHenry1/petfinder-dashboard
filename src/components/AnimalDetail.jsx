import { useParams } from "react-router-dom";

const AnimalDetail = ({ animalList }) => {
  if (animalList == null) {
    return;
  }

  const params = useParams();

  const animal = animalList[params.index];
  console.log(animal);

  return (
    <div className="detailed-view">
      <h1>{animal.name}</h1>
      <img src={animal.photos[0]["large"]} />
      <div className="animal-details">
        <p>Species: {animal.type}</p>
        <p>Breed: {animal.breeds.primary}</p>
        <p>Gender: {animal.gender} </p>
        <p>Age: {animal.age}</p>
        <p>Description: {animal.description}</p>
        <p>Contact: {animal.contact.email}</p>
      </div>
    </div>
  );
};

export default AnimalDetail;
