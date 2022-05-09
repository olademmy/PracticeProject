import React, { useState } from "react";
import AddUser from "./Components/NewUser/AddUser";
import UsersList from "./Components/NewUser/UsersList";

function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserData((prevUserData) => {
      return [
        ...prevUserData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
