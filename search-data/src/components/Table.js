<<<<<<< HEAD
function Table({ filteredData }) {
  return (
    <>
=======
import { useState } from "react";
import { Data } from "../data/Data";
import Search from "./Search";
console.log(Data);
function Table() {
    const [search, setSearch] = useState('')
  return (
    <>
      <Search setSearch={setSearch}/>
>>>>>>> d29b9bcf55f99f28539e92899e24afa41a7d46a6
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {filteredData.map((item) => (
=======
          {Data
          .filter((item) => {
            return search.toLowerCase() === ""
            ? item 
            : item.first_name.toLowerCase().includes(search)
          })
          .map((item) => (
>>>>>>> d29b9bcf55f99f28539e92899e24afa41a7d46a6
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
