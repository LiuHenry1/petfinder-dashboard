import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimalDetail = ({ getAnimal }) => {
  const [animal, setAnimal] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const animalToDisplay = await getAnimal(params.id);

      setAnimal(animalToDisplay);
    };

    fetchData();
  }, []);
  console.log(animal);

  return (
    <>
      {animal ? (
        <div className="detailed-view">
          {animal.photos.length > 0 ? (
            <img width="500" height="500" src={animal.photos[0].medium} />
          ) : (
            <div> </div>
          )}
          <div className="overview">
            <div className="primary-info">
              <h4>Overview</h4>
              <li>Name: {animal.name}</li>
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
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AnimalDetail;
