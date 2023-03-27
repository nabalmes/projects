<<<<<<< HEAD
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
=======
import Table from './components/Table';
import './App.css';

function App(search) {
  return (
    <div className="App">
      <Table/>
>>>>>>> d29b9bcf55f99f28539e92899e24afa41a7d46a6
    </div>
  );
}

export default App;
