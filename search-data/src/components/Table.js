function Table({ filteredData, search }) {
  return (
    <>
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
          {filteredData
          .filter((item) => {
            return search === ''
            ? item 
            : item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search)
          })
          .map((item) => (
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
