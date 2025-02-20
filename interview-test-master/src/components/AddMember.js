import { useState } from "react";

const AddMember = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [rating, setRating] = useState(0);
  const [newPerson, setNewPerson] = useState({});

  return (
    <div className="add-member">
      <h2>Add Member</h2>
    </div>
  );
};

export default AddMember;
