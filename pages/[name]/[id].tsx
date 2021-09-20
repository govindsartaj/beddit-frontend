function Post({ post }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  console.log(params);

  const res = await fetch(
    `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export default Post;
