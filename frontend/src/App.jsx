import { useEffect, useState } from "react";
import "./components/InsideTravelogue.css";
import "./App.css";
import TraveloguePack from "./components/TraveloguePack";

function App() {
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/citys`)
      .then((resp) => resp.json())
      .then((data) => {
        setCityData(data);
      });
  }, []);
  return (
    <div className="App">
      <TraveloguePack />
    </div>
  );
}

export default App;
