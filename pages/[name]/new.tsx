import type { NextPage } from "next";
import CreatePostForm from "../../components/CreatePostForm";
import PageTitle from "../../components/PageTitle";

const NewPost: NextPage = () => {
  return (
    <div>
      <PageTitle text={"Create Post"} />
      <CreatePostForm />
    </div>
  );
};

export default NewPost;
