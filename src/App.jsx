import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AnimalDetail from "./components/AnimalDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../routes/Layout";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_SECRET = import.meta.env.VITE_APP_API_SECRET;

function App() {
  let token = null;
  const [animalList, setAnimalList] = useState(null); // the entire list
  const [listToDisplay, setListToDisplay] = useState(null); // subset of entire list
  const [filter, setFilter] = useState({
    toSearch: "",
    type: "All",
    age: "All",
    gender: "All",
  });

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

  useEffect(() => {
    const getAnimals = async () => {
      const resp = await fetch(
        "https://api.petfinder.com/v2/animals?limit=100&location=Chicago, Illinois",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await resp.json();
      return data.animals;
    };

    const fetchData = async () => {
      token = await getToken();
      const animals = await getAnimals();
    
      setAnimalList(animals);
      setListToDisplay(animals);
    };

    fetchData();
  }, []);

  const updateFilter = (e) => {
    const updatedFilter = {
      ...filter,
      [e.target.id]: e.target.value,
    };

    setFilter(updatedFilter);
  };

  const getAnimal = async(id) => {
    let token = await getToken();
    const resp = await fetch(
      `https://api.petfinder.com/v2/animals/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await resp.json();
    return data.animal;
  }

  useEffect(() => {
    if (animalList === null) return;

    let filteredList = animalList;

    if (filter.type != "All") {
      filteredList = filteredList.filter(
        (animal) => animal.type === filter.type
      );
    }

    if (filter.age != "All") {
      filteredList = filteredList.filter((animal) => animal.age === filter.age);
    }

    if (filter.gender != "All") {
      filteredList = filteredList.filter(
        (animal) => animal.gender === filter.gender
      );
    }

    if (filter.toSearch != "") {
      filteredList = filteredList.filter((animal) =>
        animal.name.toLowerCase().includes(filter.toSearch.toLowerCase())
      );
    }

    setListToDisplay(filteredList);
  }, [filter]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index={true}
            element={
              <Dashboard
                listToDisplay={listToDisplay}
                filter={filter}
                updateFilter={updateFilter}
              />
            }
          />
          <Route
            path="details/:id"
            element={<AnimalDetail getAnimal={getAnimal} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
