
import UserDataTable from "../UserDataTable/UserDataTable";

const UserData = () => {
  return (
    <div className="container-sm my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg d-flex flex-row">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 ">
          <UserDataTable />
        </div>
        <div className="col-lg-4 p-3 p-lg-5 pt-lg-3">
        </div>
      </div>
    </div>
  );
};

export default UserData;
