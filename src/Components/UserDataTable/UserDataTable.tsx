import axios from "axios";
import { useEffect, useState } from "react";
import AddUserData from "../AddUserData/AddUserData";
import { UserType } from "../store/stype-store";


const UserDataTable = () => {
  const [users, setUsers] = useState<UserType[]>([]);

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

  const userMap = users.map((user: UserType, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{user.Name}</td>
        <td>{user.password}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
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
      </div>
      <div className="col-lg-4 p-3 p-lg-5 pt-lg-3">
        <AddUserData getUserAxios={getUserAxios} />
      </div>
    </>
  );
};

export default UserDataTable;
