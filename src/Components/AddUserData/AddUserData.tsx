import axios from "axios";
import { useState } from "react";

const AddUserData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [userId, setUserId] = useState(3);

  const getUserData = () => {
    const newUserData = {
      id: Math.random(),
      email,
      password,
      date: new Date(),
    };
    axios({
      method: "post",
      url: "http://localhost:3001/add",
      data: newUserData,
    })
      .then(function (response) {
        console.log(response);
        // getUserAxios();
      })
      .catch(function (error) {
        console.log(error);
      });
    setName("");
    setEmail("");
    setPassWord("");

  };
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            🙂
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="User Firstname"
            aria-label="User Firstname"
            aria-describedby="basic-addon1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            🔑
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="User Lastname"
            aria-label="User Lastname"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            💌
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Users Email"
            aria-label="Users Email"
            aria-describedby="basic-addon2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={getUserData}
        >
          Add
        </button>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </>
  );
};

export default AddUserData;
