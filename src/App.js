import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./components/banner";
import { DataGrid } from "./components/dataGrid";
import { SearchBox } from "./components/searchBox";

function App() {
  const [allCapsules, setAllCapsules] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setAllCapsules(data);
        setDisplayData(data);
      });
  }, []);

  return (
    <div className="App" class="overflow-hidden">
      <Banner />
      <SearchBox allCapsules={allCapsules} setDisplayData={setDisplayData} />
      <DataGrid displayData={displayData} />
    </div>
  );
}

export default App;
