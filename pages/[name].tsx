import Link from "next/link";

function Board({ board }: any) {
  return board.posts.map((post: any) => (
    <Link href={`/${post.board}/${post._id}`} key={post._id}>
      {post.title}
    </Link>
  ));
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards"
  );
  const boards = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = boards.map((board: any) => ({
    params: { name: board.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  console.log(params);

  const res = await fetch(
    `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards/${params.name}`
  );
  const board = await res.json();

  // Pass post data to the page via props
  return { props: { board } };
}

export default Board;
