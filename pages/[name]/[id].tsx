import Link from "next/link";
import BedditPanel from "../../components/BedditPanel";
import PageTitle from "../../components/PageTitle";

function Post({ post }: any) {
  return (
    <BedditPanel>
      <div className="hover:text-pink-300 cursor-pointer">
        <Link href={`/${post.board}`} passHref>
          <div className="flex items-end hover:underline">
            <div className="text-2xl">👈</div>
            <div>
              {` `}back to <span className="font-semibold">{post.board}</span>
            </div>
          </div>
        </Link>
      </div>
      <PageTitle text={post.title}></PageTitle>
      <div className="">{post.body}</div>
    </BedditPanel>
  );
}

export async function getServerSideProps({ res, params }: any) {
  const response = await fetch(
    `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/posts/${params.id}`
  );

  const post = await response.json();

  if (post.board !== params.name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { post } };
}

export default Post;
