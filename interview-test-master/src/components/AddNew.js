import { Link } from "react-router-dom";
const AddNew = () => {
  return (
    <div>
      <input type="button" value="search" />
      <Link to="/addNewMember">Add new Member</Link>
    </div>
  );
};

export default AddNew;
