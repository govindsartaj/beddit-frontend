import Link from "next/link";
import BedditPanel from "../../components/BedditPanel";
import PageTitle from "../../components/PageTitle";
import cookie from "cookie";

const formatDate = (date: string) => {
  return new Date(date).toDateString().substr(4, 12);
};

const formatTime = (date: string) => {
  const main = new Date(date).toLocaleTimeString().split(" ");
  const time = `${main[0].split(":")[0]}:${main[0].split(":")[1]}`;
  const amOrPm = main[1];

  return `${time} ${amOrPm}`;
};

function Post({ post }: any) {
  return (
    <BedditPanel className="w-full">
      <div className="py-2 cursor-pointer hover:text-pink-300">
        <Link href={`/${post.board}`} passHref>
          <div className="flex items-end py-2 hover:underline">
            <div className="text-2xl">👈</div>
            <div>
              {` `}back to <span className="font-semibold">{post.board}</span>
            </div>
          </div>
        </Link>
      </div>
      <PageTitle text={post.title}></PageTitle>
      <div className="py-2 text-sm font-light">
        posted by{" "}
        <span className="cursor-pointer hover:underline">{post.author}</span> on{" "}
        {formatDate(post.created)} at {formatTime(post.created)}
      </div>
      <div className="">{post.body}</div>
    </BedditPanel>
  );
}

export async function getServerSideProps({ req, res, params }: any) {
  const response = await fetch(
    `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/posts/${params.id}`,
    { credentials: "include" }
  );

  const cookies = req.headers;

  console.log(cookies);

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
