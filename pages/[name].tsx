import Link from "next/link";
import PostList from "../components/PostList";

function Board({ board }: any) {
  return (
    <PostList
      displayName={board.displayName}
      name={board.name}
      posts={board.posts}
    />
  );
}


export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards/${params.name}`
  );
  const board = await response.json();

  if (!!board.error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Pass post data to the page via props
  return { props: { board } };
}

export default Board;
