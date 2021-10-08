import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const PostListItem = ({ id, post, board }: any) => {
  const router = useRouter();

  const handleClick = ({ target }: any) => {
    if (target.className.includes("profile-link")) {
      router.push(`/users/${post.author}`);
    } else {
      router.push(`/${board}/${id}`);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="border-1 border-gray-100 h-auto cursor-pointer m-2 p-4 bg-gray-50 rounded-lg shadow-md">
        <div className="flex items-baseline">
          <div className="font-light text-2xl mr-2 truncate">{post.title}</div>
          <div className="font-light text-sm cursor-pointer hover:underline profile-link">
            {post.author}
          </div>
        </div>
        <div className="font-light text-normal truncate">{post.body}</div>
      </div>
    </div>
  );
};

export default PostListItem;
