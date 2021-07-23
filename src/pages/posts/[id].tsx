import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { IPost } from '../../model';

type PageProps = {
  post: IPost;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3004/posts');
  const posts: IPost[] = await response.json();

  const paths = posts.map((post) => ({
    params: {
      id: String(post.id),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string;

  const response = await fetch(`http://localhost:3004/posts/${id}`);
  const post: IPost = await response.json();

  return {
    props: {
      post,
    },
  };
};

const Post: NextPage<PageProps> = ({ post }: PageProps) => {
  const router = useRouter();
  console.log('router.query');
  console.log(router.query);

  return (
    <ul>
      <li>{post.id}</li>
      <li>{post.title}</li>
      <li>{post.author}</li>
    </ul>
  );
};

export default Post;
