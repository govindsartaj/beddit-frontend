import { useState } from "react";
import BedditButton from "./BedditButton";
import BedditPanel from "./BedditPanel";
import FormField from "./FormField";

const CreateBoardForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <BedditPanel className="max-w-64">
        <FormField
          label="Name your board. You can change this at any time!"
          placeholder="Board name"
          value={displayName}
          setValue={setDisplayName}
        />
        <FormField
          url="http://beddit.co/"
          placeholder="unique"
          label="Pick a unique board ID for your board's URL. Choose wisely; this cannot be changed later!"
          value={name}
          setValue={setName}
        />
        <FormField
          label="Describe your board. What will you be talking about here?"
          placeholder="Description"
          value={description}
          setValue={setDescription}
        />
        <div className="flex justify-end">
          <BedditButton
            text="Create"
            to="/boards/new"
            onClick={() => console.log(displayName, name, description)}
          />
        </div>
      </BedditPanel>
    </>
  );
};

export default CreateBoardForm;
