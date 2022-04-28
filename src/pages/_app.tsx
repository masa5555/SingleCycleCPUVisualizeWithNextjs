// https://nextjs.org/docs/messages/css-global
import '../styles/tailwind.css'

const _App = ({ Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default _App