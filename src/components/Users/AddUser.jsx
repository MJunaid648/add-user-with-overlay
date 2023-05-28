import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const adUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    console.log(enteredUserName + " " + enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={adUserHandler}>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          id="username"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />

        <label htmlFor="userage"> Age (Years)</label>
        <input
          type="number"
          id="userage"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
