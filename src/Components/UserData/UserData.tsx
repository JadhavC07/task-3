import UserDataTable from "../UserDataTable/UserDataTable";

const UserData = () => {
  return (
    <div className="container-sm my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg d-flex flex-row">
        <UserDataTable />
      </div>
    </div>
  );
};

export default UserData;
