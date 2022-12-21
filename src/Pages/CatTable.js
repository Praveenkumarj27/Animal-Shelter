import React from 'react'

function CatTable() {
    const petData = [
        {
          id: 1,
          name: "Pinky",
          breed: "Persian",
          age: 4,
        },
        {
          id: 2,
          name: "Pussy",
          breed: "Ragdoll",
          age: 3,
        },
        {
          id: 3,
          name: "Chichu",
          breed: "Scottish FOld",
          age: 7,
        },
        {
          id: 4,
          name: "Blacky",
          breed: "British Shorthair",
          age: 6,
        },
        {
          id: 5,
          name: "Kitty",
          breed: "Burmise cat",
          age: 7,
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
  )
}

export default CatTable