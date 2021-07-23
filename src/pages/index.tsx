import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HomePage: NextPage = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/posts?foo=bar');
  };

  return (
    <>
      <div>Hello World</div>
      <Link href='/posts'>POST画面に遷移する　</Link>
      <button onClick={handleOnClick}>Routerで遷移</button>
    </>
  );
};

export default HomePage;
