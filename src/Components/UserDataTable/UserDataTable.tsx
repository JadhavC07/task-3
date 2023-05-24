import axios from "axios";
import { useEffect, useState } from "react";
import UserData from "../UserData/UserData";

const UserDataTable = () => {
  const [users, setUsers] = useState([]);

  const getUserAxios = () => {
    axios
      .get("http://localhost:3001/usersData")
      .then((res) => {
        const { allUsers } = res.data;
        console.log("allUsers from axios", allUsers);
        setUsers(allUsers);
      })
      .catch((err) => {
        console.log("err from axios", err.message);
      });
  };

  useEffect(() => {
    getUserAxios();
  }, []);

  const userMap = users.map((user: any, index) => {
    return (
      <tr key={user.ID}>
        <th scope="row">1</th>
        <td>{user.name}</td>
        <td>{user.password}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">E-Mail</th>
          </tr>
        </thead>
        <tbody>{userMap}</tbody>
      </table>
      <UserData getUserAxios={getUserAxios} />
    </>
  );
};

export default UserDataTable;
