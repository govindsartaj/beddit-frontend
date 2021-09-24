import BedditButton from "./BedditButton";
import PostListItem from "./PostListItem";
import PageTitle from "./PageTitle";

const PostList = ({ posts, displayName, name }: any) => {
  return (
    <div className="w-full flex-col overflow-hidden">
      <div className="flex flex-row justify-between mx-2">
        <PageTitle text={displayName} />
        <div className="w-1/4 h-1/2 flex justify-end mt-2">
          <BedditButton text="+" to={`/${name}/new`} />
        </div>
      </div>
      {posts.map((post: any, i: number) => (
        <PostListItem key={post._id} id={post._id} post={post} board={name} />
      ))}
      
    </div>
  );
};

export default PostList;
