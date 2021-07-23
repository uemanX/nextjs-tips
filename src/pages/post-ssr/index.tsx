import { GetServerSideProps, NextPage } from 'next';
import { IPost } from '../../model';

type Props = {
  posts: IPost[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3004/posts');
  const posts: IPost[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

const SsrPosts: NextPage<Props> = (props: Props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default SsrPosts;
