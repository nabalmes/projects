import { useState } from "react";
import Table from "./components/Table";
import Search from "./components/Search";
import { Data } from "./data/Data";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const searchBy = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(search) ||
        item.last_name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search)
    );
  };
  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <Table filteredData={searchBy(Data)} />
    </div>
  );
}

export default App;
