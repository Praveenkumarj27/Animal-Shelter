import React from "react";

function Table() {
  const petData = [
    {
      id: 1,
      name: "Lyka",
      breed: "Dasch",
      age: 12,
    },
    {
      id: 2,
      name: "Albie",
      breed: "Beagle",
      age: 3,
    },
    {
      id: 3,
      name: "Happy",
      breed: "Lab",
      age: 5,
    },
    {
      id: 4,
      name: "Ramu",
      breed: "Golden Retriever",
      age: 6,
    },
    {
      id: 5,
      name: "Pinky",
      breed: "Lab",
      age: 7,
    },
    {
      id: 6,
      name: "Sweetie",
      breed: "Beagle",
      age: 21,
    },
    {
      id: 7,
      name: "Blacky",
      breed: "Dasch",
      age: 11,
    },
  ];
  return (
    <div className="col-lg-6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Age(month)</th>
          </tr>
        </thead>
        <tbody  style={{textDecoration:"none"}}>
          {petData.map(({ id, name, age, breed }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{breed}</td>
                <td>{age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
