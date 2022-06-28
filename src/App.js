import { React, useState, useEffect } from "react";
import "./App.css";
import Tour from "./Tour";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    //data fetching from the api
    await fetch(url)
      .then((resp) => resp.json()) //convert promise resp to json
      .then((data) => {
        setTours(data); //set tours
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  };
  //remove item function to be triggered from the tour js
  const removeItem = (id) => {
    const data = tours.filter((t) => t.id !== id);
    setTours(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(tours);
  if (isLoading) {
    return (
      <header className="flex flex-col font-bold items-center text-4xl mt-10">
        Loading...
        <h1 className="bg-blue-500 h-3 w-80 mt-2 rounded flex flex-col items-center self-center" />
      </header>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        {tours.length >= 1 && (
          <h1 className="font-bold items-center text-4xl mt-10"> Our tours</h1>
        )}
        {tours.length === 0 && (
          <h1 className="font-bold items-center text-4xl mt-10"> No tours</h1>
        )}
        <h1 className="bg-blue-500 h-3 w-80 mt-2 rounded flex flex-col items-center self-center"></h1>
        {tours &&
          tours.map((tour) => {
            return (
              <div key={tour.id} className="p-2">
                <Tour props={tour} removeItem={removeItem} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
