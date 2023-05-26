import axios from "axios";
import { useState } from "react";

const AddUserData: React.FC<{ getUserAxios: () => void }> = ({
  getUserAxios,
}) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [userId, setUserId] = useState(1);

  const getUserData = () => {
    const newUserData = {
      id:userId,
      Name,
      email,
      password,
    };
    axios({
      method: "post",
      url: "http://localhost:3001/addNewUser",
      data: newUserData,
    })
      .then(function (response) {
        console.log(response);
        setTimeout(() => {
          getUserAxios();
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName("");
    setEmail("");
    setPassWord("");
     setUserId((prevUserId) => prevUserId + 1);
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
            value={Name}
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
