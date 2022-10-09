import '../styles/globals.css';
import '../component/atom/TransitionPages/style.scss';

// import 'ress';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
