import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { authSlice } from '../store/slices/auth';
import { getAPI } from '../utils/FetchData';
import { parseCookies } from 'nookies';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { ozonToken } = parseCookies(ctx);
    const response = await getAPI('user/profile', ozonToken);
    store.dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log('Не авторизован');
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
