import { GetStaticProps, NextPage } from 'next';
import { IPost } from '../../model';

// importする順番をフォーマットしてくれるnodeを探す

type Props = {
  posts: IPost[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('http://localhost:3004/posts');
  const posts: IPost[] = await response.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

const Posts: NextPage<Props> = (props: Props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
