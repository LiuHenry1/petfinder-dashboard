import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Stat from "./components/Stat";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_SECRET = import.meta.env.VITE_APP_API_SECRET;

function App() {
  let token = null;
  const [animalList, setAnimalList] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const resp = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });
      const data = await resp.json();

      return data.access_token;
    };

    const getAnimals = async () => {
      const resp = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await resp.json();

      return data.animals;
    };

    const fetchData = async () => {
      token = await getToken();
      const animals = await getAnimals();

      setAnimalList(animals);
      console.log(animals);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Pet Finder Dashboard</h1>
      {animalList ? (
        <div>
          <Stat type="Number of results" value={animalList.length} />
          <Stat type="Location" value="Set to none" />
          <Stat type="Type" value="All" />
          <List animalList={animalList} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
