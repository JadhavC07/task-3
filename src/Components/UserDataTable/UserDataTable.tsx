import axios from "axios";
import { useEffect, useState } from "react";
import AddUserData from "../AddUserData/AddUserData";
import { UserType } from "../store/stype-store";

const UserDataTable = () => {
  const [users, setUsers] = useState([]);

  const getUserAxios = () => {
    axios
      .get("http://localhost:3001/usersData")
      .then((res) => {
        console.log("Response from axios", res.data);
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

  const userMap = users?.map((user: UserType) => {
    return (
      <tr key={user.id}>
        <th scope="row">1</th>
        <td>{user.Name}</td>
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
      <AddUserData getUserAxios={getUserAxios} />
    </>
  );
};

export default UserDataTable;
