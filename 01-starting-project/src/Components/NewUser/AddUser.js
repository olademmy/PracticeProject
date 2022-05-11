import React, { useState } from "react";
import Card from "../UI/Card";
import styler from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Wrapper";
const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Data entered is invalid" });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Incorrect Age value",
        message: "Age value entered is invalid",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    //console.log(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  };
  const userNameHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onComplete={errorHandler}
        />
      )}
      <Card className={styler.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUser}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
