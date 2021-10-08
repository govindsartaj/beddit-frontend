import { useState } from "react";
import BedditButton from "./BedditButton";
import BedditPanel from "./BedditPanel";
import FormField from "./FormField";
import TextAreaField from "./TextAreaField";

const CreateBoardForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <BedditPanel className="w-full">
      <FormField
        label="Give your post a title."
        placeholder="Title"
        value={title}
        setValue={setTitle}
      />
      <TextAreaField
        label="Post body"
        placeholder="What would you like to share?"
        value={body}
        setValue={setBody}
      />
      <div className="flex justify-end">
        <BedditButton
          text="Create"
          to="/boards/new"
          onClick={() => console.log(title, body)}
        />
      </div>
    </BedditPanel>
  );
};

export default CreateBoardForm;
